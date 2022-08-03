# 日常

## 有序队列
[👉 Leetcode 链接-899](https://leetcode.cn/problems/orderly-queue/)

给定一个字符串 s 和一个整数 k 。你可以从 s 的前 k 个字母中选择一个，并把它加到字符串的末尾。

返回 在应用上述步骤的任意数量的移动后，字典上最小的字符串 。

:::tip
- 示例 1：

    - 输入：s = "cba", k = 1
    - 输出："acb"
    - 解释：在第一步中，我们将第一个字符（“c”）移动到最后，获得字符串 “bac”。在第二步中，我们将第一个字符（“b”）移动到最后，获得最终结果 “acb。
  
- 示例 2：
    - 输入：s = "baaca", k = 3
    - 输出："aaabc"
    - 解释：在第一步中，我们将第一个字符（“b”）移动到最后，获得字符串 “aacab”。在第二步中，我们将第三个字符（“c”）移动到最后，获得最终结果 “aaabc”。
:::

```ts
function orderlyQueue(s: string, k: number): string {
    if(k === 1) {
        let res = s

        for(let i=0;i<s.length - 1;i++){
            const n = s.length
            s = s.substring(1,n) + s[0]

            res = res < s ? res : s
        }

        return res
    }

    return [...s].sort().join('')
};
```

## 设计循环队列
[👉 Leetcode 链接-622](https://leetcode.cn/problems/design-circular-queue/)

设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。

```ts
class MyCircularQueue {
    private length: number
    private quene: number[]
    private head: number
    private tail: number

    constructor(k: number) {
        this.length = k
        this.quene = new Array(k)
        this.head = 0
        this.tail = 0
    }

    enQueue(value: number): boolean {
        if(this.isFull()) return false

        this.quene[this.tail % this.length] = value
        this.tail++

        return true
    }

    deQueue(): boolean {
        if(this.isEmpty()) return false
        this.head++
        if(this.head === this.length) {
            this.head -= this.length
            this.tail -= this.length
        }

        return true
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.quene[this.head % this.length]
    }

    Rear(): number {
        return this.isEmpty() ? -1 : this.quene[(this.tail - 1) % this.length]
    }

    isEmpty(): boolean {
        return this.head === this.tail
    }

    isFull(): boolean {
        return (this.tail - this.head) === this.length
    }
}
```

## Z 字形变换(2022.7.29)
[👉 Leetcode 链接-6](https://leetcode.cn/problems/zigzag-conversion/)

将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

```js
P   A   H   N
A P L S I I G
Y   I   R
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

```ts
function convert(s: string, numRows: number): string {
    if (numRows === 1) return s

    const sLen = s.length
    let len = Math.min(sLen, numRows), rows = []

    for (let i = 0; i < len; i++) {
        rows[i] = ''
    }

    let start = 0, flag = false

    for (let char of s) {
        rows[start] += char

        if (start === 0 || start === numRows - 1) {
            flag = !flag
        }

        start += flag ? 1 : -1
    }

    let res = ''

    for (let row of rows) {
        res += row
    }

    return res
};
```