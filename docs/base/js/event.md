# 时间循环
JS 脚本 scrpit 包含**异步任务**和**同步任务**，首先同步任务在主线程上执行，当同步任务执行完成后，JS 将当前执行栈清空。然后开始执行异步任务，异步任务分为宏任务和微任务，异步任务会放入任务队列当中，宏任务放入宏任务队列，微任务会放入微任务队列。先执行微任务，后执行宏任务。

在宏任务执行完成前的一刻，渲染进程会触发 GUI 和 dom 的渲染。

- 微任务包括：`process.nextTick`，`promise`，`MutationObserver`。

- 宏任务包括：`script`，`setTimeout`，`setInterval`，`setImmediate`，`I/O`，`UI rendering`
  
> `process.nextTick()` 要优于 `promise.then` 执行

## 场景

```js
async function f(){
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('1');
            // resolve 之后才会走到下一步，否则还会一直 pending
            // resolve()
        }, 2000);
    })
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('2');
        }, 3000);
    })

    console.log('3');
}

f()
// 2秒后输出1，原因是await之后返回的promise状态没有发生变化，一直是pending
// 在promise中加上   resolve() 就能打印  3 了
function time(flag) {
    new Promise((resolve, reject) => {
      if(flag){
          console.log('resolve')
      }else{
          console.log('reject')
      }
    }).then(() => {
        console.log('then')
    }).catch((ee) => {
        console.log(ee)
    })
}

async function f2() {
    let promiseA = new Promise(resolve => {
        setTimeout(() => {
            console.log('1');
        }, 2000);
    })

    let promiseB = new Promise(resolve => {
        setTimeout(() => {
            console.log('2');
        }, 3000);
    })

    await promiseA;
    await promiseB;
    console.log('3');
}
f2()
// 2秒打印1，再过1秒打印2
// 这里3不打印的原因也是因为await返回的promise状态没有变化，一直是pending
// 在promise中加上   resolve() 就能打印  3 了
```