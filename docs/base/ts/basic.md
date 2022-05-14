# Typescript

## 基础类型

#### Symbol
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

#### Nullable
包含 `undefined` 和 `null`， `--strictNullChecks` 为 false 时， 允许将 undefined 和 null 值赋给 string 类型等其它类型
```ts
let a:string = undefined
```

#### void
用于函数返回值不存在场景，没有返回值也是 `void` 类型
```ts
// strictNullChecks: true
function test(): void {
    return undefined
}
```

#### enum
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

## any & unknown 
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