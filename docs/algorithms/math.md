# 数学

## 最大公约数
```ts
function getMax(a: number, b: number): number {
    if (b === 0) return a
    let r = a % b
    return getMax(b, r)
}
```