# 数学

## 消失的两个数字
[👉 Leetcode 链接-17](https://leetcode.cn/problems/missing-two-lcci/)

给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？

以任意顺序返回这两个数字均可。

- 示例 1:
    - 输入: [1]
    - 输出: [2,3]
  
- 示例 2:
    - 输入: [2,3]
    - 输出: [1,4]
```ts
function missingTwo(nums: number[]): number[] {
    let len = nums.length + 2, cur = Math.floor(len * (len + 1)/2)

    for(let num of nums) cur -=  num

    let sum = cur, t = Math.floor(cur/2) 

    cur = Math.floor(t*(t+1)/2)

    for(let num of nums){
        if(num<=t) cur -= num
    }

    return [cur, sum - cur]
};
```
## 最大公约数
```ts
function getMax(a: number, b: number): number {
    if (b === 0) return a
    let r = a % b
    return getMax(b, r)
}
```

## Pow(x，n)
[leetcode-50](https://leetcode.cn/problems/powx-n/)

实现 pow(x，n)，即计算 x 的 n 次幂函数 (即，xn)

### 快速幂+递归
```ts
function myPow(x:number,n:number):number{
    if(n<0) return 1 / getQuick(x,-n)

    return getQuick(x, n)
}

function getQuick(x:number, n:number):number{
    if(n === 0) return 1
    
    let res = getQuick(x, Math.floor(n/2))

    return n % 2 === 0 ? res * res : res * res * x 
}
```

### 快速幂+迭代
```ts
function myPow(x:number,n:number):number{
    if(n<0) return 1 / getQuick(x,-n)

    return getQuick(x, n)
}

function getQuick(x:number, n:number):number{
    let res = 1, xc = x

    while (n>0) {
       if(n % 2 === 1) {
           res *= xc
       } 

       xc *= xc

       n = Math.floor(n/2)
    }
    
    return res
}
```

## 递归乘法
```ts
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
    if(A === 0 || B === 0) return 0

    if(B === 1) return A
    if(A === 1) return B

    return A + multiply(A, B -1)
};
```

## x 的平方根
[leetcode-69](https://leetcode.cn/problems/sqrtx/)

给你一个非负整数 x，计算并返回 x 的算术平方根
由于返回类型是整数，结果只保留整数部分，小数部分将被舍去

- 二分法
- 牛顿迭代
- x=x^1/2=(e^lnx)^1/2=e^(0.5lnx)
```ts
function mySqrt(x: number): number {
    let left = 0, right = x, res = 0

    while(left <= right){
        let mid = left + Math.floor((right-left) / 2)

        if(mid * mid <= x){
            res = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return res
};
```
