export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Daily Knowledge\",\"description\":\"静言思之 前端 算法 数据结构\",\"head\":[[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}]],\"locales\":{\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"你好\",\"description\":\"它将会在 /zh/ 子路径下生效\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
