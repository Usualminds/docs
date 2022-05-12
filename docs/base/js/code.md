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

    then(onFullfilled, onRejected){
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw new Error(reason instanceof Error ? reason.message : reason)
        }

        const self = this

        return new Promise((resolve, reject) => {
            if(self.status === STATUS.PENDING){
                self.onFullfilledCallbacks.push(() => {
                    try {
                        setTimeout(() => {
                            const res = onFullfilled(self.value)

                            res intanceof Promise ? res.then((resolve, reject)) : resolve(res) 
                        })
                    } catch(e) {
                        reject(e)
                    }
                })

                self.onRejectedCallbacks.push(() => {
                    try {
                            setTimeout(() => {
                                const res = onRejected(self.reason)

                                res instanceof Promise ? res.then((resolve, reject)) : reject(res)
                    } catch(e){
                        reject(e)
                    }
                )}

            } else if (self.status === STATUS.FULFILLED){
                try {
                        setTimeout(() => {
                            const res = onFullfilled(self.value)

                            res intanceof Promise ? res.then((resolve, reject)) : resolve(res) 
                    })
                } catch(e) {
                        reject(e)
                    }
            } else if((self.status === STATUS.REJECTED){
                setTimeout(()=> {
                    try{
                        const res = onFullfilled(self.reason)

                        res instanceof  Promise ? res.then(resolve,reject) : reject(res)
                    }catch(e){
                        reject(e)
                    }
                })
            }
        })
            
    },

    catch(onRejected){
        return this.then(null,onRejected)
    }

    static resolve(value) {
        if(value of Promise){
            return value
        } else {
            return new Promise((resolve,reject) => resolve(value))
        }
    }

    staic reject(value){
        return new Promise((resolve,reject) => {
            reject(value)
        })
    }
}

Promise.prototype.finally = function(cb){
    this.then(value => {
        return Promise.resolve((cb())).then(() => {
            return value 
        })
    }, err => {
        return Promise.resolve(cb()).then(()=> {
            throw error
        })
    }
    )
}
```

## Promise 实现网络超时判断
```js
const upload = (url, params) => {
    return Promise.race([
        uploadPrommise(url, params),
        uploadSetTiemout(100)
    ])
}

function uploadPrommise(url, params){
    return new Promise((resolve,reject) =>  {
        fetch(url,{
            headers: {'Content-Type': 'multipart/form-data'}, // 以formData形式上传文件
            withCredentials: true
        }).then((data) => {
            if(data.code === 200){
                resolve(data)
            } else {
                reject(data)
            }
        })
    })
}

function uploadSetTiemout(delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject({timeoutMsg: '上传超时'})
        }, delay)
    })
}
```

## 批量请求函数

- 要求最大并发数 maxNum
- 每当有一个请求返回，就留下一个空位，可以增加新的请求
- 所有请求完成后，结果按照 urls 里面的顺序依次打出

```js
function mutilyRequest(urls, limit){
    let length = urls.length
    let count = 0
    let results = Array(length).fill(false)

    return new Promise((resolve, reject) => {
        while(count < limit){
            next()
        }

        function next(){
            let current = count++

            if(current >= length){
                !results.includes(false) && resolve(results)
                return 
            }

            let url = urls[current]

            console.log(`current request starting, url is: ${url}, this is ${current} request`)

            request(url).then(data => {
                results[current] = data

                console.log(`current request ${current}: ${url} has finished`)

                if(current < length){
                    next()
                }
            }).catch((e) => {
                results[current] = e

                console.log(`current request ${current}: ${url} error`)

                if(current<length){
                    next()
                }
            })
        }
    })
}

function request(url){
    return new Promise((resolve, reject) => {
        let res
        fetch(url,{
            headers: {
                'connect-src' : self
            }
        }).then(data => {
            res = data
        })
        resolve(`current request is', ${url}, res is : ${res}`)
        // fetch(url)
    })
}

let urls = [
    'https://cat-fact.herokuapp.com/facts',
    'https://cat-fact.herokuapp.com/facts',
    'https://cat-fact.herokuapp.com/facts',
    '3',
    'https://cat-fact.herokuapp.com/facts',
    '5',
    'https://cat-fact.herokuapp.com/facts',
    '7',
]

mutilyRequest(urls, 3).then((res) => {
    console.log('res: ', res)
})
```

## Vue 双向绑定
- 对象，包含复杂对象
- 值类型
- 数组,改造原型

TODO: 

```js
function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        get: function(val){
            return value
        },

        set: function(newVal){
            observer(value)

            if(value == newVal) {
                return
            }

            val = newVal
        }
    })
}

// const originArrayPrototype = Array.prototype
// const newArrayObj = Object.create(originArrayPrototype)

// ['push','shift','unshift','pop'].forEach((name) => {
//     console.log('update', name)
//         newArrayObj[name] = function(){
//         console.log('update', name)
//         originArrayPrototype[name].call(this,...arguments)
//     }
// })


function observer(target){
    if(typeof target !== 'object' || target === null){
        return target
    }

    // if(target instanceof Array){
    //     target.__proto__ = newArrayObj
    // }

    for(let key in target){
        defineReactive(target, key, target[key])
    }
}

let obj = {
    num: 1
}

observer(obj)

obj.num = 3
```

## 虚拟 dom 过程( html 转为 json 格式)
```js
const str1 = '<div>1<span>2<a>3</a>4</span>5<span>6<a>7</a>8<a>9</a>10</span>11</div>';
function Dom2JSON(str) {
    str = str.split('<').map(x => x.split('>'));
    let res = [],stack = [],temp = {},cur = {},key = 0;
    // 获取树形结构
    for(let i = 1;i < str.length; i++) {
        if (str[i][0].indexOf('/') === -1) {
            temp = {};
            temp['key'] = key++;
            temp['tag'] = str[i][0];
            temp['value'] = str[i][1];
            temp['children'] = [];
            temp['parent'] = stack.length === 0 ? 0 : stack[0]['key'];
            stack.unshift(temp);
        } else {
            cur = stack.shift();
            // 当前元素为根元素时栈为空
            stack.length !== 0 && (stack[0]['value'] = stack[0]['value'] + cur['value'] + str[i][1]);
            res.unshift(cur);
        }
    }
    // 使得遍历时索引与key值匹配
    res = res.sort((x, y) => x['key'] - y['key']);
    for (let i = res.length - 1;i > 0;i--) {
        temp = {};
        temp['tag'] = res[i]['tag'];
        temp['value'] = res[i]['value'];
        temp['children'] = res[i]['children'];
        res[res[i]['parent']]['children'].unshift(temp);
    }
    res = res[0];
    delete res['parent'];
    delete res['key'];
    return JSON.parse(JSON.stringify(res));
}

console.log(Dom2JSON(str1));
```

## 实现一个 ajax

```js
const ajax = (url, options = {
    method: 'GET',
    aysnc: true,
    data: null
}) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = () => {
            if(xhr.readState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.resonseText))
                } else if(xhr.status > 400) (
                    reject('xhr error occured')
                )
            }
        }

        const { method, async, data } = options

        xhr.open(method,url, async)

        xhr.send(data)
    })
}

ajax('https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send/bcd.json')
```

## 红绿灯
3s 打印 red，2s 打印 green，1s 打印 yellow
```js
async function setColor(color, time){
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log(color)
            resolve()
        }, time)
    })
}

async function getter(){
    await setColor('red', 1000)
    await setColor('green', 2000)
    await setColor('yellow', 3000)
}
```

## 柯里化
```js
function cury(fn, ...args){
    // 判断参数的长度是否已经满足函数所需参数的长度 够了就执行，否则新增参数然后返回函数
    return fn.length <= args.length ? fn(...args) : cury.bind(null, fn, ...args)
}

let add = cury((a,b,c) => a+b+c)

// test case
console.log(add(1,2,3))
console.log(add(1,2)(3))
console.log(add(1)(2)(3))
```

## 设计模式

#### 单例模式
```js
class Single {
    constructor(name){
        this.name = name
        this.instance = null
    }

    static getInstance(){
        if(!this.instance){
            this.instance = new Single(name)
        }

        return this.instance
    }
}

let a = Single.getInstance('a')
let b = Single.getInstance('b')

console.log(a === b)
```

#### 观察者模式
```js
// 四种状态：sub, pub, remove, removeAll
class Event {
    constructor(){
        this.events = {}
    }

    sub(name, callback){
        if(!this.events[name]){
            this.events[name] = [callback]
        } else {
            this.events[name].push(callback)
        }
    }

    pub(name){
        if(this.events[name]){
            this.events[name].forEach((callback) => callback())
        }
    }

    remove(name, callback){
        if(this.events[name]){
            this.events[name] = this.events[name].filter((fn) => fn !== callback)
        }
    }

    removeAll(name){
        if(this.events[name]){
            this.events[name] = []
        }
    }
}

// test case 
let events = new Event()

function logger(){
    console.log(...arguments)
}

function getTime(){ return new Date()}

function makeArray(){
    return Array(10).fill(false)
}

events.sub('logger', logger)
events.sub('logger', getTime)
events.sub('makeArray', makeArray)

events.pub('logger')
events.pub('makeArray')

events.remove('makeArray', makeArray)

events.sub('makeArray', makeArray)

events.removeAll('logger')

console.log(events)
```

## 发布订阅模式
- on
- emit
- remove
- once

```js
class EventEmitter {
    constructor(){
        this.events = {}
    }

    on(name, cb){
        if(!this.events[name]){
            this.events[name] = [cb]
        } else {
            this.events[name].push(cb)
        }
    }

    emit(name){
        this.events[name] && this.events[name].forEach(fn => fn())
    }

    remove(name, cb){
        if(this.events[name]){
            this.events[name] = this.events[name].filter(fn => fn !== cb)
        }
    }

    once(name, cb) {
        let fn = () => {
            cb()
            this.remove(name, cb)
        }

        this.on(name, fn)
    }
}

// test case

let em = new EventEmitter();
let workday = 0;

em.on("work", function() {
    workday++;
    console.log("work everyday");
});

em.once("love", function() {
    console.log("just love you");
});

function makeMoney() {
    console.log("make one million money");
}

em.on("money",makeMoney)


let time = setInterval(() => {
    em.emit("work");
    em.remove("money",makeMoney);
    em.emit("money");
    em.emit("love");
    if (workday === 5) {
        console.log("have a rest")
        clearInterval(time);
    }
}, 1);
```

