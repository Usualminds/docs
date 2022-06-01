# 设计模式
## 原则 
- 单一职责链：一个函数干一件事
- 最少知识原则（迪米特法则）：减少对象之间的不必要关联，封装实现即可
- 开放封闭原则（类、函数、模块可以扩展，但不能修改）：用于扩展已有功能，不动之前的代码
- 接口和面向接口的编程
- 提炼函数
  
## 高阶函数
```js
let Type = {}

for(let i=0, type; type = ['String','Number','Array'][i++];){
    (function (type) {
        Type['is'+type]=function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' +type+']'
        }
    })(type)
}

Type.isArray([])
```
## 单例模式
页面模态框，全局唯一
```ts
const single = function(fn: Function){
    let res: unknown

    return function(this: any){
        return res || (res = fn.apply(this, arguments))
    }
}

const createLoginLayer = function(){
  let div = document.createElement( 'div' );
  div.innerHTML = '我是浮窗';
  div.style.display = 'none';
  document.body.appendChild( div );
  return div;
}; 

const createSingleLoginLayer = getSingle( createLoginLayer ); 

document.getElementById( 'loginBtn' ).onclick = function(){
  let loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
};
```

## 工厂模式
工厂模式是用来创建对象的一种最常用的设计模式，不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂
- 简单工厂模式（Simple Factory）
- 工厂方法模式（Factory Method）
- 抽象工厂模式（Abstract Factory）

### 场景
- 如果你不想让某个子系统与较大的那个对象之间形成强耦合，而是想运行时从许多子系统中进行挑选的话，那么工厂模式是一个理想的选择
- 将 new 操作简单封装，遇到 new 的时候就应该考虑是否用工厂模式；
- 需要依赖具体环境创建不同实例，这些实例都有相同的行为,这时候我们可以使用工厂模式，简化实现的过程，同时也可以减少每种对象所需的代码量，有利于消除对象间的耦合，提供更大的灵活性

```ts
// 工厂方法
function Factory(career){
    if(this instanceof Factory){
        let a = new this[career]();
        return a;
    }else{
        return new Factory(career);
    }
}
// 工厂方法函数的原型中设置所有对象的构造函数
Factory.prototype={
    'coder': function(){
        this.careerName = '程序员'
        this.work = ['写代码', '修Bug'] 
    },
    'hr': function(){
        this.careerName = 'HR'
        this.work = ['招聘', '员工信息管理']
    },
    'driver': function () {
        this.careerName = '司机'
        this.work = ['开车']
    },
    'boss': function(){
        this.careerName = '老板'
        this.work = ['喝茶', '开会', '审批文件']
    }
}
let coder = new Factory('coder')
console.log(coder)
let hr = new Factory('hr')
console.log(hr)
```
## 策略模式
将变与不变的区分开来，表单校验
- 策略模式利用组合，委托等技术和思想，有效的避免很多 if 条件语句
- 策略模式提供了开放-封闭原则，使代码更容易理解和扩展
- 策略模式中的代码可以复用

```ts
// 不变
let strategy = {
    isNotEmpty: function(value,errorMsg) {
        if(value === '') {
            return errorMsg;
        }
    },
    // 限制最小长度
    minLength: function(value,length,errorMsg) {
        if(value.length < length) {
            return errorMsg;
        }
    },
    // 手机号码格式
    mobileFormat: function(value,errorMsg) {
        if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    } 
};

// 变
```

## 代理模式
- 虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建,常见的就是图片预加载功能
- 缓存代理.缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一致
Proxy
```ts
let myImage = (function(){
    let imgNode = document.createElement( 'img' );
    document.body.appendChild( imgNode );

    return {
        //setSrc接口，外界调用这个接口，便可以给该img标签设置src属性
        setSrc: function( src ){
            imgNode.src = src;
        }
    }
})();
// 代理对象，负责图片预加载功能
let proxyImage = (function(){
    // 创建一个Image对象，用于加载需要设置的图片
    let img = new Image;
    img.onload = function(){
        // 监听到图片加载完成后，给被代理的图片本地对象设置src为加载完成后的图片
        myImage.setSrc( this.src );
    }
    return {
        setSrc: function( src ){
            // 设置图片时，在图片未被真正加载好时，以这张图作为loading，提示用户图片正在加载
            myImage.setSrc( 'https://img.zcool.cn/community/01deed576019060000018c1bd2352d.gif' );
            img.src = src;
        }
    }
})();

proxyImage.setSrc( 'https://xxx.jpg' );
```
## 观察者模式
- 在观察者模式中，观察者是知道 Subject 的，Subject 一直保持对观察者进行记录。然而，在发布订阅模式中，发布者和订阅者不知道对方的存在。它们只有通过消息代理进行通信。

- 在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。

- 观察者模式大多数时候是同步的，比如当事件触发，Subject 就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的（使用消息队列）

```ts
class Subject {

  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  removeObserver(observer) {
    const index = this.observerList.findIndex(o => o.name === observer.name);
    this.observerList.splice(index, 1);
  }

  notifyObservers(message) {
    const observers = this.observerList;
    observers.forEach(observer => observer.notified(message));
  }

}

class Observer {
  constructor(name, subject) {
    this.name = name;
    if (subject) {
      subject.addObserver(this);
    }
  }

  notified(message) {
    console.log(this.name, 'got message', message);
  }
}

const subject = new Subject();
const observerA = new Observer('observerA', subject);
const observerB = new Observer('observerB');
subject.addObserver(observerB);
subject.notifyObservers('Hello from subject');

subject.removeObserver(observerA);
subject.notifyObservers('Hello again');
```
## 迭代器模式

## 发布订阅模式

## 命令模式

## 组合模式

## 模版方法模式
模版步骤

## 享元模式
划分内外部状态，减少共享的对象数量

## 职责链模式

## 中介者模式

## 装饰器模式