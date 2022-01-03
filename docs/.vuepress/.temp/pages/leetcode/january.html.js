export const data = {
  "key": "v-7ada4160",
  "path": "/leetcode/january.html",
  "title": "一月",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "2022.1.1",
      "slug": "_2022-1-1",
      "children": []
    },
    {
      "level": 2,
      "title": "2022.1.2",
      "slug": "_2022-1-2",
      "children": []
    },
    {
      "level": 2,
      "title": "2022.1.3",
      "slug": "_2022-1-3",
      "children": []
    }
  ]
}

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
