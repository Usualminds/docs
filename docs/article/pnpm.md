# pnpm
![](./assets/pnpm/pnpm.svg)
## 背景

## pnpm 解决了什么问题

## pnpm 使用方法

#### ci 持续集成
在 GitHub Actions 上，您可以像这样使用 pnpm 安装和缓存您的依赖项 .github/workflows/NAME.yml）
```yml
name: pnpm Example Workflow
on:
  push:
jobs:
  build:
    runs-on: ubuntu-20.04
    strategy:
      matrix:
        node-version: [15]
    steps:
    - uses: actions/checkout@v2
    - uses: pnpm/action-setup@v2.0.1
      with:
        version: 6.20.3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'pnpm'
    - name: Install dependencies
      run: pnpm install
```

#### 只允许 pnpm
当您在项目中使用 pnpm 时，您不希望被其他人意外运行 npm install 或 yarn。 为了防止开发人员使用其他的包管理器，您可以将下面的这个 preinstall 脚本添加到您的 package.json：

```json
{
    "scripts": {
        "preinstall": "npx only-allow pnpm"
    }
}
```
## pnpm 的原理

## pnpm、npm yarn 工具链效果对比

### 时间
https://pnpm.io/zh/benchmarks

### 功能
https://pnpm.io/zh/feature-comparison

## pnpm 的局限

## 参考资料

https://pnpm.io/zh/community
https://pnpm.io/zh/blog