# LRU 与 LFU 的应用

## LRU ⭐⭐
[👉 Leetcode 链接-146](https://leetcode.cn/problems/lru-cache/)

请你设计并实现一个满足 `LRU`(最近最少使用) 缓存约束的数据结构。
实现 `LRUCache` 类：
- `LRUCache(int capacity)` 以 正整数作为容量 `capacity` 初始化 `LRU` 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value`；如果不存在，则向缓存中插入该组 `key-value`。如果插入操作导致关键字数量超过 `capacity`，则应该逐出最久未使用的关键字。
- 函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。

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
        if (value !== undefined) {
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        } else {

            return -1
        }
    }
    put(key: number, value: number): void {
        let val = this.cache.get(key)
        if (val !== undefined) {
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            if (this.cache.size >= this.max) {
                this.cache.delete(this.cache.keys().next().value)
            }

            this.cache.set(key, value)
        }
    }
}
```
## LFU ⭐⭐⭐
[👉 Leetcode 链接-460](https://leetcode.cn/problems/lfu-cache/)

## 设计内存文件系统
[👉 Leetcode 链接-588](https://leetcode.cn/problems/design-in-memory-file-system/solution/she-ji-nei-cun-wen-jian-xi-tong-by-leetcode/)


## 总结
