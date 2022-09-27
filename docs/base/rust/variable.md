<!--
 * @Author: Joe me@qjidea.com
 * @Date: 2022-09-27 10:49:56
 * @LastEditors: Joe me@qjidea.com
 * @LastEditTime: 2022-09-27 11:35:19
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
