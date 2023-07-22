export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/imgs/logo.png\",\"actions\":[{\"text\":\"快速了解\",\"link\":\"/base/js/basic.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"数据结构\",\"details\":\"涉及常见数据结构：队列、栈、链表等\"},{\"title\":\"算法\",\"details\":\"涉及常见算法：字符串、动态规划、双指针等\"},{\"title\":\"框架\",\"details\":\"Vue 源码解析 && React 框架\"},{\"title\":\"LeetCode\",\"details\":\"LeetCode 每日一题\"},{\"title\":\"插件\",\"details\":\"Webpack 插件\"},{\"title\":\"打包工具\",\"details\":\"Vite、Webpack、Rollup\"}],\"footer\":\"MIT Licensed | Copyright © 2021-present Joe\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1689852310000,\"contributors\":[{\"name\":\"Joe\",\"email\":\"me@qjidea.com\",\"commits\":4}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
