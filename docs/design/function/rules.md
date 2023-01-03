# 编程范式

函数组合是函数式编程中最特别、最关键的实践方法，是核心中的核心，堪称“核中核”。`reduce()` 之所以能够作为函数式编程的“万金油”存在，本质上就是因为它映射了函数组合的思想。

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

## 链式调用
链式调用的本质是通过在方法中返回对象实例本身的 this/ 与实例 this 相同类型的对象，达到多次调用其原型（链）上方法的目的。

```js
// 用于筛选大于2的数组元素
const biggerThan2 = num => num > 2  
// 用于做乘以2计算
const multi2 = num => num * 2    
// 用于求和
const add = (a, b) => a + b  

const sum = arr.filter(biggerThan2).map(multi2).reduce(add, 0)
```

## 管道 pipe & compose
面向对象的核心在于继承，而函数式编程的核心则在于组合。

```js
function pipe(...funcs) {
  // 核心
  function callback(input, func) {
    return func(input)
  }  

  // reduce 实现
  return function(param) {
    return funcs.reduce(callback,param)
  }
}

// 倒叙
function compose(...funcs) {
  function callback(input, func) {
    return func(input)
  }  

  return function(param) {
    return funcs.reduceRight(callback,param)
  }
}

function add4(num) {
  return num + 4
}  

function mutiply3(num) {
  return num*3
}  

function divide2(num) {
  return num/2
}

const compute = pipe(add4, mutiply3, divide2)
compute(1)  // 7.5
```

## 柯里化&偏函数
偏函数和柯里化解决的最核心的问题分别是：
- 函数组合链中的多元参数问题
- 函数逻辑复用的问题
上述 `pipe` 函数只能处理一元，无法处理多元函数，如果将
```js
function multiply3(num) {
  return num*3
}  
```
改为时，
```js
function multiply(x, y) {
  return x*y
}
```
就会出错，此时我们需要对函数入参进行降维操作。

### 柯里化
柯里化是把 1 个 n 元函数改造为 n 个相互嵌套的一元函数的过程，如：$fn(a, b, c)$ 转化为 $fn(a)(b)(c)$

- 示例
```js
function addThreeNum(a, b, c) {
  return a+b+c
}

function curry(addThreeNum) {
  // 返回一个嵌套了三层的函数
  return function addA(a) {
    // 第一层“记住”参数a
    return function addB(b) {
      // 第二层“记住”参数b
      return function addC(c) {
        // 第三层直接调用现有函数 addThreeNum
        return addThreeNum(a, b, c)
      }
    }
  }
}

// 借助 curry 函数将 add
const curriedAddThreeNum = curry(addThreeNum)
// 输出6，输出结果符合预期
curriedAddThreeNum(1)(2)(3)
```

### 偏函数
柯里化说的是一个 n 元函数变成 n 个一元函数。

偏函数说的是一个 n 元函数变成一个 m(m < n） 元函数。

对于柯里化来说，不仅函数的元发生了变化，函数的数量也发生了变化（1 个变成 n 个）。

对于偏函数来说，仅有函数的元发生了变化（减少了），函数的数量是不变的。
```js
// 一元函数，2个入参
function multiply(x, y) {
  return x*y
}

// 定义一个包装函数，专门用来处理偏函数逻辑
function curry(func) {
  // 逐层拆解传参步骤 - 第一层
  return function(x){
    // 逐层拆解传参步骤 - 第二层
    return function(y) {
      // 参数传递完毕，执行回调
      return func(x, y)
    }
  }
}
const multiply3 = curry(multiply)(3)

// 输出6
multiply3(2)
```

### 通用柯里化
通过`Function.length`获取函数入参个数
```js
// curry 函数借助 Function.length 读取函数元数
function curry(func, arity=func.length) {
  // 定义一个递归式 generateCurried
  function generateCurried(prevArgs) {
    // generateCurried 函数必定返回一层嵌套
    return function curried(nextArg) {
      // 统计目前“已记忆”+“未记忆”的参数
      const args = [...prevArgs, nextArg]  
      // 若 “已记忆”+“未记忆”的参数数量 >= 回调函数元数，则认为已经记忆了所有的参数
      if(args.length >= arity) {
        // 触碰递归边界，传入所有参数，调用回调函数
        return func(...args)
      } else {
        // 未触碰递归边界，则递归调用 generateCurried 自身，创造新一层的嵌套
        return generateCurried(args)
      }
    }
  }
  // 调用 generateCurried，起始传参为空数组，表示“目前还没有记住任何参数”
  return generateCurried([])
}
```
示例
```js
// 多元函数组合
function add(a, b) {
  return a + b
}

function multiply(a, b, c) {
  return a*b*c
}

function addMore(a, b, c, d) {
  return a+b+c+d
}

function divide(a, b) {
  return a/b
}

// 柯里化降维
const curriedAdd = curry(add)
const curriedMultiply = curry(multiply)
const curriedAddMore = curry(addMore)
const curriedDivide = curry(divide)

// 管道
const compute = pipe(
  curriedAdd(1), 
  curriedMultiply(2)(3), 
  curriedAddMore(1)(2)(3), 
  curriedDivide(300)
)
```


