# 一月

## 2022.1.1 数组 ⭐
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

## 2022.1.2 数组 ⭐⭐
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

## 2022.1.3 日期 ⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/day-of-the-week/)

给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

输入为三个整数：day、month 和 year，分别表示日、月、年。

您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

::: tip
- 示例 1：

输入：day = 31, month = 8, year = 2019
输出："Saturday"

- 示例 2：

输入：day = 18, month = 7, year = 1999
输出："Sunday"
- 示例 3：

输入：day = 15, month = 8, year = 1993
输出："Sunday"
:::

<CodeGroup>
  <CodeGroupItem title="解法一" active>

```ts
function dayOfTheWeek(day: number, month: number, year: number): string {
    let weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let today = getDay(day, month, year)

    return weeks[(today + 3) % 7]
};

function getDay(day: number, month: number, year: number): number {
    let count = 0, 
        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]

    count = (year - 1971) * 365 + Math.floor((year - 1969) / 4)

    if((year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) && month > 2){
        count++
    }

    for(let i=0;i<month-1;i++){
        count += months[i]
    }

    return count + day
}
```
  </CodeGroupItem>

 <CodeGroupItem title="解法二" active>

```ts
// API 调用方法
function dayOfTheWeek(day: number, month: number, year: number): string {
    let weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let now = new Date(year, month-1, day)

    return weeks[now.getDay()]
}
```
  </CodeGroupItem>

 <CodeGroupItem title="解法三" active>

```ts
function dayOfTheWeek(day: number, month: number, year: number): string {
    // 蔡勒公式释义： https://zh.wikipedia.org/wiki/%E8%94%A1%E5%8B%92%E5%85%AC%E5%BC%8F
    // w：星期（计算所得的数值对应的星期：0-星期日；1-星期一；2-星期二；3-星期三；4-星期四；5-星期五；6-星期六）
    let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (month < 3) {
        month += 12
        year--
    }

    // c：年份前两位数 
    // y：年份后两位数
    // m：月（m的取值范围为3至14，即在蔡勒公式中，某年的1、2月要看作上一年的13、14月来计算，比如2003年1月1日要看作2002年的13月1日来计算)
    // d：日
    let c = Math.floor(year / 100), y = year % 100, m = month, d = day

    // 公式
    let w = (y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + 2 * m + Math.floor(3 * (m + 1) / 5) + d + 1) 

    // 防止负数溢出
    w = (w%7 + 7) % 7

    return weeks[w]
};
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.4 图 ⭐⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/cat-and-mouse/)

猫和老鼠

两位玩家分别扮演猫和老鼠，在一张 无向 图上进行游戏，两人轮流行动。

图的形式是：graph[a] 是一个列表，由满足 ab 是图中的一条边的所有节点 b 组成。

老鼠从节点 1 开始，第一个出发；猫从节点 2 开始，第二个出发。在节点 0 处有一个洞。

在每个玩家的行动中，他们 必须 沿着图中与所在当前位置连通的一条边移动。例如，如果老鼠在节点 1 ，那么它必须移动到 graph[1] 中的任一节点。

此外，猫无法移动到洞中（节点 0）。

然后，游戏在出现以下三种情形之一时结束：

如果猫和老鼠出现在同一个节点，猫获胜。
如果老鼠到达洞中，老鼠获胜。
如果某一位置重复出现（即，玩家的位置和移动顺序都与上一次行动相同），游戏平局。
给你一张图 graph ，并假设两位玩家都都以最佳状态参与游戏：

如果老鼠获胜，则返回 1；
如果猫获胜，则返回 2；
如果平局，则返回 0 。


<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
// TODO: 复杂动态规划及图论相关，待研究
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.5 字符串 ⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)

给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。

注意：你 不能 修改非 '?' 字符。

题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。

在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。

::: tip
- 示例 1：

输入：s = "?zs"
输出："azs"
解释：该示例共有 25 种解决方案，从 "azs" 到 "yzs" 都是符合题目要求的。只有 "z" 是无效的修改，因为字符串 "zzs" 中有连续重复的两个 'z' 。
- 示例 2：

输入：s = "ubv?w"
输出："ubvaw"
解释：该示例共有 24 种解决方案，只有替换成 "v" 和 "w" 不符合题目要求。因为 "ubvvw" 和 "ubvww" 都包含连续重复的字符。

- 示例 3：

输入：s = "j?qg??b"
输出："jaqgacb"
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function modifyString(s: string): string {
    let len = s.length, arr = [...s], signal = '?'

    for(let i=0;i<len;i++){
        if(arr[i] === signal){
            for(let j=0;j<3;j++){
                if( (i>0  && arr[i-1] === String.fromCharCode('a'.charCodeAt(0)+j))
                || (i<len-1 && (arr[i+1] === String.fromCharCode('a'.charCodeAt(0)+j)) )){
                    continue
                }

                arr[i] = String.fromCharCode('a'.charCodeAt(0)+j)

                break
            }
        }
    }
    
    return arr.join("")
}
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.6 字符串 ⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/simplify-path/)

给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。

请注意，返回的 规范路径 必须遵循下述格式：

始终以斜杠 '/' 开头。
两个目录名之间必须只有一个斜杠 '/' 。
最后一个目录名（如果存在）不能 以 '/' 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
返回简化后得到的 规范路径 。

::: tip
- 示例 1：

输入：path = "/home/"
输出："/home"
解释：注意，最后一个目录名后面没有斜杠。 

- 示例 2：

输入：path = "/../"
输出："/"
解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。

- 示例 3：

输入：path = "/home//foo/"
输出："/home/foo"
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。

- 示例 4：

输入：path = "/a/./b/../../c/"
输出："/c"

:::

::: tip 

### 解题思路
通过 `/` 进行字符串分割，通过栈维护两种情况即可

- 正常字母类目录 `/a`，入栈
- 返回上一层目录 `..`，出栈

其他情况排除
- `.` 当前目录，不做任何操作
- `///` 无意义类 

最后需要注意，始终以斜杠 `/` 开头

:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function simplifyPath(path: string): string {
    let pathArray = path.split('/'), stack = []

    for (let item of pathArray) {
        if (item === '..') {
            if (stack.length) {
                stack.pop()
            }
        } else if (item.length && item !== '.') {
            stack.push(item)
        }
    }

    return '/' + stack.join('/')
};
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.7 字符串 ⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/maximum-nesting-depth-of-the-parentheses/)

如果字符串满足以下条件之一，则可以称之为 有效括号字符串（valid parentheses string，可以简写为 VPS）：

字符串是一个空字符串 ""，或者是一个不为 "(" 或 ")" 的单字符。
字符串可以写为 AB（A 与 B 字符串连接），其中 A 和 B 都是 有效括号字符串 。
字符串可以写为 (A)，其中 A 是一个 有效括号字符串

给你一个 有效括号字符串 s，返回该字符串的 s 嵌套深度 。

::: tip
- 示例 1：

输入：s = "(1+(2*3)+((8)/4))+1"
输出：3
解释：数字 8 在嵌套的 3 层括号中。

- 示例 2：

输入：s = "(1)+((2))+(((3)))"
输出：3

- 示例 3：

输入：s = "1+(2*3)/(2-1)"
输出：1

:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function maxDepth(s: string): number {
    let max = 0, count = 0

    for(let char of s){
        if(char === '('){
            count++
            max = count > max ? count : max
        } else if(char === ')'){
            count--
        }
    }

    return max
};
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.8 数学 ⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/gray-code/)

n 位格雷码序列 是一个由 2n 个整数组成的序列，其中：
每个整数都在范围 [0, 2n - 1] 内（含 0 和 2n - 1）
第一个整数是 0
一个整数在序列中出现 不超过一次
每对 相邻 整数的二进制表示 恰好一位不同 ，且
第一个 和 最后一个 整数的二进制表示 恰好一位不同
给你一个整数 n ，返回任一有效的 n 位格雷码序列 。

::: tip
- 示例 1：

- 输入：n = 2

- 输出：[0,1,3,2]
    - [0,1,3,2] 的二进制表示是 [00,01,11,10] 。
      - 00 和 01 有一位不同
      - 01 和 11 有一位不同
      - 11 和 10 有一位不同
      - 10 和 00 有一位不同
    - [0,2,3,1] 也是一个有效的格雷码序列，其二进制表示是 [00,10,11,01] 。
      - 00 和 10 有一位不同
      - 10 和 11 有一位不同
      - 11 和 01 有一位不同
      - 01 和 00 有一位不同
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function grayCode(n: number): number[] {
    let ans: number[] = [0]

    for (let i = 1; i < n + 1; i++) {
        const m = ans.length

        for (let j = m - 1; j >= 0; j--) {
            const value = ans[j] | (1 << (i - 1));
            ans.push(value)
        }
    }

    return ans
};
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.9 按键持续时间最长的键 ⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/slowest-key/)

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let max = releaseTimes[0], char = keysPressed[0]

    for (let i = 1; i < releaseTimes.length; i++) {
        let temp = releaseTimes[i] - releaseTimes[i - 1], key = keysPressed[i]

        if (temp > max || (temp === max && key > char)) {
            max = temp
            char = key
        }

    }

    return char
};
```
  </CodeGroupItem>
</CodeGroup>


## 2022.1.10 累加数 ⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/additive-number/)

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function isAdditiveNumber(num: string): boolean {
    const len = num.length

    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            const x = num.slice(0, i+1)
            const y = num.slice(i+1, j+1)

            if(x[0] === '0' && x.length > 1 || y[0] === '0' && y.length >1) continue

            if(j+1 === num.length) continue 

            if(dfs(num, j+1, x, y)) return true
        }
    }

    return false
};

function dfs(num: string, start: number, x: string, y: string): boolean {
    if(start === num.length) return true

    const next = String(Number(x) + Number(y))
    const nextStr = num.slice(start, start + next.length)

    if(next === nextStr && (dfs(num, start + nextStr.length, y, nextStr))) return true

    return false
}
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.11 逃离大迷宫 ⭐⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/escape-a-large-maze/)

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
// 在包围圈中
const BLOCKED = -1;
// 不在包围圈中
const VALID = 0;
// 无论在不在包围圈中，但在 n(n-1)/2 步搜索的过程中经过了 target
const FOUND = 1;

const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const BOUNDARY = 1000000;

var isEscapePossible = function(blocked, source, target) {
    if (blocked.length < 2) {
        return true;
    }

    const hashBlocked = new Set();
    for (const pos of blocked) {
        hashBlocked.add([pos[0], pos[1]].toString());
    }

    let result = check(blocked, source, target, hashBlocked);
    if (result === FOUND) {
        return true;
    } else if (result === BLOCKED) {
        return false;
    } else {
        result = check(blocked, target, source, hashBlocked);
        return result !== BLOCKED;
    }
};

const check = (blocked, start, finish, hashBlocked) => {
    const sx = start[0], sy = start[1];
    const fx = finish[0], fy = finish[1];
    let countdown = Math.floor(blocked.length * (blocked.length - 1) / 2);
    const startPair = [sx, sy];
    const queue = [];
    queue.push(startPair);
    const visited = new Set();
    visited.add(startPair.toString());
    while (queue.length && countdown > 0) {
        const [x, y] = queue.shift();
        for (let d = 0; d < 4; ++d) {
            const nx = x + dirs[d][0], ny = y + dirs[d][1];
            const newPair = [nx, ny];
            if (nx >= 0 && nx < BOUNDARY && ny >= 0 && ny < BOUNDARY && !hashBlocked.has(newPair.toString()) && !visited.has(newPair.toString())) {
                if (nx === fx && ny === fy) {
                    return FOUND;
                }
                --countdown;
                queue.push(newPair);
                visited.add(newPair.toString());
            }
        }
    }
    if (countdown > 0) {
        return BLOCKED;
    }
    return VALID;
}
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.12 递增的三元子序列 ⭐⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/increasing-triplet-subsequence/)

给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

::: tip 测试用例
- 示例 1：
    - 输入：nums = [1,2,3,4,5]
    - 输出：true
    - 解释：任何 i < j < k 的三元组都满足题意

- 示例 2：

    - 输入：nums = [5,4,3,2,1]
    - 输出：false
    - 解释：不存在满足题意的三元组

- 示例 3：

    - 输入：nums = [2,1,5,0,4,6]
    - 输出：true
    - 解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6

:::
<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
function increasingTriplet(nums: number[]): boolean {
    const len = nums.length

    if(len < 3) return false

    let first = nums[0], second = Number.MAX_VALUE

    for(let i=1;i<len;i++){
        const num = nums[i]

        if(num > second){
            return true
        } else if(num > first){
            second = num
        } else {
            first = num
        }

    }
    
    return false
};
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.13 最大数 ⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/)

给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。

请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。

::: tip 测试用例
- 示例 1：
    - 输入：nums = [3,6,1,0]
    - 输出：1
    - 解释：6 是最大的整数，对于数组中的其他整数，6 大于数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。
:::

```ts
function dominantIndex(nums: number[]): number {
    const len = nums.length
    const index = nums.findIndex((v) => v === Math.max(...nums))

    if (len === 1) return 0

    nums.sort((a, b) => b - a)

    if (nums[0] >= (nums[1] * 2)) {
        return index
    }

    return -1
};
```

## 2022.1.15 计算力扣银行的钱 ⭐

Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱。

最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。

给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。

::: tip 
- 示例 1：
    - 输入：n = 4
    - 输出：10
    - 解释：第 4 天后，总额为 1 + 2 + 3 + 4 = 10 。

- 示例 2：
    - 输入：n = 10
    - 输出：37
    - 解释：第 10 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37 。注意到第二个星期一，Hercy 存入 2 块钱。
  
- 示例 3：
    - 输入：n = 20
    - 输出：96
    - 解释：第 20 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96 。
:::

```ts
function totalMoney(n: number): number {
    let sum = 0, week = 1, day = 1
   
    for (let i = 0; i < n; i++){
        sum += week + day - 1
        day++
        
        if (day === 8) {
            day = 1
            week++
        }
    }

    return sum
};
```

## 2022.1.16 链表随机节点 ⭐⭐
> :point_right: [Leetcode 链接](https://leetcode-cn.com/problems/linked-list-random-node/)

给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 被选中的概率一样 。

实现 Solution 类：

Solution(ListNode head) 使用整数数组初始化对象。
int getRandom() 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。

::: tip 
- 输入
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
- 输出
[null, 1, 3, 2, 2, 3]

- 解释
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // 返回 1
solution.getRandom(); // 返回 3
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 3
:::

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

class Solution {
    public list: number[] = []

    constructor(head: ListNode | null) {
        this.init(head)
    }

    init(head: ListNode | null){
        while(head){
            const val = head.val
            this.list.push(val)
            head = head.next
        }
    }

    getRandom(): number {
        return this.list[Math.floor(Math.random() * this.list.length)]
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
```