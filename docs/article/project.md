# SMJ 项目知识体系梳理

## Vue 相关

### Vue

#### 响应式计算和侦听 ⭐⭐⭐
[](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E8%AE%A1%E7%AE%97%E5%80%BC)

待研究


#### reactive 不能解构


#### ref & reactive
```ts
let obj = reactive({
    count: 1,
})

const count = ref(0)

watchEffect(() => console.log( count.value, obj))
// -> logs 0; Proxy 1

setTimeout(() => {
    count.value++, (obj.count = 3)
    // -> logs 1; Proxy 3
}, 1000)
```

### Vue Router

#### setup 中访问路由和当前路由
> :point_right: [Vue Router 和 组合式 API](https://router.vuejs.org/zh/guide/advanced/composition-api.html)

因为我们在 setup 里面没有访问 this，所以我们不能再直接访问 `this.$router` 或 `this.$route`。作为替代，我们使用 `useRouter` 函数：

```ts
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      })
    }
  },
}
```
> **在模板中我们仍然可以访问 $router 和 $route，所以不需要在 setup 中返回 router 或 route**

#### 导航守卫
虽然你仍然可以通过 `setup` 函数来使用组件内的导航守卫，但 `Vue Router` 将更新和离开守卫作为 组合式 `API` 函数公开

```ts
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

export default {
  setup() {
    // 与 beforeRouteLeave 相同，无法访问 `this`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // 取消导航并停留在同一页面上
      if (!answer) return false
    })

    const userData = ref()

    // 与 beforeRouteUpdate 相同，无法访问 `this`
    onBeforeRouteUpdate(async (to, from) => {
      //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })
  },
}
```

#### 路由懒加载

- Vue Router 支持开箱即用的动态导入，这意味着你可以用动态导入代替静态导入

```ts
const UserDetails = () => import('./views/UserDetails')

const router = createRouter({
  // ...
  routes: [{ path: '/users/:id', component: UserDetails }],
})
```

- 把组件按组分块，有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用命名 `chunk`，一个特殊的注释语法来提供 `chunk name` (需要 Webpack > 2.4)：

```ts
const UserDetails = () =>
  import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
const UserDashboard = () =>
  import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
const UserProfileEdit = () =>
  import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')
```
#### 动态路由
`Vue Router` 提供了两个功能来查看现有的路由：

- `router.hasRoute()`：检查路由是否存在。
- `router.getRoutes()`：获取一个包含所有路由记录的数组。



### Vuex VS Pina

#### Pina
##### store 使用
**不能对 `store` 进行解构**，因为它是用 `reactive` 包裹的对象，这意味着不需要 `.value` 在 `getter` 之后编写
```ts
export default defineComponent({
  setup() {
    const store = useStore()
    // ❌ This won't work because it breaks reactivity
    // it's the same as destructuring from `props`
    const { name, doubleCount } = store

    name // "eduardo"
    doubleCount // 2

    return {
      // will always be "eduardo"
      name,
      // will always be 2
      doubleCount,
      // this one will be reactive
      doubleValue: computed(() => store.doubleCount),
      }
  },
})
```

为了确保其响应性，可以使用 `storeToRefs()`
```ts
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useStore()
    // `name` and `doubleCount` are reactive refs
    // This will also create refs for properties added by plugins
    // but skip any action or non reactive (non ref/reactive) property
    const { name, doubleCount } = storeToRefs(store)

    return {
      name,
      doubleCount
    }
  },
})
```


## Typescript


## 工程化

### Vite

### prettier eslint

### CI 


## 库相关

### Axios

### Less Sass

### MockJS


## 组件化


## 单测

### Jest