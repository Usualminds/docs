# 类
类主要用于 `OOP` 编程范式，是用于创建对象的模板。他们用代码封装数据以处理该数据。JS 中的类建立在原型上，但也具有某些语法和语义未与 ES5 类相似语义共享

## 类的方法
`class` 体内部的代码总是在严格模式下执行
```js
class Rectangle {
  con
}
class Rectangle {
    // constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea()
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);

console.log(square.area);
// 100
```
## 构造方法
如果没有显式指定构造方法，则会添加默认的 `constructor` 方法。

### 基类的默认构造函数
```js
constructor() {}
```

### 派生类的默认构造函数
```js
constructor(...args) {
  super(...args);
}
```


## 静态方法
静态方法通常用于为一个应用程序创建工具函数，不能通过一个类实例调用静态方法
```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10,10);
p1.displayName;
// undefined
p1.distance;
// undefined

console.log(Point.displayName);
// "Point"
console.log(Point.distance(p1, p2));
// 7.0710678118654755
```
## 使用 super 调用超类
`super` 关键字用于调用对象的父对象上的函数
```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}
```

## Mix-ins / 混入
抽象子类或者 `mix-ins` 是类的模板。一个 `ECMAScript` 类只能有一个单超类，所以想要从工具类来多重继承的行为是不可能的。子类继承的只能是父类提供的功能性。因此，例如，从工具类的多重继承是不可能的。该功能必须由超类提供。

```js
let calculatorMixin = Base => class extends Base {
  calc() { 
    return 'calc'
  }
};

let randomizerMixin = Base => class extends Base {
  randomize() { 
    return 'randomize'
  }
};

class Foo { 
  constructor(name){
    this.name = name
  }

  foo(){
    return this.name
  }
}
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

let bar = new Bar('bar')

console.log(bar.foo())  // 'bar'
console.log(bar.randomize()) // 'randomize'
console.log(bar.calc()) // 'calc'
```

## 继承

```js
class Stack extends Array {
  constructor() {
    super();
  }

  top() {
    return this[this.length - 1];
  }
}

var stack = new Stack();
stack.push('world');
stack.push('hello');
console.log(stack.top());
console.log(stack.length);


class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear();
  }
}

```
