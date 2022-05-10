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