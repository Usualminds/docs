
# 链表

链表

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