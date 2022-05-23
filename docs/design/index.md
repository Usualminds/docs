# 设计模式

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

## 策略模式
将变与不变的区分开来

## 代理模式
Proxy

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