<!--
 * @Author: Joe me@qjidea.com
 * @Date: 2022-09-27 10:49:56
 * @LastEditors: Joe me@qjidea.com
 * @LastEditTime: 2022-09-27 11:23:16
 * @Description: 安装与使用
 * Copyright (c) 2022 by Joe me@qjidea.com, All Rights Reserved. 
-->
# 基础

## 安装
```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

## 命令
```shell
# 编译
rustc main.rs
# cli
cargo run
cargo build
cargo build --release
```

## 依赖更新
```shell
cargo update            # 更新所有依赖
cargo update -p regex   # 只更新 “regex”
```
## 镜像替换
在 `$HOME/.cargo/config.toml` 配置中添加以下内容：
```shell
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"

```
> 使用[科大镜像](https://mirrors.ustc.edu.cn/help/crates.io-index.html)
