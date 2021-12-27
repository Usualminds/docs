import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-b26deb9c","/algorithms/",{"title":"algorithms"},["/algorithms/index.html","/algorithms/README.md"]],
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
