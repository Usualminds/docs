# 有趣题

## 划分为 k 个相等的子集 ⭐⭐⭐
[👉 Leetcode 链接-463](https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/)

给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

- 示例 1：
    - 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
    - 输出： True
    - 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
  
- 示例 2:
    - 输入: nums = [1,2,3,4], k = 3
    - 输出: false


```ts
// TODO:
let nums: number[];
let n: number, t: number, k: number;
function canPartitionKSubsets(_nums: number[], _k: number): boolean {
    nums = _nums; k = _k;
    let tot = 0
    for (let x of nums) tot += x
    if (tot % k != 0) return false
    nums.sort((a,b)=>a-b)
    n = nums.length; t = tot / k
    return dfs(n - 1, 0, 0, new Array<boolean>(n).fill(false))
};
function dfs(idx: number, cur: number, cnt: number, vis: boolean[]): boolean {
    if (cnt == k) return true
    if (cur == t) return dfs(n - 1, 0, cnt + 1, vis)
    for (let i = idx; i >= 0; i--) {
        if (vis[i] || cur + nums[i] > t) continue
        vis[i] = true
        if (dfs(idx - 1, cur + nums[i], cnt, vis)) return true
        vis[i] = false
        if (cur == 0) return false
    }
    return false
}
```
## Nim 游戏

[👉 Leetcode 链接-292](https://leetcode.cn/problems/nim-game/)

你和你的朋友，两个人一起玩 Nim 游戏：

桌子上有一堆石头。
你们轮流进行自己的回合，你作为先手。
每一回合，轮到的人拿掉 1 - 3 块石头。
拿掉最后一块石头的人就是获胜者。
假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false。

- 主要思路：[巴什博弈](https://baike.baidu.com/item/%E5%B7%B4%E4%BB%80%E5%8D%9A%E5%BC%88/1819345)：**在先取完者胜的巴什博弈中，若 `n` 可被 `m+1` 整除，则后手方必胜，否则先手方必胜**

- 游戏过程：原始先手只需要确保每次都选择 `x % 4` 个石子 (`x` 为当前石子数量)，就可以确保交由自己的局面一直满足 `x % 4 != 0`，交由对方的局面一直满足 `x % 4 == 0`，直到最后回合的到来。

```ts
function canWinNim(n: number): boolean {
    return (n % 4) !== 0
};
```


