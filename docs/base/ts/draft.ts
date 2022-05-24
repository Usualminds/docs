import { SiteData } from "vuepress"

enum Direction {
    Up = 1,
    Down,
    Left = 10,
    Right
}
let dr = Direction.Right

// ReadonlyArray
const red: ReadonlyArray<number> = [1, 2, 3]

// readonly
const blue: readonly number[] = [1, 2, 3]

// Readonly<T>
const gray: Readonly<Array<number>> = [1, 2, 3]
const gray1: Readonly<number[]> = [1, 2, 3]

type Readonly_My<T> = {
    readonly [P in keyof T]: T[P]
}

// readonly
const point: readonly [number, string] = [1, '1']

// Readonly<T>
const count: Readonly<[number, string]> = [1, '1']

// optional
const option: [number, string, boolean?] = [1, '1']
const option_: [number, string, boolean?] = [1, '1', true]
const options: [number, ...string[]] = [1, '1', '1', '2', '3']
options.length

interface User {
    age: number,
    name: string
}
const obj1: Object = Object.create(null)
const obj: object = {
    age: 0,
    name: 'Joe'
}

const s: unique symbol = Symbol()
let objs: {
    [s]: boolean
}

let objss: {
    [Symbol.iterator]: string
}

let o: { x: number, y: string } = { x: 1, y: '0' }

let fn: (x: number, y: string) => string

function fn_(x: number, y: string): string { return '' }

// 字面量
const abs: (x: number) => number = Math.abs

// 对象类型
const abs_: { (x: number): number } = Math.abs

let error = new Error('Error message')

let ErrorConstructor: new (message?: string) => Error

declare const F: {
    new(x: number): Number; // 构造签名
    (x: number): number     // 调用签名
}

const a: number = F(1)
const b: Number = new F(1)

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

function fn1() {
    this.a = true
    this.b++
    this.c = () => { }
}

function foo(this: { name: string }) {
    // OK
    this.name = 'Joe'

    // error: 不能将类型“1”分配给类型“string”
    // this.name = 1
}

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
    other: BooleanType
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

class Circle {
    radius: number;

    readonly length: number = 10;

    private _distance: number = 0;

    #last_distance: number // 私有属性

    constructor() {
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

class Singleton {
    private static instance?: Singleton

    private constructor() {

    }

    static getInstance() {
        if (!Singleton.instance) {
            this.instance = new Singleton()
        }

        return Singleton.instance
    }
}

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
    static version: string = '1.0'
    // 构造函数继承
    constructor() {
        super()
    }
    // switchName() {
    //     // super.switchName()
    //     console.log(`this name is: ${this.name}`)
    // }
}

let cat = new Cat()

cat.switchName()    // 'High'
cat.switchName()    // 'Low'

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

Cat.version


abstract class Base {
    name: string

    // 抽象成员只能声明
    abstract getAbsName(): string

    // 非抽象成员可以实现代码
    getName(): string {
        return ''
    }
}

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

function type<T>(args: T): T {
    return args
}

const str = type('name')
const bool = type(true)

// 可选参数，必须在必选参数之后
function assgin<T, U = null>(target: T, source: U): T & U {
    return Object.assign(target, source)
}
function assgin1<T = null, U = T>(target: T, source: U): T & U {
    return Object.assign(target, source)
}

interface Points {
    x: number;
    y: number
}

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

function f3<T, U>(a: T[], f: (x: T) => U): U[] {
    return a.map(f)
}

const aa: boolean[] = f3([0, 1, 2], n => !!n)

type Nullable<T> = T | undefined | null

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

class Container<T> {
    constructor(private readonly data: T) { }
}

const ca = new Container(true)
const cb = new Container(123)
const cc = new Container([])

type Union = boolean | string[] | { x: number } | (() => void)

// 非对象联合类型
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
type InterC = UnionA & UnionB

type KeyofC = keyof UnionC
type KeyofIC = keyof InterC

declare const uc: UnionC

uc.area // number | string

interface Click {
    register(x: number): void
    name: string;
}

interface Focus {
    register(x: string): boolean
    age: number
}

type Inter = Click & Focus

declare const ic: Inter

ic.register('dd')

type InterPrima = number & boolean & null

type aaaa = () => bigint | number
type bbbb = () => (bigint | number)

type KeysType = keyof Focus

interface ST {
    [prop: string]: number
    [s]: boolean
}

type STKeys = keyof ST

type KeyofAny = keyof any

type keyofUnknown = keyof unknown

type keyofBoolean = keyof boolean

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

function gerProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

function f(circle: Circle) {
    const area = gerProperty(circle, 'area')
    const radius = gerProperty(circle, 'radius')
}

type K = 'a' | 'b'
type S = number
type T = {
    readonly a: string,
    b?: number
}
// type Partial<T> = { [P in keyof T]?: T[P] }

type Readonly<T> = { readonly [P in keyof T]: T[P] }

type KK = keyof T
type MOT = {
    [P in KK]: T[P]
}

type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// { +readonly[P in keyof T]?+: T[P] }


type DDD = Partial<Circle>

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

type TT0 = Record<'Joe', number>

type Exclude<T, U> = T extends U ? never : T;
Exclude < string | undefined, undefined | null > = string

type NonNullable<T> = T extends null | undefined ? never : T

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

const ss = { x: 0 }
function bbc(x: string, y: number): boolean {
    return true
}

type S0 = typeof ss
type S1 = typeof ss.x
type S2 = typeof bbc

let a1 = [0, 1, 2]
let a2 = [0, 1, 2] as const

function add(x: number, y: number) {
    return x + y
}

const nums = [1, 2] as const

const total = add(...nums)

function assert(x: unknown): asserts x is T { }
// function assert(x: unknown): asserts x { }
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
f1(123, 12)

const temp: string = (1 as unknown) as string

class Animals { }
class Dog extends Animals { }
class Sheep extends Animals { }

const zoo = [new Dog(), new Sheep()]

let ae = undefined
const ah = 0

interface TestFunc {
    (name: string): string
}

interface TestFuncConstructor {
    new(name: string): string
}


const func: TestFunc = (name: string) => {
    return name
}
function funcConstructor(ctr: TestFuncConstructor): string {
    return new ctr('')
}

// 提取类型的一部分
type ArrayFirst<T extends unknown[]> = T extends [infer F, ...infer R] ? F : never

type MyArray = ArrayFirst<[1, 2, 3]>

type MapType<T> = {
    [Key in keyof T 
        as`${Key & string}${Key & string}`
    ]: [
    T[Key], T[Key],
]
}

// type MapType<T> = {
//     [
//     Key in keyof T 
//             as`${Key & string}${Key & string}${Key & string}`
//     ]: [T[Key], T[Key], T[Key]]
// }

// 

type StartWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false

type Start = StartWith<'abc', 'a'>

type Replace<Str extends string, From extends string, To extends string> = Str extends `${infer Prefix}${ From } ${ infer Suffix } ` ? `${ Prefix } ${ To } ${ Suffix } `: Str
type R = Replace<'abc is ?', '?', 'ok'>

type TrimRightStr<Str extends string> = Str extends `${ infer Rest } ${ ' ' | '\n' | '\r' } ` ? TrimRightStr<Rest>: Str
type TrimLefttStr<Str extends string> = Str extends `${ ' ' | '\n' | '\r' } ${ infer Rest } ` ? TrimLefttStr<Rest>: Str

type Trim<Str extends string> = TrimRightStr<TrimLefttStr<Str>>

type OKTrim = Trim<' 000 '>

type ConstructorParam<CT extends new (...args: any) => any> = CT extends new (...args: infer T) => any ? T: never

type UppercaseKey<O extends object> = {
    [Key in keyof O as Uppercase<Key & string>] : O[Key]
}

type keys = 'name' | 'age'

type Test = Record<keyof keys, number>

type FilterType<O extends Record<string, any>, T> = {
    [Key in keyof O as T extends O[Key] ? Key : never] : O[Key]
}

type DeepPromise<T> = T extends Promise<infer P> ? DeepPromise<P> : T

type SS = DeepPromise<Promise<Promise<Promise<string>>>>

type ReverseArray<Arr extends unknown> = Arr extends [infer First, ...infer Rest] ? [...ReverseArray<Rest>, First] : Arr

let Type = {}

for(let i=0, type; type = ['String','Number','Array'][i++];){
    (function (type: string) {
        Type['is'+type] =function (obj:object) {
            return Object.prototype.toString.call(obj) === '[object ' +type+']'
        }
    })(type)
}

Type.isArray([])

type isAny<T> = 'any' extends ('ok' & T) ? true : false
