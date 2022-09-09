import { defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'
import { defaultTheme } from '@vuepress/theme-default'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'

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
    description: '前端 算法 数据结构 工程化',

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
        },
    }),
    plugins:[
      searchPlugin({
        locales: {
          '/': {
            placeholder: '搜索'
          }
        },
        maxSuggestions: 10,
        isSearchable: (page) => page.path !== '/',
      })
    ]
})
