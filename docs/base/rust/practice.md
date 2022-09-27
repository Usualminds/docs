<!--
 * @Author: Joe me@qjidea.com
 * @Date: 2022-09-27 10:49:56
 * @LastEditors: Joe me@qjidea.com
 * @LastEditTime: 2022-09-27 22:41:53
 * @Description: 练习题
 * Copyright (c) 2022 by Joe me@qjidea.com, All Rights Reserved. 
-->
# 练习题

## 面试题 01.02. 判定是否互为字符重排
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

- 示例 1：
    - 输入: s1 = "abc", s2 = "bca"
    - 输出: true 
- 示例 2：
    - 输入: s1 = "abc", s2 = "bad"
    - 输出: false

```rust
impl Solution {
    pub fn check_permutation(s1: String, s2: String) -> bool {
        let (mut s1_temp, mut s2_temp) = (s1.as_bytes().to_vec(), s2.as_bytes().to_vec());

        s1_temp.sort();
        s2_temp.sort();
    
        s1_temp == s2_temp
    }
}
```
