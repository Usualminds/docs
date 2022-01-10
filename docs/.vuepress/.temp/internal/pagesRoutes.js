import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-2e513634","/leetcode/contest.html",{"title":"周赛笔记"},["/leetcode/contest","/leetcode/contest.md"]],
  ["v-5266a414","/leetcode/february.html",{"title":"二月"},["/leetcode/february","/leetcode/february.md"]],
  ["v-7ada4160","/leetcode/january.html",{"title":"一月"},["/leetcode/january","/leetcode/january.md"]],
  ["v-5699a55b","/algorithms/dp.html",{"title":"动态规划"},["/algorithms/dp","/algorithms/dp.md"]],
  ["v-087293fd","/algorithms/graph.html",{"title":"图论"},["/algorithms/graph","/algorithms/graph.md"]],
  ["v-8114f962","/algorithms/linklist.html",{"title":"链表"},["/algorithms/linklist","/algorithms/linklist.md"]],
  ["v-abd8a642","/algorithms/math.html",{"title":"数学"},["/algorithms/math","/algorithms/math.md"]],
  ["v-7f4aae09","/algorithms/tree.html",{"title":"树"},["/algorithms/tree","/algorithms/tree.md"]],
  ["v-328148e3","/algorithms/leetcode-booklet/",{"title":""},["/algorithms/leetcode-booklet/index.html","/algorithms/leetcode-booklet/README.md"]],
  ["v-dfb50418","/algorithms/leetcode-booklet/article/webapck-stat-data.html",{"title":""},["/algorithms/leetcode-booklet/article/webapck-stat-data","/algorithms/leetcode-booklet/article/webapck-stat-data.md"]],
  ["v-2d378567","/algorithms/leetcode-booklet/article/webpack-stylus-loader.html",{"title":""},["/algorithms/leetcode-booklet/article/webpack-stylus-loader","/algorithms/leetcode-booklet/article/webpack-stylus-loader.md"]],
  ["v-5dd48bc4","/algorithms/leetcode-booklet/article/%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%AE%97%E6%B3%95%E8%A7%A3%E6%9E%90.html",{"title":""},["/algorithms/leetcode-booklet/article/字符串算法解析.html","/algorithms/leetcode-booklet/article/%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%AE%97%E6%B3%95%E8%A7%A3%E6%9E%90","/algorithms/leetcode-booklet/article/字符串算法解析.md","/algorithms/leetcode-booklet/article/%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%AE%97%E6%B3%95%E8%A7%A3%E6%9E%90.md"]],
  ["v-762aec30","/algorithms/leetcode-booklet/string/%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%AE%97%E6%B3%95.html",{"title":""},["/algorithms/leetcode-booklet/string/字符串算法.html","/algorithms/leetcode-booklet/string/%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%AE%97%E6%B3%95","/algorithms/leetcode-booklet/string/字符串算法.md","/algorithms/leetcode-booklet/string/%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%AE%97%E6%B3%95.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
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
