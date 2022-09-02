# 字符串
![](https://tva1.sinaimg.cn/large/008i3skNgy1gyi52opgo2j31bi0hcmzl.jpg)

字符串操作是我们日常开发中经常遇到的数据类型场景之一，对字符串定义如下：
字符串 (英语：string)，是由零个或多个字符组成的有限序列。一般记为 $$s=a _{1} a_ {2}\dots a_ {n} (0≤n≤\infty)$$ 
它是编程语言中表示文本的数据类型。

通常以字符串的整体或其子串作为操作对象，常见操作如：求字符串的最长公共前缀、在字符串中查找某个子串、在字符串串的某个位置上插入或删除一个子串、求回文字串等。

同时，我们需要知道两个字符串相等的充要条件是：长度相等，并且各个对应位置上的字符都相等。设 `p`、`q` 是两个串，求 `q` 在 `p` 中首次出现的位置的运算叫做模式匹配。字符串的两种最基本的存储方式是顺序存储方式和链接存储方式。

## 简介
本文主要介绍常见的几种字符串操作场景，并根据不同的应用场景提供解决方案

![](https://files.mdnice.com/user/8106/f9481326-904a-4fc5-a21a-bc9fcc1f755c.png)

## 应用场景

### 1 最长公共前缀 ⭐
[👉 Leetcode 链接-14](https://leetcode.cn/problems/longest-common-prefix/) 

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 “”。

::: tip
- 示例 1：
    - 输入：strs = [“flower”，“flow”，“flight”]
    - 输出：“fl”
- 示例 2：
    - 输入：strs = [“dog”，“racecar”，“car”]
    - 输出：“”
    - 解释：输入不存在公共前缀。
:::

#### 思路分析
- 要求所有数组中字符串的公共前缀，先找出数组中长度最小的字符串，即通过 `getMinLenStr` 方法找到 `minStr`
- 通过 `checkPrefix` 方法判断前缀 `minStr` 是否符合，如过不符合公共前缀则对 `minStr` 进行缩减操作即 `substring`
- 重复该操作直到符合条件时返回即可

```ts
function longestCommonPrefix(strs: string[]): string {
    let minStr = getMinLenStr(strs), start = 0, end = minStr.length

    while (start < end) {
        if (checkPrefix(strs, minStr)) {
            return minStr
        } else {
            end--
            minStr = minStr.substring(0, end)
        }
    }

    return minStr
};

function checkPrefix(strs: string[], prefix: string): boolean {
    for (let str of strs) {
        if (!str.startsWith(prefix)) return false
    }

    return true
}

function getMinLenStr(strs: string[]): string {
    let ans = '', min = Infinity

    for (let str of strs) {
        let len = str.length
        if (len < min) {
            min = len
            ans = str
        }
    }

    return ans
}
```
> 这道题目同时还可以拓展其他思路吗？

### 2 无重复字符的最长子串 (滑动窗口) ⭐⭐
[👉 Leetcode 链接-3](https://leetcode.cn/problems/longest-substring-without-repeating-characters/) 

给定一个字符串 s，请你找出其中不含有重复字符的**最长子串**的长度。

::: tip
- 示例 1：
    - 输入：s = “abcabcbb”
    - 输出：3
    - 解释：因为无重复字符的最长子串是 “abc”，所以其长度为 3。

- 示例 2：
    - 输入：s = “bbbbb”
    - 输出：1
    - 解释：因为无重复字符的最长子串是 “b”，所以其长度为 1。

- 示例 3：
    - 输入：s = “pwwkew”
    - 输出：3
    - 解释：因为无重复字符的最长子串是 “wke”，所以其长度为 3。
     请注意，你的答案必须是子串的长度，“pwke” 是一个子序列，不是子串。
:::

#### 思路分析
要计算**不含有重复字符**子串长度，我们首先要理解什么是**不含有重复字符**，举例来说，对字符串 `abcabcbb` 而言，`abc` 就是不含有重复字符的子串，而 `abca` 就不是，进而我们可以联想到，该题可以通过滑动窗口来解决，滑动窗口的内容就是**不含有重复字符**的子串，遇到重复的字符，我们只需要移动窗口起始位置 `start` 即可，与此同时，我们不断更新滑动窗口的位置，并记录该过程中**不含有重复字符**子串长度 `max`

> 该过程可以使用 `map` 数据结构记录字符 `char` 及其位置，即 `map.set(char, i)`

```ts
function lengthOfLongestSubstring(s: string): number {
    let max = 0, map = new Map(), len = s.length, start = 0

    for (let i = 0; i < len; i++) {
        let char = s.charAt(i)

        // if map contains current char, update start position
        if (map.has(char)) {
            start = Math.max(start, map.get(char) + 1)
        }

        map.set(char, i)
        max = Math.max(max, i - start + 1)
    }

    return max
};
```


### 3 最长回文子串 (双指针) ⭐⭐
[👉 Leetcode 链接-5](https://leetcode.cn/problems/longest-palindromic-substring/) 

给你一个字符串 s，找到 s 中最长的回文子串。

::: tip
- 示例 1：
    - 输入：s = “babad”
    - 输出：“bab”
    - 解释：“aba” 同样是符合题意的答案。

- 示例 2：
    - 输入：s = “cbbd”
    - 输出：“bb”
:::

#### 思路分析
首先要理解什么是**回文子串**，举例来说，对字符串 `abbacd` 而言，`abba` 就是其回文子串，而 `abbac` 就不是，进而我们可以先确定回文子串，回文子串可能会有多个，通过记录子串的长度，返回最长的那个回文子串即可

> 该过程可以使用**双指针**解法找出回文子串

```ts
function longestPalindrome(s: string): string {
    let res = '', len = s.length

    for (let i = 0; i < len; i++) {
        let even = isPalindrom(i, i, s), odd = isPalindrom(i, i + 1, s), subLen = res.length

        res = even.length > subLen ? even : res
        res = odd.length > subLen ? odd : res
    }

    return res
};

function isPalindrom(left: number, right: number, s: string) {
    while (left >= 0 && right < s.length && (s[left] === s[right])) {
        left--
        right++
    }

    return s.substring(left + 1, right)
}
```


### 4 最长有效括号 (栈方法) ⭐⭐⭐
[👉 Leetcode 链接-32](https://leetcode.cn/problems/longest-valid-parentheses/) 

给你一个只包含 ‘(’ 和 ‘)’ 的字符串，找出最长有效 (格式正确且连续) 括号子串的长度。

::: tip
- 示例 1：
    - 输入：s = “(()”
    - 输出：2
    - 解释：最长有效括号子串是 “()”
- 示例 2：
    - 输入：s = “)()())”
    - 输出：4
    - 解释：最长有效括号子串是 “()()”
- 示例 2：
    - 输入：s = “”
    - 输出：0
:::

#### 思路分析
首先要理解什么是**格式正确且连续**，举例来说，对字符串 `()()(()` 而言，`()` 就是**格式正确**，而 `()()` 就是**格式正确且连续**，所以我们可以通过栈数据结构来辅助处理 `()` 左右括号的正确性，剩下的重点就是如何处理连续性问题，我们在用到栈处理括号闭合性时，遇到左括号 `(` 入栈，遇到右括号 `)` 出栈，同时出栈我们可以判断当前栈是否为空，如果为空，则表示当前的右括号是没有被匹配的，即在它之前没有左括号与之对应了，这时，我们可以用栈保存当前右括号的下标，这一步很重要，如果栈不为空，当前右括号减去栈顶元素，即为以当前右括号为结尾的最长有效括号的长度

> 该过程可以使用**栈方法**辅助求解，同时保存的是括号的下标

```ts
function longestValidParentheses(s: string): number {
    let stack = [-1], max = 0, len = s.length

    for (let i = 0; i < len; i++) {
        let char = s.charAt(i)
        if (char === '(') {
            stack.push(i)
        } else {
            stack.pop()

            if (stack.length === 0) {
                stack.push(i)
            } else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }

    return max
};
```

### 总结
本文通过四个字符串问题场景，结合滑动窗口、双指针、栈等解法加以分析处理，可以解决部分常见的字符串问题，字符串问题是我们日常遇到最高频，也是场景最繁杂的，本文只是选择其中部分加以解析，字符串典型问题如：`KMP` 类型问题，动态规划类问题、模式匹配处理等问题，后续有机会也会展开分析。