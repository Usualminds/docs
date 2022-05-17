# 深入

## 类型系统
`Typescript` 并不总是可靠的，如下:
```ts
const temp: string = (1 as unknown) as string

typeof temp === 'number'
```
类型层次：`never < null < undefined < string | booolean | ... < unkonwn < any`

## 声明文件
- 内部自带声明文件：`lib.d.ts`、`lib.dom.d.ts`
- 第三方声明文件：`Jquery`，[`DefinitelyTyped`](https://github.com/DefinitelyTyped/DefinitelyTyped) 查找第三方声明文件
- 自定义声明文件

## tsconfig.json
- baseUrl
- paths
- rootDirs
- `traceResolution`, 追踪编译过程日志

## tsc 编译
- --watch
- --build
- --module
- --target
- --project
- --help
- 