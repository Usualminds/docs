# 数组

## 移除元素
[👉 Leetcode 链接-27](https://leetcode.cn/problems/remove-element/)

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

### 简单解法
```ts
function removeElement(nums: number[], val: number): number {
    const len = nums.length

    if(len === 0) return 0

    let j = 0

    for(let i=0;i<len;i++){
        if(val !== nums[i]){
            nums[j] = nums[i]
            j++
        }
    }

    return j
};
```
### 双指针
```ts
function removeElement(nums: number[], val: number): number {
    let left = 0, right = nums.length - 1

    while(left <= right){
        if(val === nums[left]){
            nums[left] = nums[right]
            right--
        } else{
            left++
        }
    }

    return left
};
```