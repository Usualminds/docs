# 笔试题

## 数组去重

```js
function unique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  // 当前值 下标 数组
  return arr.filter((cur, index, array) => {
    return array.indexOf(cur) === index;
  })
}

function unique(arr){
  return arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return pre.concat(cur)
    }else{
      return pre
    }
  },[])
}
```
## 数组扁平化

```js
function flatten(arr){
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur):cur)
    },[])
}

function flatten(arr){
    return [].concat(...arr.map(item => {
        return Array.isArray(item) ? flatten(item) : item
    }))
}
```

## 防抖函数（debounce)
- 定义：每次事件触发则删除原来的定时器，建立新的定时器。跟王者荣耀的回城功能类似，你反复触发回城功能，那么只认最后一次，从最后一次触发开始计时

- 场景：
  - 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
  - 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似

```js
function debounce(fn, delay){
    let timer = null
    return function(...args){
        if(timer) clearTimeout(timer)

        timer = setTimeout(function(){
            fn.apply(this, args)
        },delay)
    }
}

```

## 节流函数（throttle）
- 定义：如果在定时器的时间范围内再次触发，则不予理睬，等当前定时器完成，才能启动下一个定时器任务。这就好比公交车，10 分钟一趟，10 分钟内有多少人在公交站等我不管，10 分钟一到我就要发车走人！
- 场景
    - 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
    - 缩放场景：监控浏览器 `resize`
    - 动画场景：避免短时间内多次触发动画引起性能问题
  
```js
function throttle(fn, interval){
    let flag = true

    return function(...args){
        if(!flag) return
        flag = false

        setTimeout(()=>{
            fn.apply(this, args)
            flag = true
        },interval)
    }
}
```

## 洗牌算法和获取随机数
```js
function getRandom(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle(arr){
    let _arr = arr.slice()

    for(let i=0;i<_arr.length;i++){
        let el = _arr[i], random=getRandom(0,i)
        
        _arr[i] = _arr[random]
        _arr[random] = el
    }

    return _arr
}
```