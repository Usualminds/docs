# 一月

## 2022.1.1 数组 ⭐
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/)

给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和 n。你需要使用 original 中所有元素创建一个 m 行 n 列的二维数组。

original 中下标从 0 到 n - 1 (都包含) 的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 (都包含) 的元素构成二维数组的第二行，依此类推。

请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组

::: tip
- 示例 1：

输入：original = [1,2,3,4]，m = 2，n = 2
输出：[[1,2]，[3,4]]

- 示例 2：

输入：original = [1,2]，m = 1，n = 1
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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/elimination-game/)

列表 arr 由在范围 [1，n] 中的所有整数组成，并按严格递增排序。请你对 arr 应用下述算法：

从左到右，删除第一个数字，然后每隔一个数字删除一个，直到到达列表末尾。
重复上面的步骤，但这次是从右到左。也就是，删除最右侧的数字，然后剩下的数字每隔一个删除一个。
不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
给你整数 n，返回 arr 最后剩下的数字。

::: tip
- 示例 1：

输入：n = 9
输出：6
解释：
arr = [1，2，3，4，5，6，7，8，9]
arr = [2，4，6，8]
arr = [2，6]
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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/day-of-the-week/)

给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

输入为三个整数：day、month 和 year，分别表示日、月、年。

您返回的结果必须是这几个值中的一个 {“Sunday”，“Monday”，“Tuesday”，“Wednesday”，“Thursday”，“Friday”，“Saturday”}。

::: tip
- 示例 1：

输入：day = 31，month = 8，year = 2019
输出：“Saturday”

- 示例 2：

输入：day = 18，month = 7，year = 1999
输出：“Sunday”
- 示例 3：

输入：day = 15，month = 8，year = 1993
输出：“Sunday”
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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/cat-and-mouse/)

猫和老鼠

两位玩家分别扮演猫和老鼠，在一张无向图上进行游戏，两人轮流行动。

图的形式是：graph[a] 是一个列表，由满足 ab 是图中的一条边的所有节点 b 组成。

老鼠从节点 1 开始，第一个出发；猫从节点 2 开始，第二个出发。在节点 0 处有一个洞。

在每个玩家的行动中，他们必须沿着图中与所在当前位置连通的一条边移动。例如，如果老鼠在节点 1，那么它必须移动到 graph[1] 中的任一节点。

此外，猫无法移动到洞中 (节点 0)。

然后，游戏在出现以下三种情形之一时结束：

如果猫和老鼠出现在同一个节点，猫获胜。
如果老鼠到达洞中，老鼠获胜。
如果某一位置重复出现 (即，玩家的位置和移动顺序都与上一次行动相同)，游戏平局。
给你一张图 graph，并假设两位玩家都都以最佳状态参与游戏：

如果老鼠获胜，则返回 1；
如果猫获胜，则返回 2；
如果平局，则返回 0。


<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
// TODO: 复杂动态规划及图论相关，待研究
```
  </CodeGroupItem>
</CodeGroup>

## 2022.1.5 字符串 ⭐⭐
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)

给你一个仅包含小写英文字母和 ‘？’ 字符的字符串 s，请你将所有的 ‘？’ 转换为若干小写字母，使最终的字符串不包含任何连续重复的字符。

注意：你不能修改非 ‘？’ 字符。

题目测试用例保证除 ‘？’ 字符之外，不存在连续重复的字符。

在完成所有转换 (可能无需转换) 后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。

::: tip
- 示例 1：

输入：s = “？zs”
输出：“azs”
解释：该示例共有 25 种解决方案，从 “azs” 到 “yzs” 都是符合题目要求的。只有 “z” 是无效的修改，因为字符串 “zzs” 中有连续重复的两个 ‘z’。
- 示例 2：

输入：s = “ubv?w”
输出：“ubvaw”
解释：该示例共有 24 种解决方案，只有替换成 “v” 和 “w” 不符合题目要求。因为 “ubvvw” 和 “ubvww” 都包含连续重复的字符。

- 示例 3：

输入：s = “j?qg??b”
输出：“jaqgacb”
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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/simplify-path/)

给你一个字符串 path，表示指向某一文件或目录的 Unix 风格绝对路径 (以 ‘/’ 开头)，请你将其转化为更加简洁的规范路径。

在 Unix 风格的文件系统中，一个点 (。) 表示当前目录本身；此外，两个点 (..) 表示将目录切换到上一级 (指向父目录)；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠 (即，‘//’) 都被视为单个斜杠 ‘/’。对于此问题，任何其他格式的点 (例如，‘...’) 均被视为文件/目录名称。

请注意，返回的规范路径必须遵循下述格式：

始终以斜杠 ‘/’ 开头。
两个目录名之间必须只有一个斜杠 ‘/’。
最后一个目录名 (如果存在) 不能以 ‘/’ 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录 (即，不含 ‘。’ 或 ‘..’)。
返回简化后得到的规范路径。

::: tip
- 示例 1：

输入：path = “/home/”
输出：“/home”
解释：注意，最后一个目录名后面没有斜杠。

- 示例 2：

输入：path = “/../”
输出：“/”
解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。

- 示例 3：

输入：path = “/home//foo/”
输出：“/home/foo”
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。

- 示例 4：

输入：path = “/a/./b/../../c/”
输出：“/c”

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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/maximum-nesting-depth-of-the-parentheses/)

如果字符串满足以下条件之一，则可以称之为有效括号字符串 (valid parentheses string，可以简写为 VPS)：

字符串是一个空字符串 “”，或者是一个不为 “(” 或 “)” 的单字符。
字符串可以写为 AB (A 与 B 字符串连接)，其中 A 和 B 都是有效括号字符串。
字符串可以写为 (A)，其中 A 是一个有效括号字符串

给你一个有效括号字符串 s，返回该字符串的 s 嵌套深度。

::: tip
- 示例 1：

输入：s = “(1+(2*3)+((8)/4))+1”
输出：3
解释：数字 8 在嵌套的 3 层括号中。

- 示例 2：

输入：s = “(1)+((2))+(((3)))”
输出：3

- 示例 3：

输入：s = “1+(2*3)/(2-1)”
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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/gray-code/)

n 位格雷码序列是一个由 2n 个整数组成的序列，其中：
每个整数都在范围 [0，2n - 1] 内 (含 0 和 2n - 1)
第一个整数是 0
一个整数在序列中出现不超过一次
每对相邻整数的二进制表示恰好一位不同，且
第一个和最后一个整数的二进制表示恰好一位不同
给你一个整数 n，返回任一有效的 n 位格雷码序列。

::: tip
- 示例 1：

- 输入：n = 2

- 输出：[0,1,3,2]
    - [0,1,3,2] 的二进制表示是 [00,01,11,10]。
      - 00 和 01 有一位不同
      - 01 和 11 有一位不同
      - 11 和 10 有一位不同
      - 10 和 00 有一位不同
    - [0,2,3,1] 也是一个有效的格雷码序列，其二进制表示是 [00,10,11,01]。
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
> ：point_right： 
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
> ：point_right： 
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
> ：point_right： 
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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/increasing-triplet-subsequence/)

给你一个整数数组 nums，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i，j，k) 且满足 i < j < k，使得 nums[i] < nums[j] < nums[k]，返回 true；否则，返回 false。

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
    - 解释：三元组 (3，4，5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6

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
> ：point_right： 
[Leetcode 链接](https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/)

给你一个整数数组 nums，其中总是存在唯一的一个最大整数。

请你找出数组中的最大元素并检查它是否至少是数组中每个其他数字的两倍。如果是，则返回最大元素的下标，否则返回 -1。

::: tip 测试用例
- 示例 1：
    - 输入：nums = [3,6,1,0]
    - 输出：1
    - 解释：6 是最大的整数，对于数组中的其他整数，6 大于数组中其他元素的两倍。6 的下标是 1，所以返回 1。
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

Hercy 想要为购买第一辆车存钱。他每天都往力扣银行里存钱。

最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比前一个周一多存入 1 块钱。

给你 n，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。

::: tip 
- 示例 1：
    - 输入：n = 4
    - 输出：10
    - 解释：第 4 天后，总额为 1 + 2 + 3 + 4 = 10。

- 示例 2：
    - 输入：n = 10
    - 输出：37
    - 解释：第 10 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37。注意到第二个星期一，Hercy 存入 2 块钱。
  
- 示例 3：
    - 输入：n = 20
    - 输出：96
    - 解释：第 20 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96。
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
> ：point_right：[Leetcode 链接](https://leetcode-cn.com/problems/linked-list-random-node/)

给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点被选中的概率一样。

实现 Solution 类：

Solution(ListNode head) 使用整数数组初始化对象。
int getRandom() 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。

::: tip 
- 输入
[“Solution”，“getRandom”，“getRandom”，“getRandom”，“getRandom”，“getRandom”]
[[[1，2，3]], [], [], [], [], []]
- 输出
[null，1，3，2，2，3]

- 解释
Solution solution = new Solution([1，2，3])；
solution.getRandom()； // 返回 1
solution.getRandom()； // 返回 3
solution.getRandom()； // 返回 2
solution.getRandom()； // 返回 2
solution.getRandom()； // 返回 3
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

## 2022.1.17 统计元音字母序列的数目 ⭐⭐⭐
> ：point_right：[Leetcode 链接](https://leetcode-cn.com/problems/count-vowels-permutation/)

给你一个整数 n，请你帮忙统计一下我们可以按下述规则形成多少个长度为 n 的字符串：

字符串中的每个字符都应当是小写元音字母 (‘a’，‘e’，‘i’，‘o’，‘u’)
每个元音 ‘a’ 后面都只能跟着 ‘e’
每个元音 ‘e’ 后面只能跟着 ‘a’ 或者是 ‘i’
每个元音 ‘i’ 后面不能再跟着另一个 ‘i’
每个元音 ‘o’ 后面只能跟着 ‘i’ 或者是 ‘u’
每个元音 ‘u’ 后面只能跟着 ‘a’
由于答案可能会很大，所以请你返回模 10^9 + 7 之后的结果。

::: tip 
- 示例 1：
    - 输入：n = 1
    - 输出：5
    - 解释：所有可能的字符串分别是：“a”，“e”，“i”，“o” 和 “u”。
- 示例 2：
    - 输入：n = 2
    - 输出：10
    - 解释：所有可能的字符串分别是：“ae”，“ea”，“ei”，“ia”，“ie”，“io”，“iu”，“oi”，“ou” 和 “ua”。
:::

```ts
function countVowelPermutation(n: number): number {
    const mod = 10 ** 9 + 7
    const add = (...nums) => nums.reduce((pre, cur) => pre + cur) % mod
    let [a,e,i,o,u] = [1,1,1,1,1]
    
    while(--n)
        ([a,e,i,o,u] = [add(e+i+u), add(a+i), add(e+o),i, add(o+i)])

    return add(a,e,i,o,u)
};
```

## 2022.1.18 最小时间差 ⭐
> ：point_right：[Leetcode 链接](https://leetcode-cn.com/problems/minimum-time-difference/)

给定一个 24 小时制 (小时：分钟 “HH:MM”) 的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

::: tip 
- 示例 1：
    - 输入：timePoints = [“23:59”，“00:00”]
    - 输出：1
- 示例 2：
    - 输入：timePoints = [“00:00”，“23:59”，“00:00”]
    - 输出：0
:::

> [抽屉原理](https://zh.wikipedia.org/wiki/%E9%B4%BF%E5%B7%A2%E5%8E%9F%E7%90%86)

``` ts
function findMinDifference(timePoints: string[]): number {
  let res = [], len = timePoints.length
  
  // 抽屉原理
  if(len > 24* 60) return 0

  // 格式化处理时间为分钟数
  for (let i = 0; i < len; i++) {
    let ele = timePoints[i].replace(/:/g, '')
    let h = +(ele.charAt(0) + ele.charAt(1)), m = +(ele.charAt(2) + ele.charAt(3))
    res.push(h*60 + m)
  }

  // 排序
  res.sort((a, b) => a - b)

  // 计算差值
  let min = res[1] - res[0]

  for (let i = 1; i < res.length; i++){
    let temp = res[i] - res[i - 1]
    if (temp < min) {
      min = temp
    }
  }

  // 排序后，只需要计算收尾
  let between = (res[0] - 0) + ((24 * 60) - res[res.length - 1])

  // 计算最小值
  min = Math.min(between, min)

  return min
};
```

## 2022.1.19 存在重复元素 II ⭐
> ：point_right：[Leetcode 链接](https://leetcode-cn.com/problems/contains-duplicate-ii//)

给你一个整数数组 nums 和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，满足 nums[i] == nums[j] 且 abs(i - j) <= k。如果存在，返回 true；否则，返回 false。

::: tip 
- 示例 1：
    - 输入：nums = [1,2,3,1]，k = 3
    - 输出：true
- 示例 2：
    - 输入：nums = [1,2,3,1,2,3]，k = 2
    - 输出：false
:::

> [抽屉原理](https://zh.wikipedia.org/wiki/%E9%B4%BF%E5%B7%A2%E5%8E%9F%E7%90%86)

```ts
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = new Map(), len = nums.length

  for (let i = 0; i < len; i++) {
    let num = nums[i]
    if (map.has(num)) {
      let index = map.get(num)
      let dis = Math.abs(index - i)

      if (dis <= k) return true
    } 

    map.set(num, i)
  }

  return false
};
```

## 2022.1.20 石子游戏 IX ⭐⭐⭐
> ：point_right：[Leetcode 链接](https://leetcode-cn.com/problems/stone-game-ix/)
Alice 和 Bob 再次设计了一款新的石子游戏。现有一行 n 个石子，每个石子都有一个关联的数字表示它的价值。给你一个整数数组 stones，其中 stones[i] 是第 i 个石子的价值。

Alice 和 Bob 轮流进行自己的回合，Alice 先手。每一回合，玩家需要从 stones 中移除任一石子。

如果玩家移除石子后，导致所有已移除石子的价值总和可以被 3 整除，那么该玩家就输掉游戏。
如果不满足上一条，且移除后没有任何剩余的石子，那么 Bob 将会直接获胜 (即便是在 Alice 的回合)。
假设两位玩家均采用最佳决策。如果 Alice 获胜，返回 true；如果 Bob 获胜，返回 false。

::: tip 
- 示例 1：
    - 输入：stones = [2,1]
    - 输出：true
    - 解释：游戏进行如下：
- 回合 1：Alice 可以移除任意一个石子。
- 回合 2：Bob 移除剩下的石子。 
已移除的石子的值总和为 1 + 2 = 3 且可以被 3 整除。因此，Bob 输，Alice 获胜。

- 示例 2：
    - 输入：stones = [2]
    - 输出：false
    - 解释：Alice 会移除唯一一个石子，已移除石子的值总和为 2。 
由于所有石子都已移除，且值总和无法被 3 整除，Bob 获胜。
:::

> [博弈论](https://zh.wikipedia.org/wiki/%E5%8D%9A%E5%BC%88%E8%AE%BA)

```ts
function stoneGameIX(stones: number[]): boolean {
    let count1 = 0, count2 = 0, count3 = 0

    for(let stone of stones){
        let mod = stone % 3

        if(mod === 0) {
            count1++
        } else if (mod === 1){
            count2++
        } else {
            count3++
        }
    }

    if(count1 % 2 === 0){
        return count2 >= 1 && count3>=1
    }

    return Math.abs(count2 - count3) > 2
};
```

## 2022.1.21 跳跃游戏 IV ⭐⭐⭐
> ：point_right：[Leetcode 链接](https://leetcode-cn.com/problems/jump-game-iv/)

给你一个整数数组 arr，你一开始在数组的第一个元素处 (下标为 0)。

每一步，你可以从下标 i 跳到下标：

i + 1 满足：i + 1 < arr.length
i - 1 满足：i - 1 >= 0
j 满足：arr[i] == arr[j] 且 i != j
请你返回到达数组最后一个元素的下标处所需的最少操作次数。

注意：任何时候你都不能跳到数组外面

::: tip 
- 示例 1：
    - 输入：arr = [100,-23,-23,404,100,23,23,23,3,404]
    - 输出：3
    - 解释：那你需要跳跃 3 次，下标依次为 0 --> 4 --> 3 --> 9。下标 9 为数组的最后一个元素的下标

- 示例 2：
    - 输入：arr = [7,6,9,6,9,6,9,7]
    - 输出：1
    - 解释：你可以直接从下标 0 处跳到下标 7 处，也就是数组的最后一个元素处。
:::


```ts
// 待研究
function minJumps(arr: number[]): number {
    if (arr.length === 1) {
        return 0;
    }
    const map = new Map<number, number[]>();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.get(arr[i]).push(i);
        } else {
            map.set(arr[i], [i]);
        }
    }
    const getNext = (index: number) => {
        const res = [...map.get(arr[index])];
        if (index > 0) {
            res.push(index - 1);
        }
        if (index < arr.length - 1) {
            res.push(index + 1);
        }
        return res;
    }
    // 三个参数，分别标书当前被遍历的队列，当前队列的所属map以及另外一个队列的所属map
    const update = (queue: number[], cur: Map<number, number>, other: Map<number, number>) => {
        const size = queue.length;
        // 遍历队列当前层次的所有节点
        for (let i = 0; i < size; i++) {
            // 出队
            const index = queue.shift();
            // 取出当前节点的遍历层数
            const step = cur.get(index);
            // 找到当前节点的所有满足调条件的子节点
            for (let nextIndex of getNext(index)) {
                // 重复出现
                if (nextIndex === index || cur.has(nextIndex)) {
                    continue;
                }
                // 两个队列对接上
                if (other.has(nextIndex)) {
                    return step + 1 + other.get(nextIndex);
                } else {
                    // 入队
                    cur.set(nextIndex, step + 1);
                    queue.push(nextIndex);
                }
            }
        }
        return -1;
    }
    const bfsPlus = () => {
        const queue1 = [0];
        const queue2 = [arr.length - 1];
        const map1 = new Map<number, number>();
        const map2 = new Map<number, number>();
        map1.set(0, 0);
        map2.set(arr.length - 1, 0);
        while (queue1.length && queue2.length) {
            let t = -1;
            if (queue1.length <= queue2.length) {
                t = update(queue1, map1, map2);
            } else {
                t = update(queue2, map2, map1);
            }
            if (t !== -1) {
                return t;
            }
        }
    }
    return bfsPlus();
};
```