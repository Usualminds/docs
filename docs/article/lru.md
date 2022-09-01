# LRU 和 LFU 
缓存在计算机语言中举足轻重，也是我们经常会使用到的一项技术，关于缓存常见的一些算法有 `LRU` 和 `LFU`。

## LRU ⭐⭐⭐

### 什么是 LRU
`LRU` 是 `Least Recently Used` 的缩写，即最近最少使用，是一种常用的页面置换算法，该算法的思路是，发生缺页中断时，将未使用的时间最长的页面置换出去。这样做既充分利用了内存中页面调用的历史信息，又正确反映了程序的局部问题。`LRU` 在现代语言框架中均有应用。除了 `LRU` 常见的缓存置换策略也有很多，比如 `FIFO`、`MRU`、`TLRU`等，更多信息可以参见 [Cache replacement policies](https://en.wikipedia.org/wiki/Cache_replacement_policies#)

### LRU 流程
`LRU` 置换策略流程如下：

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h56o6dns04j20l00acaal.jpg)

以 `A B C D E D F` 这样的访问顺序为例来讲，根据 `LRU` 的原理，一旦 `A B C D` 进入队列中，每个新的访问都会增加 1 次计数，当 `E` 要进入该队列时，根据 `LRU` 算法，由于当前 `A` 的 `Rank A(0)` 最低，所以 `E` 将取代 `A`

在倒数第二步中，访问 `D` 并更新其序列号。最后，访问 `F` 以代替当前具有最低 `Rank(B(1))` 的 `B`。

### LRU 题解
我们以[👉 Leetcode-146](https://leetcode.cn/problems/lru-cache/)题为例来讲：

请你设计并实现一个满足 `LRU`(最近最少使用) 缓存约束的数据结构。
实现 `LRUCache` 类：
- `LRUCache(int capacity)` 以 正整数作为容量 `capacity` 初始化 `LRU` 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value`；如果不存在，则向缓存中插入该组 `key-value`。如果插入操作导致关键字数量超过 `capacity`，则应该逐出最久未使用的关键字。
- 函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。

针对该题，我们可以快速联想到使用 `Map` 数据结构来解决该类问题，通过 `get` 操作获取 `key` 对应的取值，通过 `set` 操作更新，通过 `delete` 移除上次记录。需要注意的时，当插入操作导致关键字数量超过 `capacity`，应该移除最久未使用的 `key`， 可以通过 `keys().next().value` 获取它。

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

### 什么是 LFU
`LFU` 是 `Least Frequently Used` 的缩写，即最不经常使用，是一种用于管理计算机内存的缓存算法，此方法的标准特征包括系统跟踪内存中引用块的次数。当缓存已满并需要更多空间时，系统将清除参考频率最低的项，更多信息可以参见 [Least Frequently Used](https://en.wikipedia.org/wiki/Least_frequently_used)

### LRU VS LFU 
相对于上面👆我们提到的 `LRU`首先淘汰最长时间未被使用的页面的算法。`LFU` 则是先淘汰一定时间内被访问次数最少的页面的算法。

### LFU 题解
我们以[👉 Leetcode-460](https://leetcode.cn/problems/lfu-cache/)题为例来讲：

请你为最不经常使用（`LFU`）缓存算法设计并实现数据结构。

实现 `LFUCache` 类：

- `LFUCache(int capacity)` - 用数据结构的容量 `capacity` 初始化对象
- `int get(int key)` - 如果键 `key` 存在于缓存中，则获取键的值，否则返回 `-1` 。
- `void put(int key, int value)` 
  - 如果键 `key` 已存在，则变更其值；
  - 如果键不存在，请插入键值对。当缓存达到其容量 `capacity` 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除**最近最久未使用**的键。
- 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。
- 当一个键首次插入到缓存中时，它的使用计数器被设置为 `1` (由于 `put` 操作)。对缓存中的键执行 `get` 或 `put` 操作，使用计数器的值将会递增。
- 函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。

我们简单分析一下：对于上述我们提到的 `LRU` 来讲，`map` 的末尾就是我们要淘汰的页面，而对于 `LFU` 来说并非如此, 因为 `LFU` 还需要统计每个页面被访问的次数，而页面访问先后顺序并没有那么重要。

我们同样可以使用 `Map` 数据结构来做处理，只是需要多几步操作，我们需要记录页面的访问次数 `times`以及其对应的值的合集 `values`,同时记录最小的使用频率即 `count`


```ts
class LFUCache {
    private max: number
    private count: number
    private times: Map<number, number>
    private values: Map<number, number>
    private map: Map<number, Set<number>>

    constructor(capacity: number) {
        this.max = capacity
        this.count = 0
        this.times = new Map()
        this.values = new Map()
        this.map = new Map()
    }

    get(key: number): number {
        if (this.values.has(key)) {
            this.update(key)
            return this.values.get(key)
        }

        return -1
    }

    put(key: number, value: number): void {
        if (this.max === 0) return

        if (this.values.has(key)) {
            this.values.set(key, value)
            this.update(key)
        } else {
            if (this.max === this.values.size) {
                let minUse = this.map.get(this.count), minKey = minUse.keys().next().value

                minUse.delete(minKey)
                this.values.delete(minKey)
                this.times.delete(minKey)
            }

            this.values.set(key, value)

            let countSet = this.map.get(1) || new Set()
            countSet.add(key)

            this.map.set(1, countSet)
            this.times.set(key, 1)

            // init min count
            this.count = 1
        }
    }

    update(key: number): void {
        let time = this.times.get(key), countSet = this.map.get(time)

        // update min time
        if (this.count === time && countSet.size === 1) {
            this.count += 1
        }

        time++
        countSet.delete(key)
        countSet = this.map.get(time) || new Set()
        countSet.add(key)

        this.map.set(time, countSet)
        this.times.set(key, time)
    }
}
```

## 总结
通过本文，我们简要了解了常见的缓存算法 `LRU` 和 `LFU`。`LRU` 会优先淘汰更新频率最低的页面，而`LFU` 会优先淘汰使用最少的页面。通过这样的处理，我们只需维护一个指定大小的空间，便可以实现一些基础缓存需求。你学会了吗？

