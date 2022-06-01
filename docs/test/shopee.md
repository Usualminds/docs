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

## cache 
缓存函数
```ts
function cache(func, ctx){
    let temp = Object.create(null)
    ctx = ctx || this
    
    return (...key) => {
        if(!temp[key]){
            temp[key] = func.apply(ctx, key)
        } 
        
        return temp[key]
    }
}

const add = (a,b) => a+b;

const sum = cache(add)
const num1 = sum(1,5)
const num2 = sum(12,5)
```

## string2number
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/89)
```ts
const _parseInt = (str, radix) => {
  // 不为string类型先转化为string 类型
  if (typeof str !== 'string') str = String(str)

  // 删除首尾空白
  str = str.trim()

  // 正则匹配[+|-]?[0]?[Xx]?[0-9a-fA-F]+
  const regex = /^(?<fuhao>[\+|\-]*)(?<radix>[0]?[Xx]?)(?<num>[0-9a-fA-F]+)/

  // 无法匹配返回NaN
  if (!regex.test(str)) return NaN

  // 匹配出符号、进制、数字三个分组
  const groups = str.match(regex).groups

  // radix的有效范围为 2-36
  if (radix && (radix < 2 || radix > 36)) return NaN

  // 如果没有指定radix, radix 会有以下默认值
  if (!radix) {
    if (groups.radix.toUpperCase() === '0X') radix = 16
    else if (groups.radix === '0') radix = 8
    else radix = 10
  }

  // 挨个字符串解析，如果遇到无法解析时则停止解析，返回已经解析好的整数
  let splitArr = groups.num.split('')
  const arr = []
  for(let i = 0; i < splitArr.length; i++) {
    // 根据charCode来做转行为实际数据, 0-9为[48-57],A-F为[65-70]
    const charCode = splitArr[i].toUpperCase().charCodeAt()
    let num 

    // 字符为[A-F]时, 实际数字为charCode -55
    if(charCode >= 65) num = charCode - 55

    // 字符为[0-9]时, 实际数字为charCode - 48
    else num = charCode - 48

    // 当实际数字大于radix时, 无法解析则停止字符串遍历
    if (num > radix) {
      break
    } else {
      arr.push(num)
    }
  }

  const len = arr.length
  // 当实际数字数组长度为0时, 返回NaN
  if(!len) return NaN
  let result = 0

  // 依次解析实际数字数组, 组合成真正的数字
  for(let i = 0; i < len; i++) {
    const num = arr[i] * Math.pow(radix, len - i - 1)
    result += num
  }

  // 算法匹配到的正负号
  return result * (groups.fuhao === '-' ? -1 : 1)
}
```