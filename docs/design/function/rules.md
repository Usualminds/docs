# 编程范式

## 高级函数（HOF）
```js
// +1 函数 
function add1(num) {
  return num + 1  
}  

// *3函数
function mult3(num) {
  return num * 3 
}  

// /2函数
function divide2(num) {
  return num / 2
}

function arrCompute(arr, compute) {
  const newArr = []  
  for(let i=0; i<arr.length; i++) {
    // 变化的算式以函数的形式传入
    newArr.push(compute(arr[i]))
  }
  return newArr
}

// 输出 [2, 3, 4]
console.log(arrCompute([1,2,3], add1))
// 输出 [3, 6, 9]
console.log(arrCompute([1,2,3], mult3)) 
// 输出 [1, 2, 3]
console.log(arrCompute([2,4,6], divide2))  
```
