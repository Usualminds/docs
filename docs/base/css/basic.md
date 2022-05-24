# CSS

## 布局


## BFC
[BFC, `Block Formatting Context`](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

### 触发机制
- html 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、 scroll)

### 特性
- 同一个 `BFC` `margin`外边距会发生折叠
- 内部元素不会影响外部元素
- BFC 可以包含浮动的元素（清除浮动）`float + overflow: hidden`
  
## 严格模式
- 严格模式通过抛出错误来消除了一些原有静默错误。
- 严格模式修复了一些导致 `JavaScript` 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。
- 严格模式禁用了在 `ECMAScript` 的未来版本中可能会定义的一些语法。

- 严格模式禁用 with
- 严格模式下的 eval 不再为上层范围(surrounding scope,注:包围 eval 代码块的范围)引入新变量. 
- 严格模式禁止删除声明变量。delete name 在严格模式下会引起语法错误
- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不再支持 arguments.callee
- 禁止 this 指向全局对象


