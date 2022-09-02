# 二月

## 2022.2.15 矩阵中的幸运数 ⭐
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/)

给你一个 m * n 的矩阵，矩阵中的数字各不相同。请你按任意顺序返回矩阵中的所有幸运数。

幸运数是指矩阵中满足同时下列两个条件的元素：

- 在同一行的所有元素中最小
- 在同一列的所有元素中最大


::: tip
- 示例 1：

    - 输入：matrix = [[3,7,8]，[9,11,13]，[15,16,17]]
    - 输出：[15]

:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function luckyNumbers(matrix: number[][]): number[] {
    let row = matrix.length, columns = matrix[0].length, res = []
    let tempRows = new Array(row).fill(Number.MAX_SAFE_INTEGER), tempColums = new Array(columns).fill(0)

    // 先构造每一行和每一列的最大值
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < columns; j++) {
            tempRows[i] = Math.min(tempRows[i], matrix[i][j])
            tempColums[j] = Math.max(tempColums[j], matrix[i][j])
        }
    }

    // 比较相等即可
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] === tempColums[j] && matrix[i][j] === tempRows[i]) {
                res.push(matrix[i][j])
            }
        }
    }

    return res
};
```
  </CodeGroupItem>
</CodeGroup>