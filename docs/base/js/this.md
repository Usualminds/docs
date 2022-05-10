# this

## this 指向
- 预编译过程中,`this` 指向全局对象 `window`;
- 在严格模式下 `use strict`,为 `undefined`.
- 对象的方法里调用,`this` 指向调用该方法的对象.谁调用它就指向谁
- 构造函数里的 `this`,指向创建出来的实例

## 改变 this 指向

#### bind

- 语法 `function.bind(this,args,...)`

- 用法
```js
// 定义一个 personA 对象

let personA = { age : 100, getAge: function(){ return this.age; } }

// 定义一个 personB 对象 

let personB = { age : 10, getAge: function(){ return this.age; } }

// 调用 person 对象的方法

personA.getAge(); 

// 声明 personC 

let personC = personA.getAge;

// 绑定不同的对象 

let bindPersonA = personC.myBind(personA) 

let bindPersonB = personC.myBind(personB); 

console.log(bindPersonA()); // 100 

console.log(bindPersonB()); // 10
```

手动实现一个 bind​

```js
Function.prototype.myBind = function(){
    const args = Array.prototype.slice.call(arguments)
    const t = args.shift()

    let self = this

    return function(){
      return self.apply(t, args)
    }
}
```

#### call 

- 语法 `function.call(this,args,...)`

- 用法 使用 `call` 实现继承

```js
// 定义父

function Parent(age){
  this.age = age;
}

// 定义子
function Child(age,name){
    Parent.myCall(this,age);
    this.name = name
}

let child = new Child(12,'Lee')
console.log(child); // { age: 12, name: ‘Lee’ }
```

手动实现一个 call​

```js
Function.prototype.myCall = function(ctx, ...args){
  ctx = ctx ?? window

  let caller = Symbol('caller')
  ctx[caller] = this

  let res = ctx[caller](...args)
  delete ctx.caller

  return res
}
```
#### apply 

- 语法 `function.apply(this,args)`

- 用法 使用 `apply` 实现继承

```js
// 定义父

function Parent(age){
  this.age = age;
}

// 定义子
function Child(age,name){
    Parent.myApply(this,age);
    this.name = name
}

let child = new Child(12,'Joe')
console.log(child); // { age: 12, name: ‘Lee’ }

const numbers = new Array(10000).fill().map((_,index) => index +1);

// Math 工具函数

let max = Math.max.apply(null, numbers); // 10000

let min = Math.min.apply(null, numbers); // 1

let maxMy = Math.max.myApply(null, numbers); // 10000

let minMy = Math.min.myApply(null, numbers); // 1
```

手动实现一个 apply

```js
// 和 call 区别只是入参不一样
Function.prototype.myApply = function(ctx, args){
  // ctx or window
  ctx = ctx ?? window
 
  let caller = Symbol('caller')
  ctx[caller] = this

  let res = ctx[caller](...args)
  delete ctx.caller

  return res
}
```