# Rollup
`Rollup` 是一个 `JavaScript` 模块打包器，可以将小块代码编译成大块复杂的代码，例如 `library` 或应用程序。`Rollup` 对代码模块使用新的标准化格式，这些标准都包含在 `JavaScript` 的 `ES6` 版本中，而不是以前的特殊解决方案，如 `CommonJS` 和 `AMD`。`ES6` 模块可以使你自由、无缝地使用你最喜爱的 `library` 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。`ES6` 模块最终是由浏览器原生实现，但当前 `Rollup` 可以使你提前体验。

如果你将项目拆分成小的单独文件中，这样开发软件通常会很简单，因为这通常会消除无法预知的相互影响 (`remove unexpected interaction`)，以及显著降低了所要解决的问题的复杂度 (`complexity of the problem`)，并且可以在项目最初时，就简洁地编写小的项目 (不一定是标准答案)。不幸的是，`JavaScript` 以往并没有将此功能作为语言的核心功能。

:::tip
`Rollup` 的简洁性让它更适合用于类库的打包处理。
:::
## 安装使用

### 示例项目
我们从新建一个项目开始，暂且命名为 `rollup-demo`，可以做如下操作

```shell
#创建项目目录并进入当前目录
mkdir rollup-demo && cd rollup-demo

#初始化 package.json
npm init -y

#开发环境安装 rollup
npm install -D rollup
npm install -D @rollup/plugin-commonjs
npm install -D @rollup/plugin-node-resolve

#创建.gitignore 文件
echo '.DS_Store \n node_modules \n dist' > .gitignore

#创建 rollup.config.js
touch rollup.config.js
```

添加三种不同的打包范式到 `package.json`，这里配置的目的是在下面 `rollup.config.js` 文件中使用。
```js
"main": "dist/how-long-till-lunch.cjs.js",
"module": "dist/how-long-till-lunch.esm.js",
"browser": "dist/how-long-till-lunch.umd.js",
```

添加以下文件到 `rollup.config.js`
```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
	// 浏览器通用 UMD 范式
	{
		input: 'src/main.js',
		output: {
			name: 'howLongUntilLunch',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // Rollup 可以发现并使用 `ms` 模块
			commonjs() // Rollup 可以将 `ms` 模块装好为 ES module
		]
	},

  // 配置 CommonJS 和 ES module 范式
	{
		input: 'src/main.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
```
完善下 `package.json`
```js
{
  "name": "rollup-demo",
  "version": "1.0.0",
  "main": "dist/how-long-till-lunch.cjs.js",
  "module": "dist/how-long-till-lunch.esm.js",
  "browser": "dist/how-long-till-lunch.umd.js",
  "devDependencies": {
    "@rollup/plugin-commonjs": "^11.0.1",
    "@rollup/plugin-node-resolve": "^7.0.0",
    "rollup": "^1.29.0"
  },
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "pretest": "npm run build"
  },
  "files": [
    "dist"
  ]
}
```
:::tip
我们以 [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) 项目为例。
:::

### 相关命令



## 特性
### Tree-shaking
除了使用 `ES6` 模块之外，`Rollup` 还静态分析代码中的 `import`，并将排除任何未实际使用的代码。
