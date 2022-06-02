# HT
## forEach
```ts
[1,2,3,4].forEach((v) => {
    if(v === 2) {
        return
    }
    console.log(v * 2)
})

// 2,6,8
```
## 寻找最近公共祖先
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

> [leetcode-236](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)
```ts
// 
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(root === null) return root

    if(root === p || root === q) {
        return root
    }

    let left: TreeNode = lowestCommonAncestor(root.left, p,q)
    let right: TreeNode = lowestCommonAncestor(root.right,p,q)

    if(left !== null && right !== null){
        return root
    } else if(left !== null){
        return left
    } else if(right !== null){
        return right
    }

    return null
};
```

## LRU
请你设计并实现一个满足 `LRU-Least Recently Used` (最近最少使用)缓存约束的数据结构。
```ts
class LRUCache {
    max: number = 0
    cache: Map<number, number>

    constructor(capacity: number) {
        this.max = capacity
        this.cache = new Map()
    }

    get(key: number): number {
        let value = this.cache.get(key)
        if(value){
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        let val = this.cache.get(key)
        if(val){
            this.cache.delete(key)
            this.cache.set(key,value)
        } else {
            if(this.cache.size >= this.max){
                this.cache.delete(this.cache.keys().next().value)
            }
            
            this.cache.set(key,value)
        }
    }
}
```

## instanceof
```ts
function myInstanceof(L,R){
    L = L.__proto__
    let rp = R.prototype

    while (true) {
        if(L === null) return false
        if(L === rp) return true

        L = __proto__
    }
}
```