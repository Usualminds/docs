
# 动态规划
动态规划四要素
- 状态定义
- 转移方程
- 初始状态
- 返回值

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

## 股票的最大利润
假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

::: tip 
- 示例 1:
  - 输入: [7,1,5,3,6,4]
  - 输出: 5
  - 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
    
- 示例 2:
  - 输入: [7,6,4,3,1]
  - 输出: 0
  - 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

:::

### 暴力法
```js 
function maxProfit(prices: number[]): number {
        let maxprofit = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                let profit = prices[j] - prices[i];
                if (profit > maxprofit) {
                    maxprofit = profit;
                }
            }
        }
        return maxprofit;
    }
}
```

### 一次遍历
```ts
function maxProfit(prices: number[]): number {
    let min = prices[0], max = 0

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }

    return max
};
```

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

## 把数字翻译成字符串
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

::: tip
- 输入: 12258
- 输出: 5
- 解释: 12258 有 5 种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
:::

```ts
function translateNum(num: number): number {
    let str = num.toString(), len = str.length, pre = 0, cur =0, result = 1

    for(let i = 0;i<len;i++){
        pre = cur
        cur = result 
        result = 0
        result += cur

        if(i===0) continue

        let sub = str.slice(i-1, i+1)
        if(Number(sub) >9 && Number(sub) < 26) {
            result += pre
        }
    }
    return result
};
```

## 最长不含重复字符的子字符串
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

::: tip 
- 示例 1:
    - 输入: "abcabcbb"
    - 输出: 3 
    - 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
- 示例 2:
    - 输入: "bbbbb"
    - 输出: 1
    - 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
:::

> 思路：通过哈希表记录重复字符出现对位置，转移公式 `max(dp[j - 1], dp[j])`

### 哈希表+动态规划

```ts
function lengthOfLongestSubstring(s: string): number {
    let map = new Map(), len = s.length, temp = 0, max = 0, left = -1

    for (let right = 0; right < len; right++) {
        let char = s.charAt(right)

        if (map.has(char)) {
            left = map.get(char)
        }

        map.set(char, right)

        temp = temp < (right - left) ? (temp + 1) : (right - left)

        max = Math.max(max, temp)
    }

    return max
};
```

### 哈希表+双指针
```ts
function lengthOfLongestSubstring(s: string): number {
    let map = new Map(), len = s.length, left = -1, max = 0

    for (let i = 0; i < len; i++) {
        let char = s.charAt(i)

        if (map.has(char)) {
            let value = map.get(char)
            left = Math.max(left, value)
        }

        map.set(char, i)

        max = Math.max(max, i - left + 1)
    }

    return max
};
```
## 最长上升子序列
> :point_right: 
[题目链接](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

::: tip 示例

- 输入：nums = [10,9,2,5,3,7,101,18]
- 输出：4
- 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4
:::

转移公式 `dp[i] = max(dp[i], dp[j] + 1), j<i`

```ts
function lengthOfLIS(nums: number[]): number {
    let len = nums.length, dp = new Array(len).fill(1), max = 0

    if (len === 0) return 0
    
    for (let i = 0; i < len; i++){
        for (let j = 0; j < i; j++){
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }

        max = Math.max(max, dp[i])
    }

    return max
};
```


## 最长递增子序列的个数
> :point_right: 
[题目链接](https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/)

给定一个未排序的整数数组，找到最长递增子序列的个数。

::: tip 示例

- 输入：[1,3,5,4,7]
- 输出：2
- 解释：有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
:::

转移公式：`dp[i] = max(dp[i], dp[j] + 1), 0≤j<i && num[j]<num[i]`

```ts
function findNumberOfLIS(nums: number[]): number {
    let len = nums.length, max = 0, res = 0, dp = new Array(len).fill(1), count = new Array(len).fill(1)

    for (let i = 0; i < len; i++){
        for (let j = 0; j < i; j++){
            if (nums[i] > nums[j]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                } else if (dp[i] === dp[j] + 1) {
                    count[i] += count[j]
                }
            }
        }

        if (dp[i] > max) {
            max = dp[i]
            res = count[i]
        } else if(max === dp[i]) {
            res += count[i]
        }
    }

    return res
};
```