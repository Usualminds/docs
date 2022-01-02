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

## 2022.1.2
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/elimination-game/)

列表 arr 由在范围 [1, n] 中的所有整数组成，并按严格递增排序。请你对 arr 应用下述算法：

从左到右，删除第一个数字，然后每隔一个数字删除一个，直到到达列表末尾。
重复上面的步骤，但这次是从右到左。也就是，删除最右侧的数字，然后剩下的数字每隔一个删除一个。
不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
给你整数 n ，返回 arr 最后剩下的数字。

::: tip
- 示例 1：

输入：n = 9
输出：6
解释：
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [2, 4, 6, 8]
arr = [2, 6]
arr = [6]

- 示例 2：

输入：n = 1
输出：1
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function lastRemaining(n: number): number {
    return count(n, true)
};

function count(n: number, flag: boolean){
    if(n === 1) return 1

    if(flag) return 2*count(Math.floor(n /2), !flag)

    if(n % 2 === 1) return 2*count(Math.floor(n /2), !flag)

    return 2*count(Math.floor(n /2), !flag) - 1 
}
```
  </CodeGroupItem>
</CodeGroup>