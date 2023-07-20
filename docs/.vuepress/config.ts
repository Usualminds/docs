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
    // h5
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    // seo
    ['meta', { name: 'keywords', content: 'algorithm front-end AI engineering data-structure developer chatgpt 前端 算法 数据结构 工程化' }],
    ['meta', { name: 'author', content: 'me@qjidea.com' }],
    ['meta', { property: "og:url", content: 'https://docs.qjidea.com/' }],
    ['meta', { property: "og:type", content: 'article' }],
    ['meta', { property: "og:category", content: 'algorithm front-end AI engineering data-structure developer chatgpt 前端 技术 算法 Vue 博客' }],
    ['meta', { property: "og:description", content: 'algorithm front-end AI engineering data-structure developer chatgpt 前端 技术 算法 Vue 博客' }],
    ['meta', { property: "og:site_name", content: '静言思之' }],
    ['meta', { property: "og:tag", content: 'algorithm front-end AI engineering data-structure developer chatgpt 前端 技术 算法 Vue 翻译' }],
    ['meta', { name: "twitter:site", content: '@minds_joe' }],
    ['meta', { name: "twitter:creator", content: '@minds_joe' }],
    ['meta', { property: "twitter:title", content: 'algorithm front-end AI engineering data-structure developer chatgpt' }],
    // JSON-ltd TODO:
    // gtag
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-S3EP2W1W5D",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'G-S3EP2W1W5D');"
    ],
    // google ads
    [
      "script",
      {
        async: true,
        crossorigin: 'anonymous',
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2935642389749184",
      },
    ],
    [
      // @ts-ignore
      "ins",
      {
        "class": "adsbygoogle",
        "style": "display:block",
        "data-ad-client": "ca-pub-2935642389749184",
        'data-ad-slot': "2384546911",
        'data-ad-format': "auto",
        'data-full-width-responsive': "true"
      }
    ],
    [
      "script",
      {},
      "(adsbygoogle = window.adsbygoogle || []).push({});"
    ],
  ],
  lang: 'en-US',
  title: ' ',
  description: '前端 算法 数据结构 工程化',

  theme: defaultTheme({
    logo: "/imgs/logo.png",
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
  markdown: {
    links: {
      internalTag: 'a',
      externalAttrs: {
        target: '_blank',
        rel: 'nofollow noopener noreferrer',
      }
    }
  },
  plugins: [
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
