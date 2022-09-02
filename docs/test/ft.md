# FT
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

## other
两个人轮流抛硬币，规定第一个抛出正面的人可以吃到苹果，请问先抛的人能吃到苹果的概率多大？
> 轮流制：先抛的人吃到苹果的概率：1/2 + 1/2^3 + 1/2^5 + ... 求得结果为 **2/3**
## 数组
查询数组中有没有比它前面元素都大，比它后面的元素都小的数
```ts
function getIndexs(arr: number[]): number[]{
    let results: number[] = [], len = arr.length, right = [], min = arr[len - 1]

    for(let i=len-2;i>=0;i--){
        if(arr[i]< min){
            min = arr[i]
            right[i] = min
        }
    }

    let max = arr[0]

    for(let i=1;i<len-1;i++){
        if(arr[i] > max){
            max = arr[i]
            if(arr[i] === right[i]){
                results.push(max)
            }
        }
    }

    return results
}

const arr = [21，11，45，56，9，66，77，89，78，68，100，120，111]
console.log(getIndexs(arr))
```

## myNew
```ts
function myNew(constructor, ...args){
    // let obj = {}
    // Object.setPrototypeOf(obj, Con.prototype)
    let obj = Object.create(constructor.prototype)
    
    let res = constructor.apply(obj, args)
    
    
    return res instanceof Object ? res : obj
}
```

## 冒泡标记
```ts
function bubbleSortFlag(arrr: number[]){
    let len = arr.length - 1
    for(let i=0;i<len;i++){
        let flag = true
        for(let j=0;j<len - i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = false
            }

        }

        if(flag){
            break
        }
    }

    return arr
}
```