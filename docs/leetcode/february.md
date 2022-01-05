# 二月

## 2022.2.1
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/)



::: tip
- 示例 1：

输入：original = [1,2,3,4], m = 2, n = 2
输出：[[1,2],[3,4]]


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