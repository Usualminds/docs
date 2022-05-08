# 基础

### 函数预编译过程
预编译发生在函数执行的前一刻
- 创建 AO（Activation Object）执行上下文对象
- 寻找**形参**和**变量声明**，将其作为 AO 属性名，值为 `undefined`
- 将实参和形参统一
- 在函数里找到**函数声明**，函数名为属性名，函数体为属性值
- `arguments` 作为属性，值为实参数组，`this` 作为属性，值为 `window`
  
```js
function fn(a) {
  console.log(a)
  var a = 123
  console.log(a)
  function a() {}
  console.log(a)
  var b = function(){}
  console.log(b)
  function d(){}
}

// 先预编译，再执行

1. AO {}
2. AO {
    a: undefined,
    b: undefined,
}
3. AO {
    a: 1,
    b: undefined,
}
4. AO {
    a: fn a(),
    b: fn (),
    d: fn d()
}

// 执行输出

1. ƒ a(){}
2. 123
3. 123
4. ƒ (){}
```

### 闭包
当内部函数被保存到了外部，就叫做闭包。闭包的产生会照成原有作用域链未释放，导致内存泄漏

闭包作用

#### 累加器
```js
function a(){
    let num = 0

    function b(){
        num++
        console.log(num)
    }

    return b
}

let output = a()

output()
output()

// output: 1, 2
```

#### 可以做存储结构
```js
function a(){
    let food = 'null'

    let obj = {
        eat: function(){
            console.log('eating food: ', food)
        },
        buy: function(fd){
            food = fd
        }
    } 

    return obj
}

let me = a()

me.buy('orange')
me.eat()


// output: eating food: orange
```

#### 封装，属性私有化

```js
function cache(){
    let data = {}
    return {
        get: function(key) {
            return data[key]
        },
        set: function(key, val){
            data[key] = val
        }
    }
}

let caches = cache()

caches.set('orange', '5$')
caches.get('orange')

// output: '5$'
```

#### 模块化开发，防止污染全局变量

#### 场景
- 在定时器、事件监听、Ajax 请求、跨窗口通信、Web Workers 或者任何异步中，只要使用了回调函数，实际上就是在使用闭包。
- 立即执行函数，此类函数只会执行一次，并且直接销毁内存，不会占用内存空间，常常用来初始化数据
```js
let count = (function () {
    let num = 0

    return function(){
        num++
        console.log(num)
    }
})()

count()
count()

// output: 2
```
- `let demo = function(){console.log(1)}()`，直接执行，不管名称
- 题目
```js
let x = 1
if(function f() {}){ 
// 表达式外面有括号，这个f()就自动销毁了
    x+=typeof f; // 1 + 'undefined' = '1undefined'
}
console.log(x)

// output: '1undefined'
```