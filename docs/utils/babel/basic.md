# Babel
`Babel` 是一个 `JavaScript` 编译器。`Babel` 不做类型检查，你仍然需要安装 `Flow` 或 `TypeScript` 来执行类型检查的工作。

## 用途
- 转译 `esnext`、`typescript`、`flow` 等到目标环境支持的 `js`
- 代码转换，比如：函数插桩、自动国际化
- 代码静态分析：linter、API 文档、类型检查、压缩混淆、js 解释器

## 编译流程
`Babel` 编译流程如下，主要包含三个步骤

![](./assets/babel-flow.svg)

### parse

### transform

### generate
