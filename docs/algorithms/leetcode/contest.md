# 周赛笔记

## 275 周赛复盘

### 矩阵是否唯一
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/check-if-every-row-and-column-contains-all-numbers/)


<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts 解法一
function checkValid(matrix: number[][]): boolean {
    let len = matrix.length

    for (let i = 1; i < len; i++) {
        if (!checkRow(matrix, i) || !checkCol(matrix, i)) {
            return false
        }
    }

    return true
};


function checkRow(mat: number[][], row: number): boolean {
    let temp = [], size = mat.length
    for (let col = 0; col < size; col++) {
        temp[mat[row][col]] = true
    }

    for (let i = 1; i <= size; i++) {
        if (!temp[i]) return false
    }
    return true
}

function checkCol(mat: number[][], col: number): boolean {
    let temp = [], size = mat.length

    for (let row = 0; row < size; row++) {
        temp[mat[row][col]] = true
    }

    for (let i = 1; i <= size; i++) {
        if (!temp[i]) return false

    }

    return true
}
```
  </CodeGroupItem>

   <CodeGroupItem title="TS" active>

```ts 解法二
function checkValid(mat: number[][]) {
    let n = mat.length
    for (let i = 0; i < n; i++) {
        let rows = new Set(), cols = new Set()
        for (let j = 0; j < n; j++) {
            rows.add(mat[i][j])
            cols.add(mat[j][i])
        }

        if (rows.size < n || cols.size < n) return false
    }


    return true
}
```
  </CodeGroupItem>
</CodeGroup>

## 276 场周赛
> :point_right: [Leetcode 链接](https://leetcode-cn.com/contest/weekly-contest-276/ranking/)

### 将字符串拆分为若干长度为 k 的组

> :point_right: [Leetcode 链接](https://leetcode-cn.com/problems/divide-a-string-into-groups-of-size-k/)

字符串 s 可以按下述步骤划分为若干长度为 k 的组：

第一组由字符串中的前 k 个字符组成，第二组由接下来的 k 个字符串组成，依此类推。每个字符都能够成为 某一个 组的一部分。
对于最后一组，如果字符串剩下的字符 不足 k 个，需使用字符 fill 来补全这一组字符。
注意，在去除最后一个组的填充字符 fill（如果存在的话）并按顺序连接所有的组后，所得到的字符串应该是 s 。

给你一个字符串 s ，以及每组的长度 k 和一个用于填充的字符 fill ，按上述步骤处理之后，返回一个字符串数组，该数组表示 s 分组后 每个组的组成情况 。

::: tip
- 输入：s = "abcdefghij", k = 3, fill = "x"
- 输出：["abc","def","ghi","jxx"]
- 解释：
与前一个例子类似，形成前三组 "abc"、"def" 和 "ghi" 。
对于最后一组，字符串中仅剩下字符 'j' 可以用。为了补全这一组，使用填充字符 'x' 两次。
因此，形成 4 组，分别是 "abc"、"def"、"ghi" 和 "jxx" 。
:::

```ts
function divideString(s: string, k: number, fill: string): string[] {
    let ans = [], len = s.length

    for (let i = 0; i < len; i = i + k){
        let char = s.slice(i, i+k)

        while (char.length < k) {
            char += fill
        }

        ans.push(char)  
    }
  
    return ans
};
```

### 得到目标值的最少行动次数

> :point_right: [Leetcode 链接](https://leetcode-cn.com/problems/minimum-moves-to-reach-target-score/)

你正在玩一个整数游戏。从整数 1 开始，期望得到整数 target 。

在一次行动中，你可以做下述两种操作之一：

递增，将当前整数的值加 1（即， x = x + 1）。
加倍，使当前整数的值翻倍（即，x = 2 * x）。
在整个游戏过程中，你可以使用 递增 操作 任意 次数。但是只能使用 加倍 操作 至多 maxDoubles 次。

给你两个整数 target 和 maxDoubles ，返回从 1 开始得到 target 需要的最少行动次数。

::: tip
- 输入：target = 19, maxDoubles = 2
- 输出：7
- 解释：最初，x = 1 。
递增 3 次，x = 4 。
加倍 1 次，x = 8 。
递增 1 次，x = 9 。
加倍 1 次，x = 18 。
递增 1 次，x = 19 。
:::

```ts
function minMoves(target: number, maxDoubles: number): number {
    if (maxDoubles === 0) return target - 1

    let max = 0, count = 0

    while ((target > 1) && (count < maxDoubles)) {
        if (target % 2 !== 0) {
            target--
        } else {
            target = target / 2
            count++
        }
        max++
    }

    while (target > 1 && count >= maxDoubles) {
        max++
        target--
    }

    return max
};
```

### 解决智力问题（待复盘）⭐⭐

> :point_right: [Leetcode 链接](https://leetcode-cn.com/problems/solving-questions-with-brainpower/)

给你一个下标从 0 开始的二维整数数组 questions ，其中 questions[i] = [pointsi, brainpoweri] 。

这个数组表示一场考试里的一系列题目，你需要 按顺序 （也就是从问题 0 开始依次解决），针对每个问题选择 解决 或者 跳过 操作。解决问题 i 将让你 获得  pointsi 的分数，但是你将 无法 解决接下来的 brainpoweri 个问题（即只能跳过接下来的 brainpoweri 个问题）。如果你跳过问题 i ，你可以对下一个问题决定使用哪种操作。

比方说，给你 questions = [[3, 2], [4, 3], [4, 4], [2, 5]] ：
如果问题 0 被解决了， 那么你可以获得 3 分，但你不能解决问题 1 和 2 。
如果你跳过问题 0 ，且解决问题 1 ，你将获得 4 分但是不能解决问题 2 和 3 。
请你返回这场考试里你能获得的 最高 分数

::: tip
- 输入：questions = [[3,2],[4,3],[4,4],[2,5]]
- 输出：5
- 解释：解决问题 0 和 3 得到最高分。
  - 解决问题 0 ：获得 3 分，但接下来 2 个问题都不能解决。
  - 不能解决问题 1 和 2
  - 解决问题 3 ：获得 2 分
  总得分为：3 + 2 = 5 。没有别的办法获得 5 分或者多于 5 分。
:::

```ts
function mostPoints(questions: number[][]): number {

};
```

### 同时运行 N 台电脑的最长时间 （待复盘）⭐⭐
> :point_right: [Leetcode 链接](https://leetcode-cn.com/problems/maximum-running-time-of-n-computers/)

你有 n 台电脑。给你整数 n 和一个下标从 0 开始的整数数组 batteries ，其中第 i 个电池可以让一台电脑 运行 batteries[i] 分钟。你想使用这些电池让 全部 n 台电脑 同时 运行。

一开始，你可以给每台电脑连接 至多一个电池 。然后在任意整数时刻，你都可以将一台电脑与它的电池断开连接，并连接另一个电池，你可以进行这个操作 任意次 。新连接的电池可以是一个全新的电池，也可以是别的电脑用过的电池。断开连接和连接新的电池不会花费任何时间。

注意，你不能给电池充电。

请你返回你可以让 n 台电脑同时运行的 最长 分钟数。

```ts
function maxRunTime(n: number, batteries: number[]): number {
//
};
```