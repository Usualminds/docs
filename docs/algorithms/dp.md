
# 动态规划

## 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

::: tip
- 示例 1：
    - 输入：[1, 2, 3, 4, 5]
    - 输出：此列表中的结点 3(序列化形式：[3, 4, 5]),返回的结点值为 3 。 (测评系统对该结点序列化表述是[3, 4, 5]) 。注意，我们返回了一个 ListNode 类型的对象 ans，这样：ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

- 示例 2：
    - 输入：[1, 2, 3, 4, 5, 6]
    - 输出：此列表中的结点 4(序列化形式：[4, 5, 6]),由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head, fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
};
```
  </CodeGroupItem>
</CodeGroup>

## 礼物的最大价值

在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

::: tip
- 示例 1：
    - 输入: 
        ```js
        [
          [1,3,1],
          [1,5,1],
          [4,2,1]
        ]
        ```
    - 输出: 12
    - 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function maxValue(grid: number[][]): number {
    const row = grid.length, column = grid[0].length

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i === 0 && j === 0) continue

            if (i === 0) {
                grid[i][j] += grid[i][j - 1]
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j]
            } else {
                grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1])
            }
        }
    }

    return grid[row - 1][column - 1]
};
```
  </CodeGroupItem>
</CodeGroup>