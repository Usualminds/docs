# 一月

## 2022.1.1
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/)

给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和  n 。你需要使用 original 中 所有 元素创建一个 m 行 n 列的二维数组。

original 中下标从 0 到 n - 1 （都 包含 ）的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 （都 包含 ）的元素构成二维数组的第二行，依此类推。

请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组

::: tip
- 示例 1：

输入：original = [1,2,3,4], m = 2, n = 2
输出：[[1,2],[3,4]]

- 示例 2：

输入：original = [1,2], m = 1, n = 1
输出：[]

:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function construct2DArray(original: number[], m: number, n: number): number[][] {
  let len = original.length, results = []
  let temp = []

  if (m * n !== len) return []

  for (let i = 0; i < len; i++) {
    temp.push(original[i])

    if (temp.length === n) {
      results.push(temp)
      temp = []
    }
  }

  return results
};
```
  </CodeGroupItem>
</CodeGroup>