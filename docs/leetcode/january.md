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

## 2022.1.3
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

## 2022.1.4
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