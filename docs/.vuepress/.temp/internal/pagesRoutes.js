import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-5699a55b","/algorithms/dp.html",{"title":"动态规划"},["/algorithms/dp","/algorithms/dp.md"]],
  ["v-087293fd","/algorithms/graph.html",{"title":"图论"},["/algorithms/graph","/algorithms/graph.md"]],
  ["v-8114f962","/algorithms/linklist.html",{"title":"链表"},["/algorithms/linklist","/algorithms/linklist.md"]],
  ["v-abd8a642","/algorithms/math.html",{"title":"数学"},["/algorithms/math","/algorithms/math.md"]],
  ["v-7cac6c09","/algorithms/sort.html",{"title":"排序"},["/algorithms/sort","/algorithms/sort.md"]],
  ["v-7f4aae09","/algorithms/tree.html",{"title":"树"},["/algorithms/tree","/algorithms/tree.md"]],
  ["v-3c2b42b9","/article/browser-finger.html",{"title":"浏览器指纹及其应用"},["/article/browser-finger","/article/browser-finger.md"]],
  ["v-54e17b9b","/article/dp.html",{"title":"动态规划"},["/article/dp","/article/dp.md"]],
  ["v-6dead58c","/article/pnpm.html",{"title":"pnpm"},["/article/pnpm","/article/pnpm.md"]],
  ["v-1ace5e52","/article/project.html",{"title":"SMJ 项目知识体系梳理"},["/article/project","/article/project.md"]],
  ["v-6c743ed9","/article/qrcode.html",{"title":""},["/article/qrcode","/article/qrcode.md"]],
  ["v-72582dd0","/design/",{"title":"设计模式"},["/design/index.html","/design/index.md"]],
  ["v-66154a18","/leetcode/april.html",{"title":"四月"},["/leetcode/april","/leetcode/april.md"]],
  ["v-2e513634","/leetcode/contest.html",{"title":"周赛笔记"},["/leetcode/contest","/leetcode/contest.md"]],
  ["v-5266a414","/leetcode/february.html",{"title":"二月"},["/leetcode/february","/leetcode/february.md"]],
  ["v-7ada4160","/leetcode/january.html",{"title":"一月"},["/leetcode/january","/leetcode/january.md"]],
  ["v-8d78f654","/leetcode/june.html",{"title":"六月"},["/leetcode/june","/leetcode/june.md"]],
  ["v-2e8b206f","/test/finpoints.html",{"title":"Finpoints Assessment"},["/test/finpoints","/test/finpoints.md"]],
  ["v-393919c7","/test/ft.html",{"title":"FT"},["/test/ft","/test/ft.md"]],
  ["v-3631537f","/test/shopee.html",{"title":"Shopee"},["/test/shopee","/test/shopee.md"]],
  ["v-0efe085c","/base/css/basic.html",{"title":"CSS"},["/base/css/basic","/base/css/basic.md"]],
  ["v-3b195be8","/base/h5/basic.html",{"title":"H5"},["/base/h5/basic","/base/h5/basic.md"]],
  ["v-15b51428","/base/js/basic.html",{"title":"基础"},["/base/js/basic","/base/js/basic.md"]],
  ["v-45ece32a","/base/js/code.html",{"title":"笔试题"},["/base/js/code","/base/js/code.md"]],
  ["v-72cffb00","/base/js/event.html",{"title":"时间循环"},["/base/js/event","/base/js/event.md"]],
  ["v-23ad1216","/base/js/others.html",{"title":"其它"},["/base/js/others","/base/js/others.md"]],
  ["v-60351610","/base/js/prototype.html",{"title":"原型和原型链"},["/base/js/prototype","/base/js/prototype.md"]],
  ["v-0260974c","/base/js/this.html",{"title":"this"},["/base/js/this","/base/js/this.md"]],
  ["v-3f2b753e","/base/js/type.html",{"title":"类型"},["/base/js/type","/base/js/type.md"]],
  ["v-1ef6020a","/theroy/react/",{"title":"React"},["/theroy/react/index.html","/theroy/react/index.md"]],
  ["v-b27afcf4","/theroy/vue/compiler.html",{"title":"编译器"},["/theroy/vue/compiler","/theroy/vue/compiler.md"]],
  ["v-971a54e0","/theroy/vue/component.html",{"title":"组件"},["/theroy/vue/component","/theroy/vue/component.md"]],
  ["v-0d247cd6","/theroy/vue/nextTick.html",{"title":"vue"},["/theroy/vue/nextTick","/theroy/vue/nextTick.md"]],
  ["v-f5170928","/theroy/vue/reactive.html",{"title":"响应式"},["/theroy/vue/reactive","/theroy/vue/reactive.md"]],
  ["v-d9afb83c","/theroy/vue/renderer.html",{"title":"渲染器"},["/theroy/vue/renderer","/theroy/vue/renderer.md"]],
  ["v-4643b6f6","/base/ts/basic.html",{"title":"基础"},["/base/ts/basic","/base/ts/basic.md"]],
  ["v-11c386fc","/base/ts/deep.html",{"title":"深入"},["/base/ts/deep","/base/ts/deep.md"]],
  ["v-6b381d61","/base/ts/grammer.html",{"title":"进阶"},["/base/ts/grammer","/base/ts/grammer.md"]],
  ["v-10763323","/base/ts/practise.html",{"title":"实战"},["/base/ts/practise","/base/ts/practise.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-b9f4df6e","/test/ht.html",{"title":"HT"},["/test/ht","/test/ht.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
