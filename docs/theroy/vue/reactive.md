# 响应式

## 原始值响应


## 非原始值响应 (对象、数组)

### 基本响应式
通过 `Proxy` 代理来实现一个简单的响应式
```ts
let fns = new Set(), activeFn
let data = {
    text: '1'
}

const obj = new Proxy(data, {
    get(target, key){
        fns.add(activeFn)
        return target[key]
    },

    set(target, key, newVal){
        target[key] = newVal
        fns.forEach(fn => fn())
    }
})

function effect(fn){
    activeFn = fn
    fn()
}

effect(() => {
    console.log('run time', new Date())
    document.body.innerText = obj.text
})


setTimeout(() => {
    obj.text = 'next'
}, 2000)
```

### 常规响应式

基本响应式存在的问题
- 对于不存在属性，也会执行副作用函数
- 数据结构导致的垃圾回收问题

```ts
let weakMap = new WeakMap()
let activeEffect

let data = {
    text: 'hello'
}

const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)

        return target[key]
    },

    set(target, key, newVal){
        target[key] = newVal

        trigger(target,key)
    }
})

function track(target, key){
    if(!activeEffect) return

    let depsMap = weakMap.get(target)

    if(!depsMap) {
        weakMap.set(target, (depsMap = new Map()))
    }

    let deps = depsMap.get(key)

    if(!deps) {
        depsMap.set(key, (deps = new Set()))
    }

    deps.add(activeEffect)
}

function trigger(target, key, newVal){
    let depsMap = weakMap.get(target)

    if(!depsMap) return

    let effects = depsMap.get(key)

    effects && effects.forEach(fn => fn()) 
}

function effect(fn) {
    activeEffect = fn
    fn()
}

effect(() => {
    console.log('effect run', new Date().now())
    document.body.innerText = obj.text
})

setTimeout(() => {
    obj.text1 = '666'
}, 2000)
```

### 进阶响应式
常规响应式存在的问题
- 分支切换，类似三木运算符
- effect 副作用函数嵌套
- 递归循环等
  
```ts
let weakMap = new WeakMap()
let activeEffect

let data = {
    text: 'hello',
    ok: false,
    num: 1
}

const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)

        return target[key]
    },

    set(target, key, newVal){
        target[key] = newVal

        trigger(target,key)
    }
})

function track(target, key){
    if(!activeEffect) return

    let depsMap = weakMap.get(target)

    if(!depsMap) {
        weakMap.set(target, (depsMap = new Map()))
    }

    let deps = depsMap.get(key)

    if(!deps) {
        depsMap.set(key, (deps = new Set()))
    }

    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key, newVal){
    let depsMap = weakMap.get(target)

    if(!depsMap) return

    let effects = depsMap.get(key)
    let effectRun = new Set()

    effects.forEach(effectFn =>{
        // 避免递归
        if(activeEffect !== effectFn){
            effectRun.add(effectFn)
        }
    })

    effectRun && effectRun.forEach(fn => fn()) 
}

// 保存相关依赖的栈
let effectStack = []

function effect(fn) {
    const effectFn = () => {
        cleanup(effectFn)

        activeEffect = effectFn

        effectStack.push(effectFn)
        fn()
        effectStack.pop()

        activeEffect = effectStack[effectStack.length - 1]
    }

    effectFn.deps = []

    effectFn()
}

function cleanup(effectFn){
    for(let i=0;i<effectFn.deps.length;i++){
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }

    effectFn.deps.length = 0
}

effect(() => {
    obj.num = obj.num + 1
})

setTimeout(() => {
    obj.num = 2
}, 2000)
```

### 高阶响应式
解决问题
- 时间调度执行
- 懒加载
  