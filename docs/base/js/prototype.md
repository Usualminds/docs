# 原型和原型链

## 原型
原型是 `function` 对象的一个属性，它定义了构造函数制造出来的对象的公有祖先，通过该构造函数产生的对象，可以继承该原型的属性和方法，原型其实就是一个对象。`person` 查找变量，首先找自己身上的，没有就通过 **`__proto__`** 去查找祖先的属性。需要注意的是在 `new` 操作时候，**其实就是在构造函数内部定义了一个 `this`**，然后 `this` 下面有很多属性，其中有一个 `__proto__` 隐式原型属性，它的值就是指向 `Person` 的原型，也就是 **Person.prototype** 。这也是 `person` 怎么查找祖先的根本。

```js
function Person(){}

let person = new Person()

Person.prototype.name = 'name'

console.log(person.name) // 'name'

// 理解 __proto__
let obj = {
  name: 'proto_name'
}

person.__proto__ = obj

console.log(person.name) // 'proto_name'

```

因此，如下操作可以视为等价

```js
let person = new Person()

// 等价于
function Person(){
  let this = {
    __proto__: Person.prototype
  }
}
```

## 原型链
每个显式原型下也有一个隐式原型，指向规则和上面一样。在每一层首先寻找自身的属性或方法,如果没有通过隐式原型去找上一层的显示原型的方法,依次形成一个链


原型链的最高层 `Object` 的显式原型拥有 `toString` 和`hasOwnProperty` 方法和自身隐式原型指向 `null`

```js
// 最高层
Object.prototype.__proto__ === null   // true

// person 原型链
let person = new Person()
person.__proto__ === Person.prototype   // true
person.__proto__.__proto__ === Object.prototype // true
person.__proto__.__proto__.__proto__ === null // true

Person.__proto__ === Function.prototype // true
Person.__proto__.__proto__ === Object.prototype // true

// 内置的构造函数也都算是Function的实例
Array.__proto__ === Function.prototype // true
Date.__proto__ === Function.prototype // true
Function.__proto__ === Function.prototype // true
Object.__proto__ === Function.prototype // true

// 构造函数
Person.prototype.constructor === Person // true
person.constructor === Person // true
```

## new 过程
- 创建一个空的简单 JavaScript 对象（即{}）；
- 为步骤 1 新创建的对象添加属性 __proto__，将该属性链接至构造函数的原型对象 ；
- 将步骤 1 新创建的对象作为 this 的上下文 ；
- 如果该函数没有返回对象，则返回 this。
  
代码实现如下

```js
function New(constructor, ...args){
  // let obj = {} // obj = new Object(), obj = Object.create(null)
  // Object.create https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
  let obj = Object.create(constructor.prototype)
  
  // obj.__proto__ = constructor.prototype

  // set obj as the context of `this` when the constructor runs
  // apply for array: New(Employee, ['joe','New'])
  // call for single: New(Employee, 'joe','New')

  let results = constructor.apply(obj, args)

  return results instanceof Object ? results : obj
}

// ================ test case =================== 
function Employee(args) {
  this.name = args[0];
  this.title = args[1];
  console.log('constructor, this = ', this);
}

let p = New(Employee, ['joe','New'])

p.constructor === Employee          // true
p.__proto__ === Employee.prototype  // true
// output
// {
//     "name": "joe",
//     "title": "New"
// }
```

## Object.create

```js
function create(proto){

  if (typeof proto !== 'object' && typeof proto !== 'function') {
            throw new TypeError('Object prototype may only be an Object: ' + proto);
        } else if (proto === null) {
            throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
        }

  function F(){}
  F.prototype = proto

  return obj
}
```

## 继承

#### 原型链继承
继承方式虽然简单，但是会继承很多多余的属性

```js
function Parent(){}
Parent.prototype.name = 'parent'

function Child(){}

Child.prototype = new Parent()

let child = new Child()
child.name // 'parent'
```

#### 构造函数继承
调用父级构造函数逇方式其实和上面那个一样，虽然写法好看了，但是无法借用构造函数的原型

```js
function Parent(name = 'parent'){
  this.name = name
}
Parent.prototype.name = 'parent'

function Child(name){
  Parent.call(this, name)
}

let child = new Child()
child.name // 'parent'
```

#### 公有原型继承
无法新增自己的原型属性，会互相影响

```js
Father.prototype.lastName = "李雷"
function Father(){
}
function Son(){}
// 两个构造函数继承同一个原型
Son.prototype = Father.prototype
var son = new Son()
var father = new Father()
Son.prototype.name = "lihua" //这样会导致Father.prototype = "lihua"
```

#### 圣杯模式继承
使用了一个中间函数做过渡，弥补前两种方式的缺点，解决了公有原型无法增加私有原型属性的缺点

```js
function extend(target, origin){
  function F(){}

  F.prototype = origin.prototype

  target.prototype = new F()

  target.prototype.constructor = target
}
```

#### 寄生组合继承
只调用一次父类的构造函数,避免了在子类原型上创建不必要的，多余的属性
原型链保持不变

```js
function inheritPrototype(Child,Parent) {
  // Object.create 可以将subPrototype的原型(__proto__) 设置成 Parent 的原型对象(prototype);
  let subPrototype = Object.create(Parent.prototype)

  // 因为 Object.prototype.constructor 会返回对象本身,所以这里设置为 Child 本身;
  subPrototype.constructor = Child

  // 这里将 Child 的原型对象(prototype)设置成subPrototype,实现 Child 对 Parent 基于原型链的继承;
  Child.prototype = subPrototype
}
```