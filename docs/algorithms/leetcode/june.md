# 六月
## URL 化
URL 化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的 “真实” 长度。

- 来源：力扣 (LeetCode)
- 链接：https://leetcode.cn/problems/string-to-url-lcci
```ts
function replaceSpaces(S: string, length: number): string { 
    // return S.substr(0,length).replace(/\s/g,'%20')
    // return S.substring(0,length).replace(/\s/g,'%20')
    // return S.slice(0,length).replace(/\s/g,'%20')
    return S.substr(0,length).split(' ').join('%20')
};
```

## 接雨水
```ts
function trap(height: number[]): number {
    let len = height.length

    if(len === 0) return 0

    let leftMax = new Array(len).fill(0) 
    leftMax[0] = height[0]

    for(let i=1; i<len; i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i])
    }

    let rightMax = new Array(len).fill(0)

    rightMax[len-1] = height[len-1]

    for(let i=len-2;i>=0;i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i])
    }
    
    let res = 0
    for(let i=0;i<len;i++){
        res += Math.min(leftMax[i], rightMax[i])- height[i]
    }

    return res
};
```

## 缺失的第一个正数
给你一个未排序的整数数组 nums，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
```ts
function firstMissingPositive(nums: number[]): number {
    const len = nums.length
    if(len === 0) return 1
    if(len === 1 && nums[0] <= 0) return 1

    let arr = []

    nums.forEach((i) => {
        if(i>=0){
            arr[i] = true
        }
    })
    

    if(!arr.length) return 1
 
    for(let i=1;i<arr.length;i++){
        if(!arr[i]){
            return i
        }
    }


    return arr.length
};
```