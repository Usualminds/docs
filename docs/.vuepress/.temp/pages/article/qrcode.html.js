export const data = JSON.parse("{\"key\":\"v-6c743ed9\",\"path\":\"/article/qrcode.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1643372454000,\"contributors\":[{\"name\":\"Joe\",\"email\":\"me@qjidea.com\",\"commits\":1}]},\"filePathRelative\":\"article/qrcode.md\"}")

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
