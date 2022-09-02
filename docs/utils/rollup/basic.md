# Rollup
`Rollup` 是一个 `JavaScript` 模块打包器，可以将小块代码编译成大块复杂的代码，例如 `library` 或应用程序。`Rollup` 对代码模块使用新的标准化格式，这些标准都包含在 `JavaScript` 的 `ES6` 版本中，而不是以前的特殊解决方案，如 `CommonJS` 和 `AMD`。`ES6` 模块可以使你自由、无缝地使用你最喜爱的 `library` 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。`ES6` 模块最终还是要由浏览器原生实现，但当前 `Rollup` 可以使你提前体验

如果你将项目拆分成小的单独文件中，这样开发软件通常会很简单，因为这通常会消除无法预知的相互影响 (`remove unexpected interaction`)，以及显著降低了所要解决的问题的复杂度 (`complexity of the problem`)，并且可以在项目最初时，就简洁地编写小的项目 (不一定是标准答案)。不幸的是，`JavaScript` 以往并没有将此功能作为语言的核心功能。
## 安装使用
```shell
#新建项目
npm init -y

#开发环境安装
npm install -D rollup

#新建rollup.config.js配置文件
touch rollup.config.js


#全局安装
#npm install --global rollup


```



##
