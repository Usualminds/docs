# 深入

## 类型系统
`Typescript` 并不总是可靠的，如下:
```ts
const temp: string = (1 as unknown) as string

typeof temp === 'number'
```
类型层次：`never < null < undefined < string | booolean | ... < unkonwn < any`
