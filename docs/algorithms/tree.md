
# 树

顾名思义，每个节点最多有两个“叉”，也就是两个子节点，分别是左子节点和右子节点。不过，二叉树并不要求每个节点都有两个子节点，有的节点只有左子节点，有的节点只有右子节点


## 从上到下打印二叉树 I
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: `[3,9,20,null,null,15,7]`

```js
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```js
[3,9,20,15,7]
```

::: tip
- 二叉树的 广度优先搜索（BFS）。
- BFS 通常借助 队列 的先入先出特性来实现。
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

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

function levelOrder(root: TreeNode | null): number[] {
    if(!root) return []

    let treeNode: TreeNode[] = [root]
    let results: number[] = []

    while(treeNode.length){
        let currentNode = treeNode.shift()

        results.push(currentNode.val)

        if(currentNode.left){
            treeNode.push(currentNode.left)
        }

        if(currentNode.right){
            treeNode.push(currentNode.right)
        }
    }

    return results
};
```

  </CodeGroupItem>
</CodeGroup>

## 从上到下打印二叉树 II
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: `[3,9,20,null,null,15,7]`
```js
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```js
[
  [3],
  [9,20],
  [15,7]
]
```

::: tip
- 按层打印： 题目要求的二叉树的 从上至下 打印（即按层打印），又称为二叉树的 广度优先搜索（BFS）。BFS 通常借助 队列 的先入先出特性来实现。

- 每层打印到一行： 将本层全部节点打印到一行，并将下一层全部节点加入队列，以此类推，即可分为多行打印
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

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
function levelOrder(root: TreeNode | null): number[][] {
    let results: number[][] = []
    let quene: TreeNode[] = [root]

    if (!root) return results

    while (quene.length) {
        let temp = []

        for (let i = quene.length; i > 0; i--) {
            let node = quene.shift()
            temp.push(node.val)

            if (node.left) quene.push(node.left)
            if (node.right) quene.push(node.right)
        }

        results.push(temp)
    }

    return results
};
```

  </CodeGroupItem>
</CodeGroup>

## 从上到下打印二叉树 III

## 树的子结构
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

输入两棵二叉树 A 和 B，判断 B 是不是 A 的子结构。(约定空树不是任意一个树的子结构)

B 是 A 的子结构， 即 A 中有出现和 B 相同的结构和节点值。

给定的树 A:
```js
     3
    / \
   4   5
  / \
 1   2
```
树 B
```js
   4 
  /
 1
```
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

::: tip
- 示例 1：

    - 输入：A = [1,2,3], B = [3,1]
    - 输出：false
- 示例 2：
    - 输入：A = [3,4,5,1,2], B = [4,1]
    - 输出：true
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    return (A !== null && B !== null) && (walkTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};

function walkTree(A: TreeNode | null, B: TreeNode | null): boolean {
    if(B === null) return true

    if(A === null || A.val !== B.val) return false

    return walkTree(A.left, B.left) && walkTree(A.right, B.right)
}
```

  </CodeGroupItem>
</CodeGroup>

## 二叉树的镜像
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：
```js
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
镜像输出：
```js
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

::: tip 用例
- 示例 1：
    - 输入：root = [4,2,7,1,3,6,9]
    - 输出：[4,7,2,9,6,3,1]
:::

::: tip 题目分析

镜像情况
- 左子树和右子树节点交换

返回条件
- 子树到达叶子节点，root 为空时
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

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

function mirrorTree(root: TreeNode | null): TreeNode | null {
    if(root === null) return null

    const left = mirrorTree(root.left), right = mirrorTree(root.right)

    root.left = right
    root.right = left

    return root
};
```

  </CodeGroupItem>
</CodeGroup>

## 对称二叉树
> :point_right: 
[Leetcode 链接](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```js
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
```js
    1
   / \
  2   2
   \   \
   3    3
```

::: tip 用例
- 示例 1：

    - 输入：root = [1,2,2,3,4,4,3]
    - 输出：true
- 示例 2：
    - 输入：root = [1,2,2,null,3,null,3]
    - 输出：false
:::

::: tip 题目分析

对称树情况
- 左子树的左节点 = 右子树的右节点， 左子树的右节点 = 右子树的左节点

返回条件
- 左右子树都同时到达叶子节点，返回 true
- 其中一个为空另一个不为空或节点取值不相等，返回 false

:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

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

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null) return true

    let left = root.left, right = root.right

    return swap(left, right)
};

function swap(left: TreeNode, right: TreeNode) {
    if(left === null && right === null) return true
    if(left === null || right === null || left.val !== right.val) return false

    return swap(left.left, right.right) && swap(left.right, right.left)
}
```

  </CodeGroupItem>
</CodeGroup>
