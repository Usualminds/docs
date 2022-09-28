<!--
 * @Author: Joe me@qjidea.com
 * @Date: 2022-09-27 10:49:56
 * @LastEditors: Joe me@qjidea.com
 * @LastEditTime: 2022-09-28 10:13:51
 * @Description: 变量
 * Copyright (c) 2022 by Joe me@qjidea.com, All Rights Reserved. 
-->
# 变量

## 可变性
默认情况下是不可变的，类似 javascript 中的 `const`，如果需要可变，则需要前置加上 `mut` 关键字
```rust
fn main() {
  # 不可变
  let count = 1
  # 非法赋值，编译会报错
  count = 5

  # 可变
  let mut counts = 1
  # 合法赋值
  counts = 2
}
```

## 未使用
创建了变量却不在任何地方使用它，可以通过 `_` 来手动处理，规避编译 `warning`。
```rust
fn main() {
  # 手动声明
  let _x = 4; 
  # 会提升告警
  let y = 7;
}
```

## 变量解构
`let` 表达式可以进行复杂的变量解构
```rust
# 不可变 a,可变 b
let (a, mut b): (bool,bool) = (true, false);

# 可变 s1_temp,可变 s2_temp
let (mut s1_temp, mut s2_temp) = (s1.as_bytes().to_vec(), s2.as_bytes().to_vec());

# 数组解构
[c, .., d, _] = [1, 2, 3, 4, 5];
assert_eq!([c,d],[1,4])
```

## 函数变量
通过函数，定义一个变量并返回，并在另一个函数中调用它
```rust
fn str_define() -> String {
    let str = "hello".to_string();
    str
}

fn main() {
  let str = str_define();
  println!("{}", str) # 'hello'
  assert_eq!(str,'hello')
}
```
