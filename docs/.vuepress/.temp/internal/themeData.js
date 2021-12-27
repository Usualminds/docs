export const themeData = {
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "算法",
          "link": "/algorithms/"
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
          "link": ""
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
              "/algorithms/README.md"
            ]
          }
        ],
        "/zh/advanced/": [
          {
            "text": "深入",
            "children": [
              "/zh/advanced/architecture.md",
              "/zh/advanced/plugin.md",
              "/zh/advanced/theme.md"
            ]
          },
          {
            "text": "Cookbook",
            "children": [
              "/zh/advanced/cookbook/README.md",
              "/zh/advanced/cookbook/usage-of-client-app-enhance.md",
              "/zh/advanced/cookbook/adding-extra-pages.md",
              "/zh/advanced/cookbook/extending-a-theme.md",
              "/zh/advanced/cookbook/passing-data-to-client-code.md",
              "/zh/advanced/cookbook/markdown-and-vue-sfc.md"
            ]
          }
        ],
        "/zh/reference/": [
          {
            "text": "VuePress 参考",
            "children": [
              "/zh/reference/cli.md",
              "/zh/reference/config.md",
              "/zh/reference/frontmatter.md",
              "/zh/reference/components.md",
              "/zh/reference/plugin-api.md",
              "/zh/reference/theme-api.md",
              "/zh/reference/client-api.md",
              "/zh/reference/node-api.md"
            ]
          }
        ],
        "/zh/reference/bundler/": [
          {
            "text": "打包工具参考",
            "children": [
              "/zh/reference/bundler/vite.md",
              "/zh/reference/bundler/webpack.md"
            ]
          }
        ],
        "/zh/reference/default-theme/": [
          {
            "text": "默认主题参考",
            "children": [
              "/zh/reference/default-theme/config.md",
              "/zh/reference/default-theme/frontmatter.md",
              "/zh/reference/default-theme/components.md",
              "/zh/reference/default-theme/markdown.md",
              "/zh/reference/default-theme/styles.md"
            ]
          }
        ],
        "/zh/reference/plugin/": [
          {
            "text": "官方插件参考",
            "children": [
              {
                "text": "常用功能",
                "children": [
                  "/zh/reference/plugin/back-to-top.md",
                  "/zh/reference/plugin/container.md",
                  "/zh/reference/plugin/external-link-icon.md",
                  "/zh/reference/plugin/google-analytics.md",
                  "/zh/reference/plugin/medium-zoom.md",
                  "/zh/reference/plugin/nprogress.md",
                  "/zh/reference/plugin/register-components.md"
                ]
              },
              {
                "text": "内容搜索",
                "children": [
                  "/zh/reference/plugin/docsearch.md",
                  "/zh/reference/plugin/search.md"
                ]
              },
              {
                "text": "PWA",
                "children": [
                  "/zh/reference/plugin/pwa.md",
                  "/zh/reference/plugin/pwa-popup.md"
                ]
              },
              {
                "text": "语法高亮",
                "children": [
                  "/zh/reference/plugin/prismjs.md",
                  "/zh/reference/plugin/shiki.md"
                ]
              },
              {
                "text": "主题开发",
                "children": [
                  "/zh/reference/plugin/active-header-links.md",
                  "/zh/reference/plugin/debug.md",
                  "/zh/reference/plugin/git.md",
                  "/zh/reference/plugin/palette.md",
                  "/zh/reference/plugin/theme-data.md",
                  "/zh/reference/plugin/toc.md"
                ]
              }
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
