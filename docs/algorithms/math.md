# 数学

## 最大公约数
```ts
function getMax(a: number, b: number): number {
    if (b === 0) return a
    let r = a % b
    return getMax(b, r)
}
```

## Pow(x, n)
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）
[leetcode-50](https://leetcode.cn/problems/powx-n/)

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
给你一个非负整数 x ，计算并返回 x 的 算术平方根
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去

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