# 四月

## 2022.4.20 数组 ⭐
> :point_right: 
[扁平化数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

`WeakRef`，使用 weakObj 与 obj 没有任何区别，唯一不同时，obj 可能随时被 GC，而一旦被 GC，弱引用拿到的对象可能就变成 undefined，所以要做好错误保护
::: tip 示例
let newArray = arr.flat([depth])
:::

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
// reduce
function flat(arrs: any[], depth: number): any[] {
    return depth > 0 ? arrs.reduce((cur, val) => cur.concat(Array.isArray(val) ? flat(val, depth -1) : val), []) : arrs.slice()
};

// stack

function stackFlat(arrs: []) :[]{
    const stack = [...arrs], res = []

    while(stack.length){
        let next = stack.pop()

        if(Array.isArray(next)){
            stack.pushh(...next)
        } else {
            res.push(next)
        }
    }

    return res.reverse()
}
```
  </CodeGroupItem>
</CodeGroup>