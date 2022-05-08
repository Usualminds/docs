# 类型
- 原始类型 7 种：`string`，`number`，`bigint`，`boolean`，`null`，`undefined`，`symbol`。栈结构 
- 引用类型：`object`、`array`、`date`。堆结构

## 判断类型的方法

#### typeof

`typeof`: 判断值类型数据、判断函数类型、只能判断是否是引用类型，无法深入判断。特殊类型 `typeof NaN
 = number`, `typeof null
 = object`, `typeof undefined = undefined`
```js
function mytypeof(target){
  let ret = typeof(target)
  const typeMap = {
    "[object Object]":"Object",
    "[object Array]":"Array",
    "[object Boolean]":"boolean",
    "[object String]":"string-Object",
    "[object Number]":"number-Object" // typeof(new Number(1)) = object
  }
  if(target == null) {
    return 'null'
  }
  if(ret === 'object') {
    // 原型方法 返回类型字符串
    const typeString = Object.prototype.toString.call(target)
    return typeMap[typeString]
  } else {
    return ret
  }
}
```

#### instanceof
`instanceOf` 的原理很简单，例如 `a instanceOf b` 就是利用 `a` 的隐式原型 `__proto__` 顺着原型链向上查找，如果过程中查到隐式原型的值等于 `b` 的显示原型 `prototype` 就返回 `true`,否则返回 `false`，如果一直找不到等于 `null`，也返回 `false`

```js
function myInstanceof(L, R){
    let rp = R.prototype
    L = L.__proto__

    while(true){
        if(L === null) return false

        if(L === rp) return true

        L = L.__proto__
    }
}

console.log(myInstanceof([],Array))
```

#### coustructor
`constructor` 判断类型的原理, `F` 作为构造函数，定义时的 `constructor` 遗传给了实例 `f`,所以 `f·constructor == F`

```js
function F(){}
let f = new F()
f.constructor == F //true

// 常见类型
''.constructor == String
[].constructor == Array
new Number(12).constructor == Number

new Function().constructor == Function
new Date().constructor == Date
```


#### `Object.prototype.toString.call()`
`toString()` 是 `Object` 的原型方法，调用该方法，默认返回当前对象的 `[[Class]]` 。这是一个内部属性，其格式为 `[object Xxx]` ，其中 `Xxx` 就是对象的类型。

```js
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(newFunction()) ; // [object Function]
Object.prototype.toString.call(newDate()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(newRegExp()) ; // [object RegExp]
Object.prototype.toString.call(newError()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window
```

## 类型转换

#### 显式类型转换

###### Number
- Number(null) = 0
- Number(NaN) = NaN
- Number(undefined) = NaN
- Number(false) = 0

###### Boolean
`Boolean` 六种值转为 `false` (`undefined ,null ,'' ,NAN ,0,false`),其他的都是 `true`

#### 隐式转换
```js
let a = '233'
a++ a-- // ++ 首先会调用Number(a)转为数字，然后在++，即使转不成数字也会转为number类型

+ a 、- a// 都会转换为数字类型,typeof为number

a = "a" + 2
// 当加号两侧有一个东西是字符串，就会调用string将两个都变成字符串

-,%,*,/   a = '1'* 1  1 * 'a'(Number(1) * Number('a')) = NaN // a =1
// 也是先转换为number类型

&& || !

> < // “3”>"2" 比阿斯克码序号, "3" > 2，转为number比大小

== !=
// 特殊情况 undefined == null
```
