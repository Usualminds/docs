
# 二叉树

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