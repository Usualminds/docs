# 原则 
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
