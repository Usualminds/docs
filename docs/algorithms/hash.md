# 哈希表

## 快乐数
[👉 Leetcode 链接-202](https://leetcode.cn/problems/happy-number/)

编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

- 通过 `Map` 字典处理
```ts
function isHappy(n: number): boolean {
    let map = new Map()

    while(n !== 1) {
        n = getSum(n)
        if(!map.has(n)){
            map.set(n, 1)
        } else {
            return false
        }
    }

    return true
};

function getSum(n: number): number{
    let sum = 0

    while(n > 0){
        sum += (n % 10) ** 2
        n = Math.floor(n / 10)
    }

    return sum
}
```
- 通过 `Set` 集合处理
```ts
function isHappy(n: number): boolean {
    let set = new Set()

    while(n !== 1) {
        if(set.has(n)) return false

        set.add(n)

        n = String(n).split('').reduce((pre, cur) => pre + Number(cur) ** 2, 0)
    }

    return true
};
```

## 四数相加 II
[👉 Leetcode 链接-454](https://leetcode.cn/problems/4sum-ii/)

给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

```ts
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let map = new Map(), res = 0

    nums1.forEach(u => nums2.forEach(v => map.set(u+v, (map.get(u+v) || 0) + 1)))   
    for(let u of nums3){
        for(let v of nums4){
            if(map.has(-u-v)) res += map.get(-u-v)
        }
    }
    return res
};
```
