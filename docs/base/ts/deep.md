# 深入

## 类型系统
`Typescript` 并不总是可靠的，如下：
```ts
const temp: string = (1 as unknown) as string

typeof temp === 'number'
```
类型层次：`never < null < undefined < string | booolean | ... < unkonwn < any`


### 逆变
子类型可以赋值给父类型，叫做协变 (covariant)
```ts
interface Person {
    name: string;
    age: number;
} 

interface Guang {
    name: string;
    age: number;
    hobbies: string[]
}

let person: Person = {
    name: '',
    age: 20
};
let guang: Guang = {
    name: 'guang',
    age: 20,
    hobbies: ['play game', 'writing']
};

person = guang;
```
### 协变
父类型可以赋值给子类型，叫做逆变 (contravariant)。
函数的参数有逆变的性质 (而返回值是协变的，也就是子类型可以赋值给父类型
```ts
interface Person {
    name: string;
    age: number;
} 

interface Guang {
    name: string;
    age: number;
    hobbies: string[]
}

let printHobbies: (guang: Guang) => void;

printHobbies = (guang) => {
    console.log(guang.hobbies);
}

let printName: (person: Person) => void;

printName = (person) => {
    console.log(person.name);
}

// ok
printHobbies = printName;

// invalid
printName = printHobbies;
```

参数的位置是逆变的，返回值逆变
```ts
// return type invalid, because boolean is not sub type of void
type Func = (name: string) => void

let test:Func = (name:any) => boolean

// parmas type valid, because any is parent type of string && undefined is sub type of void
type Func = (name: string) => void

let test:Func = (name:any) => undefined
```


## 声明文件
- 内部自带声明文件：`lib.d.ts`、`lib.dom.d.ts`
- 第三方声明文件：`Jquery`，[`DefinitelyTyped`](https://github.com/DefinitelyTyped/DefinitelyTyped) 查找第三方声明文件
- 自定义声明文件

## tsconfig.json
- baseUrl
- paths
- rootDirs
- `traceResolution`，追踪编译过程日志

## tsc 编译
tsc 没有做 polyfill 的处理，需要全量引入 core-js,babel 的 @babel/preset-env 会根据 targets 的配置按需引入 core-js
- --watch
- --build
- --module
- --target
- --project
- --help
  
`tsc init` 初始化 `tsconfig.json`

## babel 编译
优点
- babel 编译 `ts` 代码的优点是可以通过插件支持更多的语言特性，而且生成的代码是按照 `targets` 的配置按需引入 `core-js` 的
- 编译 ts 代码来生成体积更小的代码，不做类型检查编译速度也更快
- 如果想做类型检查可以单独执行 tsc --noEmit
  
babel 不足
- `const enum` (会作为 enum 处理)
- `namespace` 的跨文件合并，因为是每个文件单独编译的 (tsc 是整个项目一起编译)
- 导出非 `const` 的值
- 过时的 `export = import =` 的模块语法
- 不做类型检查，也不会生成 d.ts 文件

## 三斜线指令
必须放在代码文件首行，否则无效
```ts
/// <reference path=''>
/// <reference lib=''>
```

## 体操

### StartWith
```ts
// 判断字符串是否以某个前缀开头，也是通过模式匹配
type StartWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false

type Start = StartWith<'abc', 'a'>  // true
type Start = StartWith<'bbc', 'a'>  // false
```

### Replace
字符串可以匹配一个模式类型，提取想要的部分，自然也可以用这些再构成一个新的类型
```ts
type Replace<Str extends string, From extends string, To extends string> = Str extends `${infer Prefix}${ From }${ infer Suffix }` ? `${ Prefix } ${ To } ${ Suffix } `: Str

type R = Replace<'abc is ?', '?', 'ok'>

// type R = "abc is  ok  "
```

### Trim

```ts
type TrimRightStr<Str extends string> = Str extends `${infer Rest}${' ' | '\n' | '\r'}` ? TrimRightStr<Rest>: Str
type TrimLefttStr<Str extends string> = Str extends `${' ' | '\n' | '\r'}${infer Rest}` ? TrimLefttStr<Rest>: Str

type Trim<Str extends string> = TrimRightStr<TrimLefttStr<Str>>

type OKTrim = Trim<'   000   '>
// '000'
```

## Uppercase
```ts
type UppercaseKey<O extends object> = {
    [Key in keyof O as Uppercase<Key & string>] : O[Key]
}


type obj = {
  readonly name: string;
  age?: number;
  gender: boolean;
}

type T = UppercaseKey<obj>

// output
// type T = {
//     readonly NAME: string;
//     AGE?: number | undefined;
//     GENDER: boolean;
// }
```

## Record
```ts
type Keys = 'name' | 'age'

type Test = Record<Keys, number>

// type Test = {
//     name: number;
//     age: number;
// }

type Record<K extends string | number | symbol, T> = { [P in K]: T; }
```

## Filter
```ts

type FilterType<O extends Record<string, any>, T> = {
    [Key in keyof O as T extends O[Key] ? Key : never] : O[Key]
}

type StringType = FilterType<{
    name: string,
    age: number,
    oters: number[]
}, number[]>

// type StringType = {
//     oters: number[];
// }
```

## Deep
```ts
type DeepPromise<T> = T extends Promise<infer P> ? DeepPromise<P> : T

type SS = DeepPromise<Promise<Promise<Promise<string>>>>

// number
```

## Reverse
```ts
type ReverseArray<Arr extends unknown> = Arr extends [infer First, ...infer Rest] ? [...ReverseArray<Rest>, First] : Arr

type SS = ReverseArray<[1,3,6,'0']>

// ['0',6,,3,1]
```

## Include
```ts
type Euqal<A, B> = (A extends B ? true : false) & (B extends A ? true : false)

type Include<Arr extends unknown[], Item> = Arr extends [infer Frist, ...infer Rest] ? Euqal<Frist, Item> extends true ? true : Include<Rest, Item> :false

type Arr = Include<[1,2,3], 1>  // true
type Arr1= Include<[1,2,3], 11> // false
```

## Removeitem
```ts
type Euqal<A, B> = (A extends B ? true : false) & (B extends A ? true : false)

type RemoveItem<Arr extends unknown[], Item, Results extends unknown[] = []> = Arr extends [infer First, ...infer Rest] ? Euqal<First, Item> extends true ? RemoveItem<Rest,Item, Results> : RemoveItem<Rest,Item, [...Results,First]> : Results

type Arr = RemoveItem<[1,2,3], 1>   // [2,3]
```

## ReplaceAll
```ts
type ReplaceAll<
    Str extends string, 
    From extends string, 
    To extends string
> = Str extends `${infer Left}${From}${infer Right}`
        ? `${Left}${To}${ReplaceAll<Right, From, To>}`
        : Str;
```

## String Union
```ts
type StringUnion<Str extends string> = Str extends `${infer First}${infer Rest}` ? First | StringUnion<Rest> : never

type Str = StringUnion<'smile'>
// 's' 'm' 'i' 'l' 'e'
```

## String Reverse
```ts
type StrReverse<Str extends string, Results extends string = ''> = Str extends `${infer First}${infer Rest}` ? StrReverse<Rest, `${First}${Results}`> : Results

type Str = StrReverse<'smile'>
// 'elims'
```

## Array Add
```ts
type BuildNewArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildNewArray<Length, Ele,[...Arr, Ele]>

type Add<Num1 extends number, Num2 extends number> = 
    [...BuildNewArray<Num1>,...BuildNewArray<Num2>]['length'];


type AddResult = Add<32, 25>;
```

## Isany
```ts
type isAny<T> = 'any' extends ('ok' & T) ? true : false

type test = isAny<any>
```

## isUnion
```ts
type isUnion<A, B=A> = A extends B ? [B] extends [A] ? false : true : never

type test = isUnion<'a' | 'b'>
type test1 = isUnion<'a'>
```

## isNever
```ts
type isNever<T> = [T] extends [never] ? true : false
type ok = isNever<never>

type ok1 = isNever<'never'>
```

## Index type
```ts
type IndexType =  keyof any

// string | number | symbol
```