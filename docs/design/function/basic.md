# 基础示例

函数式编程核心的几个理解：
- 分解需求粒度到最小函数实现
- 每个函数只处理一件事，给定输入得到预期输出，不关注实现过程（可以简单理解为 Leetcode 的一道题目）
- 将多个函数按顺序流式(`a().b().c().end()`)组合，来解决特定问题
- 函数式编程可以很好地处理复用问题，本质上是因为其简单的实现，即只关心输入和输出。
  
> [以下示例参考链接-JavaScript 函数式编程实践指南](https://juejin.cn/book/7173591403639865377/section/7175421412176789565)

## 需求背景
过滤龄大于等于 24 岁的员工做生涯指导，需要拉出一张满足条件的员工信息清单，要求清单中每一条信息中间用逗号分隔，并按照年龄升序展示。

## 解决步骤
把这个需求简单梳理一下，分三步走：

- 对列表进行排序
- 筛选出 >= 24 岁这个区间内的员工列表
- 针对该列表中的每一条员工数据历史，保存到 logText 中

## 代码实现
### 命令式
```js
const peopleList = [
  {
    name: 'John Lee',
    age: 22,
    career: 'engineer'
  },
  {
    name: 'Bob Chen',
    age: 24,
    career: 'engineer'
  },
  {
    name: 'Lucy Liu',
    age: 26,
    career: 'PM'
  },
  {
    name: 'Jack Zhang',
    age: 28,
    career: 'PM'
  },
  {
    name: 'Yan Xiu',
    age: 30,
    career: 'engineer'
  }
]

const len = peopleList.length

// 对员工列表按照年龄【排序】
for(let i=0;i<len;i++) {
  // 内层循环用于完成每一轮遍历过程中的重复比较+交换
  for(let j=0;j<len-1;j++) {
    // 若相邻元素前面的数比后面的大
    if(peopleList[j].age > peopleList[j+1].age) {
      // 交换两者
      [peopleList[j], peopleList[j+1]] = [peopleList[j+1], peopleList[j]]
    }
  }
}

let logText = ''
for(let i=0; i<len; i++) {
  const person = peopleList[i]
  // 【筛选】出年龄符合条件的
  if( person.age >= 24 ) {
    // 从数组中【提取】目标信息到 logText
    const perLogText = `${person.name}'s age is ${person.age}`
    if(i!==len-1) {
      logText += `${perLogText},`
    } else {
      logText += perLogText
    }
  }
}

console.log(logText)
```

### 函数式
```js
// 定义筛选逻辑
const ageBiggerThan24 = (person)=>person.age>=24

// 定义排序逻辑
const smallAgeFirst = (a, b) => {
  return a.age < b.age
}

// 定义信息提取逻辑
const generateLogText = (person)=>{
  const perLogText = `${person.name}'s age is ${person.age}`
  return perLogText
}

const logText = peopleList.filter(ageBiggerThan24)
                      .sort(smallAgeFirst)
                      .map(generateLogText)
                      .join(',')

console.log(logText)
```
