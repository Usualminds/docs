# 笔试题

## 数组去重

```js
function unique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  // 当前值 下标 数组
  return arr.filter((cur, index, array) => {
    return array.indexOf(cur) === index;
  })
}

function unique(arr){
  return arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return pre.concat(cur)
    }else{
      return pre
    }
  },[])
}
```
## 数组扁平化

```js
function flatten(arr){
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur):cur)
    },[])
}

function flatten(arr){
    return [].concat(...arr.map(item => {
        return Array.isArray(item) ? flatten(item) : item
    }))
}
```

## 防抖函数（debounce)
- 定义：每次事件触发则删除原来的定时器，建立新的定时器。跟王者荣耀的回城功能类似，你反复触发回城功能，那么只认最后一次，从最后一次触发开始计时

- 场景：
  - 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
  - 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似

```js
function debounce(fn, delay){
    let timer = null
    return function(...args){
        if(timer) clearTimeout(timer)

        timer = setTimeout(function(){
            fn.apply(this, args)
        },delay)
    }
}

```

## 节流函数（throttle）
- 定义：如果在定时器的时间范围内再次触发，则不予理睬，等当前定时器完成，才能启动下一个定时器任务。这就好比公交车，10 分钟一趟，10 分钟内有多少人在公交站等我不管，10 分钟一到我就要发车走人！
- 场景
    - 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
    - 缩放场景：监控浏览器 `resize`
    - 动画场景：避免短时间内多次触发动画引起性能问题
  
```js
function throttle(fn, interval){
    let flag = true

    return function(...args){
        if(!flag) return
        flag = false

        setTimeout(()=>{
            fn.apply(this, args)
            flag = true
        },interval)
    }
}
```

## 洗牌算法和获取随机数
```js
function getRandom(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle(arr){
    let _arr = arr.slice()

    for(let i=0;i<_arr.length;i++){
        let el = _arr[i], random = getRandom(0,i)
        
        _arr[i] = _arr[random]
        _arr[random] = el
    }

    return _arr
}
```
## 实现 instanceof
```js
function myInstanceof(L, R){
    let RP = R.prototype
    L = L.__proto__

    while(true){
        if(L === null) return false

        if(L === RP) return true

        L = L.__proto__
    }
}

// test case
myInstanceof([], Object)    // true
```

## 实现 new
```js
function myNew(constructor, ...args){
    let obj = Object.create(constructor.prototype)

    let res = constructor.apply(obj, args)

    return res instanceof Object ? res : obj
}


// test case
function Person(age, name){
    this.age = age
    this.name = name

    console.log('Person name & age', this)
}

let person = myNew(Person, [12, 'joe'])

person.__proto__ === Person.prototype
person.constructor === Person
```

## call & apply & bind

```js
function myCall(ctx, ...args){
    ctx = ctx || window

    let caller = Symbol('caller')
    ctx[caller] = this

    let res = ctx[caller](...args)
    delete ctx.caller

    return res
}

// test case
function Parent(age){
  this.age = age;
}

// 定义子
function Child(age,name){
    Parent.myCall(this,age);
    this.name = name
}

let child = new Child(12,'Lee')
console.log(child);
```

## 自增函数

```js
let count = (function (){
    let num = 0

    return function(){
        return num++
    }
})()

// test case
count() // 0 
count() // 1 
count() // 2 
```

## sleep 
```js
function sleepEs5(cb, delay){
    if(typeof cb === 'function'){
        setTimeout(cb, delay)
    }
}

function sleep(delay){
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

sleep(3000).then(()=> {
    console.log('ok')
})
```

## forEach

```js
arr.forEach(function(currentValue, currentIndex, arr) {}, thisArg)

//currentValue  必需。当前元素
//currentIndex  可选。当前元素的索引
//arr           可选。当前元素所属的数组对象。
//thisArg       可选参数。当执行回调函数时，用作 this 的值。

Array.prototype._forEach = function(fn, thisArgs){
    let arr = Array.prototype.slice.call(this)

    for(let i=0;i<arr.length;i++){
        fn.call(thisArgs, arr[i], i, arr)
    }
}

let arr = [1,2,3,4]

arr._forEach((item, index, arr) => {
    console.log(item, index, arr)
})
```

## filter 

```js
Array.prototype._filter = function(fn, thisArgs){
    let arr = Array.prototype.slice.call(this)
    let res = []

    for(let i=0;i<arr.length;i++){
        fn.call(thisArgs, arr[i], i, arr) && res.push(arr[i])
    }

    return res
}

let arr = [1,2,3,4]
arr._filter((i) => i > 2)   [3,4]
```

## map
```js
Array.prototype._map = function(fn, thisArgs){
    let res = []
    thisArgs = thisArgs ?? []

    this.reduce((pre, cur, index, arr) => {
        res.push(fn.call(thisArgs,cur, index, arr))
    }, [])

    return res
}

let arr = [1,2,3,4]
arr.map((item) => item + 1) // [2,3,4,5]
```

## promise
```js
// promise 的三种组状态
const STATUS = {
    PENDING: 'PENDING',
    FULLFIlLED: 'FULLFIlLED',
    REJECTED: 'REJECTED',
}

class Promise {
    constructor(run){
        // init status is pending
        this.status = STATUS.PENDING

        // success & fail results
        this.value = undefined
        this.reason = undefined

        // callbacks
        this.onFullfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = value =>{
            if(this.status === STATUS.PENDING){
                this.status = STATUS.FULLFILED
                this.value = value

                this.onFullfilledCallbacks.forEach((fn) => fn(this.value))
            }
        }

        const reject = value => {
            if(this.status === STATUS.PENDING){
               this.status = STATUS.REJECTED
               this.reason = value

                this.onRejectedCallbacks.forEach((fn) => fn(this.reason))
            }
        }

        try {
            run(resolve, reject)
        } catch(e){
            reject(e)
        }
    }

    then(fullfill, reject){
        
    }


}
```