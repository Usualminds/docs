import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-3c2b42b9","/article/browser-finger.html",{"title":"浏览器指纹及其应用"},["/article/browser-finger","/article/browser-finger.md"]],
  ["v-54e17b9b","/article/dp.html",{"title":"动态规划"},["/article/dp","/article/dp.md"]],
  ["v-6dead58c","/article/pnpm.html",{"title":"pnpm"},["/article/pnpm","/article/pnpm.md"]],
  ["v-6c743ed9","/article/qrcode.html",{"title":""},["/article/qrcode","/article/qrcode.md"]],
  ["v-2e513634","/leetcode/contest.html",{"title":"周赛笔记"},["/leetcode/contest","/leetcode/contest.md"]],
  ["v-5266a414","/leetcode/february.html",{"title":"二月"},["/leetcode/february","/leetcode/february.md"]],
  ["v-7ada4160","/leetcode/january.html",{"title":"一月"},["/leetcode/january","/leetcode/january.md"]],
  ["v-5699a55b","/algorithms/dp.html",{"title":"动态规划"},["/algorithms/dp","/algorithms/dp.md"]],
  ["v-087293fd","/algorithms/graph.html",{"title":"图论"},["/algorithms/graph","/algorithms/graph.md"]],
  ["v-8114f962","/algorithms/linklist.html",{"title":"链表"},["/algorithms/linklist","/algorithms/linklist.md"]],
  ["v-abd8a642","/algorithms/math.html",{"title":"数学"},["/algorithms/math","/algorithms/math.md"]],
  ["v-7f4aae09","/algorithms/tree.html",{"title":"树"},["/algorithms/tree","/algorithms/tree.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-1ace5e52","/article/project.html",{"title":"SMJ 项目知识体系梳理"},["/article/project","/article/project.md"]],
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
