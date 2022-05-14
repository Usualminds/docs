# 其它

## 拷贝
- 深拷贝：完全拷贝，互不影响，JSON.stringfy(obj)
- 浅拷贝：拷贝的是引用地址，`for in`, `Object.assing({},obj)`,`{...obj}`

实现一个深拷贝

#### 基本版本
```js
function myDeepclone(target = {}){
  if(target === null || typeof target !== 'object'){
    return target
  }

  let res = target instanceof Array ? [] : {}

  for(let key in target){
    if(target.hasOwnProperty(key)){
      res[key] = myDeepclone(target[key])
    }
  }

  return res
}

// test case
let obj = {
  age: 1,

  getAge: function(){
    return this.age
  },

  pros: {
    num: {
      max:1
    }
  }
}

let arr = [1, 'name', function name(){}, {age: 1}]

myDeepclone(obj)
myDeepclone(arr)
```
#### 进阶版本

```js
function cloneDeep(obj, map = new WeakMap()) {
  if (!(obj instanceof Object)) return obj; // 基本数据
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  
  if (map.get(obj)) return map.get(obj); // 解决循环引用
  
  if (obj instanceof Function) { // 解决函数
    return function () {
      return obj.apply(this, [...arguments]);
    };
  }
  
  const res = new obj.constructor(); // 下面是数组/普通对象/Set/Map 的处理
  
  obj instanceof Object && map.set(obj, res);
  if (obj instanceof Map) {
    obj.forEach((item, index) => {
      res.set(cloneDeep(index, map), cloneDeep(item, map));
    });
  }
  if (obj instanceof Set) {
    obj.forEach((item) => {
      res.add(cloneDeep(item, map));
    });
  }
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = cloneDeep(obj[key], map);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
}

// test case
const map = new Map();
map.set({ a: 1 }, "1");
const source = {
  name: "Jack",
  meta: {
    age: 12,
    birth: new Date("1997-10-10"),
    ary: [1, 2, { a: 1 }],
    say() {
      console.log("Hello");
    },
    map
  },
};
source.source = source;
const newObj = cloneDeep(source);
console.log(newObj.meta.ary[2] === source.meta.ary[2]); // false
console.log(newObj.meta.birth === source.meta.birth); // false
console.log(newObj);

```

::: 注意
`JSON.stringfy(obj)` 的不足
- obj 里有 date 对象无法被序列化和反序列化，而是转为 date 字符串
- obj 里有 RegExp 对象,Error 对象序列化结果是空对象
- obj 里有 function,undefined 会被丢失
- obj 里有 NaN,Infinity,-Infinity 序列化结果会变成 null

## promise

实现一个 delay 函数

```js
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function test() {
  console.log('start timer');
  await delay(1000);
  console.log('after 1 second');
}

test();
```

## 函数

箭头函数的难点
- 函数体内的 this 是定义时所在的对象决定的
- 不可当作构造函数，因此箭头函数不可使用 new 命令
- 不可使用 yield 命令，因此箭头函数不能用作 Generator 函数
- 不可使用 Arguments 对象，此对象在函数体内不存在(可以使用...args)
- 返回对象时必须在对象外面加上括号

```js
去重字符串：[...new Set(str)].join("")
去重数组：[...new Set(arr)]或Array.from(new Set(arr))
集合数组
  声明：const a = new Set(arr1)、const b = new Set(arr2)
  并集：new Set([...a, ...b])
  交集：new Set([...a].filter(v => b.has(v)))
  差集：new Set([...a].filter(v => !b.has(v)))
```

## 数组降维
```js
function flat(arr){
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  },[])
}

// test case 
let arr = [1,2,[1,2,3,[1,2,3,4,45]]]
flat(arr) //  [1, 2, 1, 2, 3, 1, 2, 3, 4, 45]
```

## 定时器场景

写一个 `mySetInterVal(fn, a, b)`,每次间隔 `a,a+b,a+2b` 的时间，然后写一个 `myClear`，停止上面的 `mySetInterVal`

```js
function mySetInterVal(fn,a,b){
  this.a = a
  this.b = b
  this.time = 0
  this.handle = -1

  this.start = () => {
    this.handle = setTimeout(() => {
      fn()
      this.time++
      this.start()
      console.log( this.a + this.time * this.b);
    }, this.a + this.b * this.time)
  }

  this.stop = () => {
    clearTimeout(this.handle)
    this.time = 0
  }
} 

// test case 
let a = new mySetInterVal(() => {console.log('123')},1000, 2000 );
a.start();
a.stop();
```
## 数组转为树
```js
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];

function convert(list){
  let map = list.reduce((pre, cur) => {
    pre[cur.id] = cur

    return pre
  },[])

  let results = []
  for(let key in map){
    let ele = map[key]

    if(ele.parentId === 0) {
      results.push(ele)
    } else {
      let parent = map[ele.parentId]
      if(parent) {
        parent.children = parent.children ?? []
        parent.children.push(ele)
      }
    }
  }

  return results
}

console.log(convert(list))
```

## 输出一个随机的 16 进制颜色
```js
let color = '#'+ Math.random().toString(16).substr(-6); 
document.body.style.backgroundColor = color;
```

## trim

```js
Function.prototype.trim = function(){
  return this.replace(/^\s+/,'').replace(/\s+$/,'')
}
```

## 随机
```js
let a = []
for(let i=0;i<100;i++){
  a[i] = i+1
}

a.sort(()=>0.5-Math.random())

console.log(a)
```

## 字符串排序
```js
let s = "kadfjkajfkhgofqnmvc";

console.log(Array.from(s).sort().join(""))
```

## 随机字符串
```js
function randomString(length) {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) 
    result += str[Math.floor(Math.random() * str.length)];
  return result;
}
```

## 在页面插入 10000 个元素，如何进行优化
```js
let container = document.getElementById('container')
let fragment = document.createDocumentFragment()
	for(let i = 0; i < 10000; i++){
		let li = document.createElement('li')
    li.innerHTML = 'hello world'

    // 所有构造的节点加入文档片段
	  fragment.appendChild(li)
  }

  // 节点构造完成，将文档对象添加到页面中
	container.appendChild(fragment);
```

## Object.is 和 === 的区别

Object 在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是 +0 和 -0，NaN 和 NaN。

```js
function is(x, y) {
  if (x === y) {
    //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
    //两个都是NaN的时候返回true
    return x !== x && y !== y;
  }
  ```