# 四月

## 2022.4.20 数组 ⭐
> :point_right: 
[扁平化数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

`WeakRef`，使用 weakObj 与 obj 没有任何区别，唯一不同时，obj 可能随时被 GC，而一旦被 GC，弱引用拿到的对象可能就变成 undefined，所以要做好错误保护
::: tip 示例
let newArray = arr.flat([depth])
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
// reduce
function flat(arrs: any[], depth: number): any[] {
    return depth > 0 ? arrs.reduce((cur, val) => cur.concat(Array.isArray(val) ? flat(val, depth -1) : val), []) : arrs.slice()
};

// stack

function stackFlat(arrs: []) :[]{
    const stack = [...arrs], res = []

    while(stack.length){
        let next = stack.pop()

        if(Array.isArray(next)){
            stack.pushh(...next)
        } else {
            res.push(next)
        }
    }

    return res.reverse()
}
```
  </CodeGroupItem>
</CodeGroup>

## 2022.4.25 中序遍历 ⭐

中序遍历（中->左->右）的三种解法

#### 递归

```ts
// O(n)
function inorderTraversal(root: TreeNode | null): number[] {
    const res = []

    let inorder = (root) => {
        if(!root) return

        inorder(root.left)

        res.push(root.val)

        inorder(root.right)
    }

    inorder(root)

    return res
};
```
#### 迭代

```ts
// O(n)
function inorderTraversal(root: TreeNode | null): number[] {
    const res = [],stack = []

    while(root || stack.length){
        while(root){
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        res.push(root.val)
        root = root.right
    }

    return res
};
```

## 2022.4.26 链表相交 ⭐

> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 

#### 双指针
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(headA === null || headB === null) return null

    let you = headA, she = headB

    while(you !== she){
        you = you === null ? headB : you.next
        she = she === null ? headA : she.next
    }

    return you
};
```

#### 集合
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let temp = headA, set = new Set()

    while(temp !== null){
        set.add(temp)
        temp = temp.next
    }

    temp = headB

    while(temp !== null){
        if(set.has(temp)) return temp

        temp = temp.next
    }

    return null
};

```

## 2022.4.27 翻转二叉树 ⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/invert-binary-tree/)

给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

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

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root === null) return null

    let right = invertTree(root.right)
    let left = invertTree(root.left)

    root.right = left
    root.left = right

    return root
};
```


## 2022.4.28 求解二叉树直径 ⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/diameter-of-binary-tree/)

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。



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

function diameterOfBinaryTree(root: TreeNode | null): number {
    return dfs(root).length - 1
};

interface Data {
    depth: number,
    length: number
}

function dfs(root: TreeNode | null): Data{
    if(!root) return {
        depth: 0, length: 0
    }

    let left = dfs(root.left), right = dfs(root.right)

    return {
        depth: Math.max(left.depth, right.depth) + 1,
        length: Math.max(left.length, right.length, left.depth+right.depth+1)
    }
}
```

## 2022.4.29 合并二叉树 ⭐
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/merge-two-binary-trees/)

给你两棵二叉树： root1 和 root2 。

想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

返回合并后的二叉树。

注意: 合并过程必须从两个树的根节点开始

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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(root1 === null) return root2
    if(root2 === null) return root1

    let root = new TreeNode(root1.val + root2.val)

    root.left = mergeTrees(root1.left, root2.left)
    root.right = mergeTrees(root1.right, root2.right)

    // 基于 root1 树 返回
    // root1.val += root2.val
    // root1.left = mergeTrees(root1.left, root2.left)
    // root1.right = mergeTrees(root1.right, root2.right)

    // return root1

    return root
};
```