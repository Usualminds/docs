# 日常

## 设计循环双端队列 ⭐⭐
[👉 Leetcode 链接-641](https://leetcode.cn/problems/design-circular-deque/)

设计实现双端队列。

实现 MyCircularDeque 类:

MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。
 
```ts
class MyCircularDeque {
    private statck: number[]
    private front: number
    private end: number
    private max: number

    constructor(k: number) {
        this.max = k + 1
        this.front = 0
        this.end = 0
        this.statck = []
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false

        this.front = (this.front - 1 + this.max) % this.max
        this.statck[this.front] = value

        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false

        this.statck[this.end] = value
        this.end = (this.end + 1) % this.max

        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false

        this.front = (this.front + 1) % this.max

        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false

        this.end = (this.end - 1 + this.max) % this.max
        return true
    }

    getFront(): number {
        if (this.isEmpty()) return -1

        return this.statck[this.front]
    }

    getRear(): number {
        if (this.isEmpty()) return -1

        return this.statck[(this.end - 1 + this.max) % this.max]
    }

    isEmpty(): boolean {
        return this.front === this.end
    }

    isFull(): boolean {
        return (this.end + 1) % this.max === this.front
    }
}
```

## 函数独占时间 ⭐⭐⭐
[👉 Leetcode 链接-636](https://leetcode.cn/problems/exclusive-time-of-functions/)

```ts
function exclusiveTime(n: number, logs: string[]): number[] {
    const stack = [], ans = new Array(n).fill(0)

    for (let log of logs) {
        let logArray = log.split(':'), name = logArray[0], type = logArray[1], time = Number(logArray[2])

        if (type === 'start') {
            if (stack.length) {
                // 这里每个函数函数的起始值为 0 
                ans[stack[stack.length - 1][0]] += (time - stack[stack.length - 1][1])
                stack[stack.length - 1][1] = time
            }
            stack.push([name, time])
        } else {
            let peek = stack.pop()
            ans[peek[0]] += time - peek[1] + 1

            if (stack.length) {
                stack[stack.length - 1][1] = time + 1
            }

        }

    }

    return ans
};
```

## 二叉树中增加一行
[👉 Leetcode 链接-623](https://leetcode.cn/problems/add-one-row-to-tree/)

给定一个二叉树的根 root 和两个整数 val 和 depth ，在给定的深度 depth 处添加一个值为 val 的节点行。

注意，根节点 root 位于深度 1 。

加法规则如下:

给定整数 depth，对于深度为 depth - 1 的每个非空树节点 cur ，创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。
cur 原来的左子树应该是新的左子树根的左子树。
cur 原来的右子树应该是新的右子树根的右子树。
如果 depth == 1 意味着 depth - 1 根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，而原始树就是新根的左子树。

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (!root) return null

    if (depth === 1) return new TreeNode(val, root, null)

    if (depth === 2) {
        root.left = new TreeNode(val, root.left, null)
        root.right = new TreeNode(val, null, root.right)
    } else {
        root.left = addOneRow(root.left, val, depth - 1)
        root.right = addOneRow(root.right, val, depth - 1)
    }

    return root
};
```


## 非递增顺序的最小子序列
[👉 Leetcode 链接-1403](https://leetcode.cn/problems/minimum-subsequence-in-non-increasing-order/)

给你一个数组 nums，请你从中抽取一个子序列，满足该子序列的元素之和 严格 大于未包含在该子序列中的各元素之和。

如果存在多个解决方案，只需返回 长度最小 的子序列。如果仍然有多个解决方案，则返回 元素之和最大 的子序列。

与子数组不同的地方在于，「数组的子序列」不强调元素在原数组中的连续性，也就是说，它可以通过从数组中分离一些（也可能不分离）元素得到。

```ts
function minSubsequence(nums: number[]): number[] {
    let res = [], sum = getSum(nums), len = nums.length, temp = 0

    nums.sort((a, b) => b - a)

    for (let i = 0; i < len; i++) {
        temp += nums[i]
        res.push(nums[i])

        if (temp * 2 > sum) {
            break
        }
    }

    return res
};

function getSum(nums: number[]) {
    return nums.reduce((pre, cur) => pre + cur)
}
```

## 有序队列 ⭐⭐
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