# 进阶

## 泛型 T

### 基本模式
```ts
function type<T>(args: T): T {
    return args
}

const str = type('name')
const bool = type(true)
```
### 形式参数
```ts
// 可选参数，必须在必选参数之后
function assgin<T, U = null>(target: T, source: U): T & U {
    return Object.assign(target, source)
}

// 
function assgin1<T = null, U = T>(target: T, source: U): T & U {
    return Object.assign(target, source)
}
```

#### 泛型约束
```ts
// 范型约束：T extends Points
function identity<T extends Points, U extends number = 0 | 1>(x: T, y: U): T {
    return x
}
function identity_i<T extends Points, U extends T>(x: T, y: U): T {
    return x
}
function identity_ii<T extends U, U>(x: T, y: U): T {
    return x
}

identity({ x: 0, y: 0 }, 0)
identity({ x: 0, y: 0, z: 0 }, 11)
```

#### 泛型函数
泛型函数的类型参数的本质是用来**关联多个不同的值类型的**
```ts
function f3<T, U>(a: T[], f: (x: T) => U): U[] {
    return a.map(f)
}

const aa: boolean[] = f3([0, 1, 2], n => !!n)
const bb: string[] = f3(['0', '1', '2'], n => n + '1')  

console.log(aa) //  [false, true, true]
console.log(bb) //  ["01", "11", "21"]
```

#### 泛型接口
以数组泛型接口为例
```ts

interface Array<T> {
    /**
     * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
     */
    length: number;
    /**
     * Returns a string representation of an array.
     */
    toString(): string;
    /**
     * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
     */
    toLocaleString(): string;
    /**
     * Removes the last element from an array and returns it.
     */
    pop(): T | undefined;
    /**
     * Appends new elements to an array, and returns the new length of the array.
     * @param items New elements of the Array.
     */
    push(...items: T[]): number;
    /**
     * Combines two or more arrays.
     * @param items Additional items to add to the end of array1.
     */
    concat(...items: ConcatArray<T>[]): T[];
    /**
     * Combines two or more arrays.
     * @param items Additional items to add to the end of array1.
     */
    concat(...items: (T | ConcatArray<T>)[]): T[];
    /**
     * Adds all the elements of an array separated by the specified separator string.
     * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
     */
    join(separator?: string): string;
    /**
     * Reverses the elements in an Array.
     */
    reverse(): T[];
    /**
     * Removes the first element from an array and returns it.
     */
    shift(): T | undefined;
    /**
     * Returns a section of an array.
     * @param start The beginning of the specified portion of the array.
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
     */
    slice(start?: number, end?: number): T[];
    /**
     * Sorts an array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(compareFn?: (a: T, b: T) => number): this;
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     */
    splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     */
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    /**
     * Inserts new elements at the start of an array.
     * @param items  Elements to insert at the start of the Array.
     */
    unshift(...items: T[]): number;
    /**
     * Returns the index of the first occurrence of a value in an array.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Returns the index of the last occurrence of a specified value in an array.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param callbackfn A function that accepts up to three arguments. The every method calls
     * the callbackfn function for each element in the array until the callbackfn returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param callbackfn A function that accepts up to three arguments. The some method calls
     * the callbackfn function for each element in the array until the callbackfn returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    [n: number]: T;
}
```

### 泛型类型别名
```ts
// 树形数据接口定义
type Tree<T> = {
    value: T;
    left: Tree<T> | null;
    right: Tree<T> | null;
}

const tree: Tree<number> = {
    value: 0,

    left: {
        value: 1,
        left: {
            value: 2,
            left: null,
            right: null,
        },
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
}
```
### 泛型类
```ts
class Container<T> {
    constructor(private readonly data: T) { }
} 

const ca = new Container(true)
const cb = new Container(123)
const cc = new Container([])
```

## 联合类型
取共同类型
```ts
// 原始类型
type Union = boolean | string[] | { x: number } | (() => void)

// 非原始型联合
interface UnionA {
    area: number;
    radius: number
}

interface UnionB {
    area: string;
    width: number;
    height: number;
}

type UnionC = UnionA | UnionB

declare const uc: UnionC

uc.area // number | string
```

## 交叉类型
类型合并，遵循乘法分配律，即`A & (B | C) = (A & B) | （A & C）`
```ts
// 原始型联合为 never
type InterPrima = number & boolean & null

// 非原始型联合
interface Click {
    register(x: number): void
}

interface Focus {
    register(x: string): boolean
}

type Inter = Click & Focus

declare const ic: Inter

ic.register('dd')


// 分配律
type aaaa = () => bigint | number
type bbbb = () => (bigint | number)

// aaaa 和 bbbb 表示同一个类型
```

## 索引类型
对对象而言，可以通过属性名称作为索引来访范围属性值，对 typescript 而言，可以通过属性名作为索引访问属性成员类型
- keyof
- T[K]

> 只有 `string | number | symbol` 才可以作为对象的键

### 索引类型查询
-  `keyof T`
```ts
// one
interface Focus {
    register(x: string): boolean
    age: number
}

type KeysType = keyof Focus //   "register" | "age"

// two
interface ST {
    [prop: string]: number
    [s]: boolean
}

type STKeys = keyof ST  // string | number | typeof s

// 原始值
type KeyofAny = keyof any   //  string | number | symbol

type keyofUnknown = keyof unknown   //  never

type keyofBoolean = keyof boolean   // 'valueOf'

// 联合类型：先联合，再取索引
interface UnionA {
    area: number;
    radius: number
}

interface UnionB {
    area: string;
    width: number;
    height: number;
}

type UnionC = UnionA | UnionB

type KeyofC = keyof UnionC  // "area"

//  交叉类型
type InterC = UnionA & UnionB
type KeyofIC = keyof InterC //  "area" | "radius" | "width" | "height"
```

### 索引访问类型
- `T[K]`
```ts
const sbl: unique symbol = Symbol()

enum E {
    A = 100
}

type TTT = {
    10: string,

    x: boolean,

    [E.A]: number,

    [s]: bigint
}

type TTT1 = TTT[10]     //  string
type TTT2 = TTT['x']    //  boolean
type TTT3 = TTT[E.A]    //  number
type TTT4 = TTT[typeof s]// bigint
```

### 索引类型应用
通过索引类型查询和索引类型访问，可以实现类型安全的对象属性访问操作
```ts
// 该工具函数可以准确返回对象属性类型
function gerProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
}

function f(circle: Circle) {
    const area = gerProperty(circle,'area') //  const area: () => number
    const radius = gerProperty(circle,'get')    //  const radius: number
}


```

## 映射对象类型
通过映射对象类型，可以将已有的对象类型映射为新的对象类型，处理较为复杂的类型结构，同时实现部分 `typescript` 语法糖

### 声明
`[P in K] : S`, 其中 `K` 必须是能够赋值给联合类型 `string | number | symbol`
```ts
// 键名称：[P in K] 值类型：S； readonly 和 ？ 均为可选
readonly [P in K]? : S

type K = 'a' | 'b'
type S = number

type MappedObjectType = { readonly [P in K]?: S }
// output:
// type MappedObjectType = {
//     readonly a?: number;
//     readonly b?: number;
// }

type MappedObjectType = { [P in 'x']: boolean }
// output: 
// type MappedObjectType = {
//     x: boolean;
// }

type MappedObjectType = { [P in typeof s]: boolean }
// output:
// type MappedObjectType = {
//     [s]: boolean;
// }
```

### 应用
通过 `keyof` 实现语法糖

- 可选
```ts
type Partial<T> = { [P in keyof T]?: T[P] }

type Readonly<T> = {readonly [P in keyof T]: T[P]}

// 修改类型对象的键
type MapType<T> = {
    [Key in keyof T 
        as`${Key & string}${Key & string}`
    ]: [
    T[Key], T[Key],
    ]
}
type DoubleKey = MapType<{'a': 1}>  
// {
//     aa: [1, 1];
// }

```

### 同态映射对象类型
同态映射对象类型和源对象类型有相同的属性集合。语法如下
- 同态映射会拷贝源对象的 `readonly` 和 可选属性`?`
- 非同态映射拷贝则会丢失
```ts
// 同态映射
{ readonly [P in keyof T]?: T[P] }

// 非同态映射
type KK = keyof T
type MOT = {
    [P in KK]: T[P]
}
```

改进拷贝修饰符， `{[P in K]: X}`, **`K`为类型参数且有泛型约束`K extends keyof T`**，那么编译器也会将修饰符进行拷贝映射，如下：
```ts
type Pick<T, K extends keyof T> = {
    [P in K] : T[P]
}
```

添加属性修饰符
```ts
// 添加
{ +readonly[P in keyof T]+?: T[P] }
// 减少
{ -readonly[P in keyof T]-?: T[P] }

type Required<T> = { readonly [P in keyof T]-?: T[P] }
```

## 条件类型
`T extends U ? X : Y`
```ts
type Typename<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object'

type TT0 = Typename<'Joe' | 1>


type Exclude<T, U> = T extends U ? never : T;

Exclude<string | undefined, undefined | null>   // string

type NonNullable<T> = T extends null | undefined ? never : T

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

## infer 
```ts
// 提取类型的第一个元素
type ArrayFirst<T extends unknown[]> = T extends [infer F, ...infer R] ? F : never

type MyArray = ArrayFirst<[1, 2, 3]>    // 3

// 提取类型的最后一个元素
type LastArray<T extends unknown[]> = T extends [...unknown[], infer Last] ? Last: never

type LastELe =  LastArray<[1,2,3]>  // 1

// 模拟 shift
type ShiftArr<Arr extends unknown[]> = 
    Arr extends [] ? [] 
        : Arr extends [unknown, ...infer Rest] ? Rest : never;

type ShiftEle = ShiftArr<[1,2,3]>  // [2,3]


// ReturnType
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// GetParameters
type GetParameters<Func extends Function> = 
    Func extends (...args: infer Args) => unknown ? Args : never;

// Get Constructor Param
type ConstructorParam<CT extends new (...args: any) => any> = CT extends new (...args: infer T) => any ? T: never

interface CT {
    new (name: string, age: unknown[]):string
}

type P = ConstructorParam<CT>
```

## 类型查询
```ts
const ss = { x: 0 }
function bbc(x: string, y: number): boolean {
    return true
}

type S0 = typeof ss
// output
// type S0 = {
//     x: number;
// }

type S1 = typeof ss.x
type S2 = typeof bbc
```

## 类型断言
- `<T> expr`
- `expr as T`
- `expr as const` or `<const> expr`
- `!`
```ts
function add(x: number, y: number) {
    return x + y
}

const nums = [1, 2] as const    // 数组长度为 2，不可变

const total = add(...nums)
```

## 类型断言
```ts
function assert(x: unknown): asserts x is T {}
function assert(x: unknown): asserts x {}

function assertIsNumber(x: unknown): asserts x is number {
    if (typeof x !== 'number') {
        throw new TypeError(`${x} should be a number`)
    }
}

function f1(x: any, y: unknown) {
    assertIsNumber(x)
    assertIsNumber(y)

    // do something
    console.log('x is number')
}

f1('123', '')
f1(123,12)
```
