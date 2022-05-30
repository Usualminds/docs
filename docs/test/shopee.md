# Shopee

## instanceof
所有的引用类型（数组、对象、函数），`__proto__` 属性值指向它的构造函数的 `prototype` 属性值, `null` 没有 `__proto__` 属性，
```ts
// not new, throw error tip by instanceof
function Person(name){
    if(this instanceof Person) {
       this.name = name
    } else {
      throw Error('must use "new" method')
    }
   
}

let a = Person('hi')    // must use "new" method
let b = new Person('hi')

// implments your instanceof
function myInstanceof(left, right){
  left = left.__proto__
  let rp = right.prototype

  while(true){
    if(left === null) return false
    if(left === rp) return true

    left = left.__proto__
  }
}

```
