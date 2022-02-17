export const themeData = {
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "算法",
          "link": "/algorithms/tree.md"
        },
        {
          "text": "框架",
          "children": [
            {
              "text": "Vue",
              "children": [
                "/zh/vue/cli.md"
              ]
            },
            {
              "text": "React",
              "children": [
                "/react"
              ]
            }
          ]
        },
        {
          "text": "每日一题",
          "link": "/leetcode/january.md"
        },
        {
          "text": "打包工具",
          "children": [
            {
              "text": "Vite",
              "children": [
                "/zh/reference/cli.md"
              ]
            },
            {
              "text": "Webpack",
              "children": [
                "/webpack"
              ]
            },
            {
              "text": "Rollup",
              "children": [
                "/rollup"
              ]
            }
          ]
        },
        {
          "text": "文章",
          "children": [
            {
              "text": "算法",
              "children": [
                "/article/pnpm.md",
                "/article/dp.md",
                "/article/browser-finger.md"
              ]
            }
          ]
        }
      ],
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言",
      "selectLanguageAriaLabel": "选择语言",
      "sidebar": {
        "/algorithms/": [
          {
            "text": "算法",
            "children": [
              "/algorithms/tree.md",
              "/algorithms/dp.md",
              "/algorithms/linklist.md",
              "/algorithms/graph.md",
              "/algorithms/math.md"
            ]
          }
        ],
        "/leetcode/": [
          {
            "text": "每日一题",
            "children": [
              "/leetcode/january.md",
              "/leetcode/february.md",
              "/leetcode/contest.md"
            ]
          }
        ],
        "/article/": [
          {
            "text": "文章",
            "children": [
              "/article/pnpm.md",
              "/article/dp.md",
              "/article/browser-finger.md"
            ]
          }
        ]
      },
      "editLinkText": "在 GitHub 上编辑此页",
      "lastUpdatedText": "上次更新",
      "contributorsText": "贡献者",
      "tip": "提示",
      "warning": "注意",
      "danger": "警告",
      "notFound": [
        "这里什么都没有",
        "我们怎么到这来了？",
        "这是一个 404 页面",
        "看起来我们进入了错误的链接"
      ],
      "backToHome": "返回首页",
      "openInNewWindow": "在新窗口打开",
      "toggleDarkMode": "切换夜间模式",
      "toggleSidebar": "切换侧边栏"
    },
    "/zh/": {
      "selectLanguageName": "简体中文"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
