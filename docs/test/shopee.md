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

// 寄生组合继承
function inherit(Child, Parent){
    let subPrototype = Object.create(Parent.prototype)

    subPrototype.constructor = Child

    Child.prototype = subPrototype
}

function Student(name, age){
    Person.call(this,name)
    this.age = age
}

inherit(Student, Person)

```

## sum(a)(b).count()

```ts
function sum(){
    let args = [...arguments]

    let add = function(){
        args.push(...arguments)
        return add
    }

    add.count = function(){
        return args.reduce((pre, cur) => pre + cur)
    }

    return add
}

console.log(sum(1)(2)(5).count())
// 8
```

## find path in obj
```ts
function flatObj(obj, key = '', res={}){
    for(let [k, value] of Object.entries(obj)){
        if(typeof value === 'object'){
            let temp = key+k+'.'
            flatObj(value, temp, res)
        } else {
            let temp = key + k
            res[temp]=value
        }
    }
    
    return res
}

function find(obj, str){
    let flat = flatObj(obj)
    
    for(let [k,v] of Object.entries(flat)){
        if(v === str){
            return k.split('.')
        }
    }
    
    return []
}

const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}
```

## 链表中倒数第 k 个节点
```ts
var getKthFromEnd = function(head, k) {
    let h = head, stack = []

    while(h){
        stack.unshift(h)
        h = h.next
    }

    return stack[k-1]
}
```
```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast = head, slow = head

    while(k>0){
        fast = fast.next
        k--
    }

    while(fast){
        fast = fast.next
        slow = slow.next
    }

    return slow
};
```