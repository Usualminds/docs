import { defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
    // 站点配置
    base: '/',

    head: [
        ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    lang: 'en-US',
    title: 'Daily Knowledge',
    description: '静言思之 前端 算法 数据结构',

    locales: {
        '/zh/': {
            lang: 'zh-CN',
            title: '你好',
            description: '它将会在 /zh/ 子路径下生效',
          }
    },

    theme: defaultTheme({
        locales: {
            '/': {
                navbar: navbar.zh,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                // sidebar
                sidebar: sidebar.zh,
                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
            },
        },
    }),
    plugins:[
        docsearchPlugin({
            appId: 'QYD6M33QBH',
            apiKey: '6738d0d45aacc26731f0401e59b1e8a6',
            indexName: 'daily-knowledge',
            searchParameters: {
              facetFilters: ['tags:v2'],
            },
            locales: {
              '/': {
                placeholder: '搜索文档',
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                  },
                  modal: {
                    searchBox: {
                      resetButtonTitle: '清除查询条件',
                      resetButtonAriaLabel: '清除查询条件',
                      cancelButtonText: '取消',
                      cancelButtonAriaLabel: '取消',
                    },
                    startScreen: {
                      recentSearchesTitle: '搜索历史',
                      noRecentSearchesText: '没有搜索历史',
                      saveRecentSearchButtonTitle: '保存至搜索历史',
                      removeRecentSearchButtonTitle: '从搜索历史中移除',
                      favoriteSearchesTitle: '收藏',
                      removeFavoriteSearchButtonTitle: '从收藏中移除',
                    },
                    errorScreen: {
                      titleText: '无法获取结果',
                      helpText: '你可能需要检查你的网络连接',
                    },
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭',
                      searchByText: '搜索提供者',
                    },
                    noResultsScreen: {
                      noResultsText: '无法找到相关结果',
                      suggestedQueryText: '你可以尝试查询',
                      reportMissingResultsText: '你认为该查询应该有结果？',
                      reportMissingResultsLinkText: '点击反馈',
                    },
                  },
                },
              },
            },
        }),
    ]
})
