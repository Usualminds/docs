# 数据不可变性
对于函数式编程思维而言，需要分清什么是不可变数据。对于 javascript 程序而言，常见类型为可通过 `const` 添加设置为不可变，重要关注的是引用类型的不可变处理。

基本原则是**对于引用类型数据，能拷贝就不直接修改。**

## 数据的增量更新
## 基于字典树的对象的 Immutable.js 


- ImmutableJS Docs 
- ImmutableJS Source Code
- Trie in Wiki
- Trie Datastructure in Javascript
- 10 Best JavaScript Trie Libraries


> Git 快照保存文件索引，而不会保存文件本身。 变化的文件将拥有新的存储空间+新的索引，不变的文件将永远呆在原地。
## 基于 Proxy 的 [Immer.js](https://github.com/immerjs/immer)

**“逐层浅拷贝”是 Immer 实现数据共享的关键。**
极简版 `producer`

```js
function produce(base, recipe) {
  // 预定义一个 copy 副本
  let copy
  // 定义 base 对象的 proxy handler
  const baseHandler = {
    set(obj, key, value) {
      // 先检查 copy 是否存在，如果不存在，创建 copy
      if (!copy) {
        copy = { ...base }
      }
      // 如果 copy 存在，修改 copy，而不是 base
      copy[key] = value
      return true
    }
  }

  // 被 proxy 包装后的 base 记为 draft
  const draft = new Proxy(base, baseHandler)
  // 将 draft 作为入参传入 recipe
  recipe(draft)
  // 返回一个被“冻结”的 copy，如果 copy 不存在，表示没有执行写操作，返回 base 即可
  // “冻结”是为了避免意外的修改发生，进一步保证数据的纯度
  return Object.freeze(copy || base)
}
```
