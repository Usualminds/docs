# 基础
## 基础类型

### symbol
```ts
// custom symbol
let age: symbol = Symbol('age')
let ageFor: symbol = Symbol.for('age')

// well-known symbol, 用于接口和类中的可计算属性名
// 三种声明方式
const age: unique symbol = Symbol()

interfere WithUniqueSymbol {
    readonly age: unique symbol
}

class C {
    static readonly age: unique symbol = Symbol()
}
```

### Nullable
包含 `undefined` 和 `null`， `--strictNullChecks` 为 false 时， 允许将 undefined 和 null 值赋给 string 类型等其它类型
```ts
let a:string = undefined
```

### void
用于函数返回值不存在场景，没有返回值也是 `void` 类型
```ts
// strictNullChecks: true
function test(): void {
    return undefined
}
```

### enum
- 数值型枚举
- 字符串枚举
- 异构枚举
  
- 数值型枚举
```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// set init value
enum Direction {
    Up = 1,
    Down, // 2
    Left = 10,
    Right // 11
}

// 合法
const d:Direction = 15
```

- 字符串枚举
```ts
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

const d:Direction = 'UP'
```

- 异构枚举
异构枚举中，必须为字符枚举类型前的数值枚举成员指定一个初始值
```ts
enum Color {
    White,
    Black = 'Black'
}

// 非法
enum Color {
    Black = 'Black',
    White
}
```
- `const` 枚举
简化编译，取消枚举反向映射
```ts
const enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

### any & unknown 
`any` 为顶端类型，是其它类型的父类型，可以跳过类型检查，`--noImplicitAny`, 开启，则进行隐式 `any` 转换,
任何类型都可以赋值给 `any`, 同理， `any` 也可以赋值给任何类型， 除了 `never`

`unknown` 为顶端类型，任何类型都可以赋值给 `any`,但 `unknown` 只能赋值为 `unknown` or `any`，可以理解为类型安全的 `any` 类型
```ts
let x: unknown

// correct
const a1: any = x
const a2: unknown = x

// uncorrect
const a3: boolean = x
const a4: number = x

// good practise
function test(message: unknown): number | null {
    if(typeof message === 'string') {
        return message.length
    }

    return null
}
```

### never
尾端类型，是所有其它类型的子类型。主要应用场景：
- 作为函数返回值
```ts
// 异常返回值
function throwError(): never {
    throw new Error()
}

// 无限循环
function loop(): never {
    while(true) {
        // 
    }
}
```
- 类型运算
```ts
type Exclude<T, U> = T extends U ? never : T

type T = Exclude<boolean | string, string>
```

## 数组
数组只读

```ts
// ReadonlyArray
const red: ReadonlyArray<number> = [1, 2, 3]

// readonly
const blue: readonly number[] = [1, 2, 3]

// Readonly<T>
const gray: Readonly<Array<number>> = [1,2,3]
const gray1: Readonly<number[]> = [1, 2, 3]

type Readonly_My<T> = {
    readonly [P in keyof T] : T[P]
}
```

## 元组
```ts
// readonly
const point: readonly [number, string] = [1, '1']

// Readonly<T>
const count: Readonly<[number, string]> = [1,'1']

// optional
const option: [number, string, boolean?] = [1, '1']
const option_: [number, string, boolean?] = [1, '1', true]
const options: [number, ...string[]] = [1, '1', '1', '2', '3']
options.length
```

## 对象

### Object 
`Object` 集成了很多基础的方法和属性，除了 null 和 undefined 以外，其它基础类型都可以赋值给它
```ts
interface Object {
    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
    constructor: Function;

    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns a date converted to a string using the current locale. */
    toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
     * Determines whether an object has a property with the specified name.
     * @param v A property name.
     */
    hasOwnProperty(v: PropertyKey): boolean;

    /**
     * Determines whether an object exists in another object's prototype chain.
     * @param v Another object whose prototype chain is to be checked.
     */
    isPrototypeOf(v: Object): boolean;

    /**
     * Determines whether a specified property is enumerable.
     * @param v A property name.
     */
    propertyIsEnumerable(v: PropertyKey): boolean;
}
```
### object
不允许读写和修改 object 的属性

```ts
const obj: object = {
    age: 0,
    name: 'Joe'
}

// error: 类型“object”上不存在属性“name”
obj.name
```
描述 `ObjectConstructor`,即 `Object.create()` 方法
```ts
interface ObjectConstructor {
    new(value?: any): Object;
    (): any;
    (value: any): any;

    /** A reference to the prototype for a class of objects. */
    readonly prototype: Object;

    /**
     * Returns the prototype of an object.
     * @param o The object that references the prototype.
     */
    getPrototypeOf(o: any): any;

    /**
     * Gets the own property descriptor of the specified object.
     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
     * @param o Object that contains the property.
     * @param p Name of the property.
     */
    getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;

    /**
     * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
     * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
     * @param o Object that contains the own properties.
     */
    getOwnPropertyNames(o: any): string[];

    /**
     * Creates an object that has the specified prototype or that has null prototype.
     * @param o Object to use as a prototype. May be null.
     */
    create(o: object | null): any;

    /**
     * Creates an object that has the specified prototype, and that optionally contains specified properties.
     * @param o Object to use as a prototype. May be null
     * @param properties JavaScript object that contains one or more property descriptors.
     */
    create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param p The property name.
     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
     */
    defineProperty(o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): any;

    /**
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.
     * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
     * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     */
    defineProperties(o: any, properties: PropertyDescriptorMap & ThisType<any>): any;

    /**
     * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
     * @param o Object on which to lock the attributes.
     */
    seal<T>(o: T): T;

    /**
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
     * @param o Object on which to lock the attributes.
     */
    freeze<T>(a: T[]): readonly T[];

    /**
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
     * @param o Object on which to lock the attributes.
     */
    freeze<T extends Function>(f: T): T;

    /**
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
     * @param o Object on which to lock the attributes.
     */
    freeze<T>(o: T): Readonly<T>;

    /**
     * Prevents the addition of new properties to an object.
     * @param o Object to make non-extensible.
     */
    preventExtensions<T>(o: T): T;

    /**
     * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
     * @param o Object to test.
     */
    isSealed(o: any): boolean;

    /**
     * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
     * @param o Object to test.
     */
    isFrozen(o: any): boolean;

    /**
     * Returns a value that indicates whether new properties can be added to an object.
     * @param o Object to test.
     */
    isExtensible(o: any): boolean;

    /**
     * Returns the names of the enumerable string properties and methods of an object.
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */
    keys(o: object): string[];
}
```

### 对象字面量 {}

```ts
// 语法
{
    PropertyName: Type
}

// 示例
let o: {x: number, y:string} = {x:1,  y: '0'}
```
- 属性签名
```ts
// 可计算属性
const a: 'a' = 'a'

let objA : {
    [a]: boolean
}

const s: unique symbol = Symbol()
let objs: {
    [s]: boolean
}

let objss: {
    [Symbol.iterator]: string
}
```

## 函数
两种表达方式

```ts
// 字面量
const abs: (x: number) => number = Math.abs

// 对象类型
const abs_:  {(x: number) : number} = Math.abs

// let fn: (x: number, y: string) => string

// function fn_ (x: number, y: string): string {  return '' }

```

### 构造函数类型字面量
```ts
let error = new Error('Error message')

// 构造函数
interface ErrorConstructor {
    new(message?: string): Error;
    (message?: string): Error;
    readonly prototype: Error;
}
```

### 构造签名
```ts
let Dog: {
    new (name: string) : object
}

Dog = class {
    private name: string;

    constructor(name: string) {
        this.name = name
    }
}
```
### 调用签名和构造函数
```ts
declare const F: {
    new(x: number): Number; // 构造签名
    (x: number): number     // 调用签名
}

const a: number = F(1)
const b: Number = new F(1)
```

### 函数重载
重载解析顺序，与匹配参数高度一致
```ts
function add(x: number, y: number): number;
function add(x: number[], y: number[]): number[];
function add(x: number | number[], y: number | number[]): number | number[] {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y
    }

    if (Array.isArray(x) && Array.isArray(y)) {
        return [...x, ...y]
    }
}
```

### this
`--noImplictThihs`
```ts
function fn1() {
    this.a = true
    this.b++
    this.c = () => {}
}

function foo(this: { name: string }) {
    // OK
    this.name = 'Joe'
    
    // error: 不能将类型“1”分配给类型“string”
    this.name = 1
}
```

## 接口
接口可以集成接口、对象类型的类型别名、类、对象类型的类型别名
```ts
interface A {
    name: string;
    age?: number;
    readonly sex: string;

    // (msg: object): Error;   // 调用签名

    // new(msg: string): Error; // 构造签名

    getId(id: string): number; // 方法签名
    getId1: { (id: string): number };   // 属性签名和对象字面量签名
    getId2: (id: string) => number;     // 属性签名和函数类型字面量签名


    // [prop: string]: number;
    readonly [prop: number]: number      // 数值索引签名
}

interface B extends A {
    status: boolean
}

let bb: B = {
    name: 'ok',
    status: true,
    sex: 'male',

    getId: (name) => { return 1 },
    getId1: (name) => { return 1 },
    getId2: (name) => { return 1 },
}
```

## 类型别名
接口声明能够为对象类型命名，类型别名声明能为 typescript 任何类型命名。

类型和接口的几个区别：
- 类型别名表示非对象类型（特别是联合类型），接口表示对象类型
- 接口可以继承其它接口或者类，类型别名不可以
- 接口名会显示在编译器和代码提示中不同,接口提示更加具体友好
- 接口可以合并声明，类型别名不可以
```ts
type StringType = string
type BooleanType = true | false
type Point = { x: number; y: number; z?: number }
type Numeric = number | bigint


type T0 = { name: T0 }
type T1 = () => T1
type T2 = new () => T2

type T3 = T3[]
type T4 = Array<T4>
type T5 = [number, T5]

interface C<T> {
    name: T;
}

type T6 = C<T6>
class D<T>{
    name: T | undefined
}
type T7 = D<T7>

type Json =
    | string
    | number
    | boolean
    | null
    | { [property: string]: Json }
    | Json[]
const data: Json = {
    name: 'Joe',
    version: { main: 3 }
}

function test(value: Numeric) {
    const bar: boolean = value
}

// 声明合并行为，相同接口合并声明
interface CCC {
    name: string
}
interface CCC {
    age: number
}
let user: CCC = {
    name: 'Joe',
    age: 6
}
```

## 类
类本质上还是函数，是一种语法糖。类的构造函数也可以重载

### 初始化
- 声明初始化
- 构造函数初始化
```ts
class Circle {
    radius: number;

    // 声明初始化
    readonly length: number = 10;

    private _distance: number = 0;

    #last_distance: number // 私有属性

    constructor() {
        // 构造函数初始化
        this.radius = 0
        this.#last_distance = 10
    }

    area(): number {
        return Math.PI * this.radius * this.radius
    }

    // get & set 的方法属性必须相同，均为 public or private
    get() {
        return this._distance
    }

    set(value: number) {
        if (value < 0) return
        this._distance = value
    }

    [prop: number]: string
}

const circle = new Circle()
circle.radius

circle.radius = -10
circle.radius   // 0

circle.radius = 100
circle.radius   // 100

circle.area()
circle.get()
```

### 继承
类单继承，一个类可以继承一个基类,但可以实行多个接口,同理，接口可以继承多个接口
```ts
class Animal {
    heigth: number;
    name: string

    constructor() {
        this.heigth = 100
    }

    switchName() {
        this.heigth = this.heigth > 100 ? 60 : 200
        this.name = this.heigth > 100 ? 'High' : 'Low'
    }
}

class Cat extends Animal {
    // 静态成员
    static version: string = '1.0'

    // 构造函数继承
    constructor() {
        super()
    }
    switchName() {
        super.switchName()
        console.log(`this name is: ${this.name}`)
    }
}

let cat = new Cat()

cat.switchName()    // 'High'
cat.switchName()    // 'Low'
Cat.version
// 实现

interface EE {
    name: string;
    seq: number
}
interface FF {
    time: Date
}

// 接口多个继承
interface GG extends EE, FF {

}

// 类多个实现
class HH implements EE, FF {
    name = 'Joe'
    seq = 1
    time = new Date()
}
```

### 实例化
实例化顺序
- 初始化基类属性
- 调用基类构造函数
- 初始化派生类属性
- 调用派生类构造函数

### 抽象类
抽象类不可以被实例化，即不能通过 new 来创建实例，且抽象类中不能包含具体实现，抽象类适合作为基类
```ts
abstract class Base {
    name: string

    // 抽象成员只能声明
    abstract getAbsName(): string

    // 非抽象成员可以实现代码
    getName(): string {
        return ''
    }
}
```

### this
```ts

class Counter {
    private count: number = 0

    public add(): this {
        this.count++
        return this
    }

    public min(): this {
        this.count--
        return this
    }

    public getSum(): number {
        return this.count
    }
}

let counter = new Counter()
counter.add().add().min().add().getSum()
```

