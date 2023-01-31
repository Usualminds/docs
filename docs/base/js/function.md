# 函数

## arguments 
`arguments` 是一个对应于传递给函数的参数的**类数组对象**
### 转化方法
```js
let args = Array.prototype.slice.call(arguments);
let args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```
### 示例
```js
function sortArguments() {
  let args = Array.prototype.slice.call(arguments);

  // 转化后，可使用数组方法
  let sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1));


// 定义连接字符串的函数
function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

myConcat("; ", "elephant", "giraffe", "lion", "cheetah"); // returns "elephant; giraffe; lion; cheetah"

myConcat(", ", "red", "orange", "blue"); // returns "red, orange, blue"
```

## 默认参数
```js
function f([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z;
}

f(); // 6
```

## get vs. defineProperty
使用 `get` 关键字时，属性将被定义在实例的原型上，当使用 `Object.defineProperty()` 时，属性将被定义在实例自身上。
```js
class Example {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(obj), 'hello'
  )
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## 立即执行函数
```js
// 立即执行函数的推荐写法
;(function () {
  // do something
})() 
```

## 方法
简写语法还支持计算的属性名称作为方法名
```js
var bar = {
  foo0: function() { return 0; },
  foo1() { return 1; },
  ['foo' + 2]() { return 2; }
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## setter&getter
### setter
 
```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
```


使用计算属性名
```js
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = "baz";      // run the setter
console.log(obj.baz); // "baz"
```

### getter
`get` 语法将对象属性绑定到查询该属性时将被调用的函数

#### 初始化定义对象
```js
const obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test".
```

#### defineProperty
要随时将 `getter` 添加到现有对象，使用 `Object.defineProperty()`

```js
var o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)
```
