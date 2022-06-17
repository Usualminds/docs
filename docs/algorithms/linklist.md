
# 链表

## 数据结构
```ts
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode |null ){
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
```

## 移除链表元素
[👉 Leetcode 链接-203](https://leetcode.cn/problems/remove-linked-list-elements/)

给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
### 递归
```ts
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(head === null) return head

    head.next = removeElements(head.next, val)

    return head.val === val ? head.next : head
};
```

### 

## 设计一个链表
[👉 Leetcode 链接-707](https://leetcode.cn/problems/design-linked-list/)

设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。

```ts
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

class MyLinkedList {
    head: ListNode | null
    size: number

    constructor() {
        this.size = 0
        this.head = null
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1

        let node: ListNode = this.head

        for (let i: number = 0; i < index; i++) {
            node = node.next
        }

        return node.val
    }

    getNode(index: number): ListNode {
        if (index < 0 || index >= this.size) return

        let node: ListNode = this.head;
        for (let i: number = 0; i < index; i++) {
            node = node.next
        }

        return node
    }

    addAtHead(val: number): void {
        const oldHead: ListNode = this.head;
        this.head = new ListNode(val, oldHead);
        this.size++;
    }


    addAtTail(val: number): void {
        if (this.size === 0) {
            this.size++
            this.head = new ListNode(val, null)
            return
        }

        const prevNode: ListNode = this.getNode(this.size - 1)
        prevNode.next = new ListNode(val, null)

        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) return

        if (index <= 0) {
            return this.addAtHead(val)
        }
        const prevNode: ListNode = this.getNode(index - 1)

        const node: ListNode = prevNode.next
        prevNode.next = new ListNode(val, node)

        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return

        if (index === 0) {
            this.head = this.head.next
            this.size--
            return
        }

        const prevNode: ListNode = this.getNode(index - 1)
        prevNode.next = prevNode.next.next

        this.size--
    }
}
```

## 链表的中间结点

给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

::: tip
- 示例 1：

输入：[1, 2, 3, 4, 5]
输出：此列表中的结点 3(序列化形式：[3, 4, 5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是[3, 4, 5]) 。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

- 示例 2：

输入：[1, 2, 3, 4, 5, 6]
输出：此列表中的结点 4(序列化形式：[4, 5, 6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。


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


## 删除链表的节点
[Leetcode](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

::: tip 
- 示例 1:
    - 输入: head = [4,5,1,9], val = 5
    - 输出: [4,1,9]
    - 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
- 示例 2:
    - 输入: head = [4,5,1,9], val = 1
    - 输出: [4,5,9]
    - 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
    if(head === null) return null

    if(head.val === val) return head.next

    let current = head

    while(current.next && current.next.val !== val) {
        current = current.next
    }

    if(current.next){
        current.next = current.next.next
    }

    return head
};
```

## 链表中倒数第 k 个节点
输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

::: tip 
- 示例：
    - 给定一个链表: 1->2->3->4->5, 和 k = 2.
    - 返回链表 4->5.
:::

### 一般性解法

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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let count = 0, node = head

    while (node) {
        count++
        node = node.next
    }

    node = head

    for (let i = 0; i < count - k; i++) {
        node = node.next
    }

    return node
};
```

### 双指针

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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let fast = head, slow = head

    while (fast && k > 0) {
        fast = fast.next
        k--
    }

    while (fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow
};
```