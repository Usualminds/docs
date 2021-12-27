import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/algorithms/': [
    {
      text: '算法',
      children: [
        '/algorithms/README.md',
      ],
    },
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      children: [
        '/zh/advanced/architecture.md',
        '/zh/advanced/plugin.md',
        '/zh/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/zh/advanced/cookbook/README.md',
        '/zh/advanced/cookbook/usage-of-client-app-enhance.md',
        '/zh/advanced/cookbook/adding-extra-pages.md',
        '/zh/advanced/cookbook/extending-a-theme.md',
        '/zh/advanced/cookbook/passing-data-to-client-code.md',
        '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: 'VuePress 参考',
      children: [
        '/zh/reference/cli.md',
        '/zh/reference/config.md',
        '/zh/reference/frontmatter.md',
        '/zh/reference/components.md',
        '/zh/reference/plugin-api.md',
        '/zh/reference/theme-api.md',
        '/zh/reference/client-api.md',
        '/zh/reference/node-api.md',
      ],
    },
  ],
  '/zh/reference/bundler/': [
    {
      text: '打包工具参考',
      children: [
        '/zh/reference/bundler/vite.md',
        '/zh/reference/bundler/webpack.md',
      ],
    },
  ],
  '/zh/reference/default-theme/': [
    {
      text: '默认主题参考',
      children: [
        '/zh/reference/default-theme/config.md',
        '/zh/reference/default-theme/frontmatter.md',
        '/zh/reference/default-theme/components.md',
        '/zh/reference/default-theme/markdown.md',
        '/zh/reference/default-theme/styles.md',
      ],
    },
  ],
  '/zh/reference/plugin/': [
    {
      text: '官方插件参考',
      children: [
        {
          text: '常用功能',
          children: [
            '/zh/reference/plugin/back-to-top.md',
            '/zh/reference/plugin/container.md',
            '/zh/reference/plugin/external-link-icon.md',
            '/zh/reference/plugin/google-analytics.md',
            '/zh/reference/plugin/medium-zoom.md',
            '/zh/reference/plugin/nprogress.md',
            '/zh/reference/plugin/register-components.md',
          ],
        },
        {
          text: '内容搜索',
          children: [
            '/zh/reference/plugin/docsearch.md',
            '/zh/reference/plugin/search.md',
          ],
        },
        {
          text: 'PWA',
          children: [
            '/zh/reference/plugin/pwa.md',
            '/zh/reference/plugin/pwa-popup.md',
          ],
        },
        {
          text: '语法高亮',
          children: [
            '/zh/reference/plugin/prismjs.md',
            '/zh/reference/plugin/shiki.md',
          ],
        },
        {
          text: '主题开发',
          children: [
            '/zh/reference/plugin/active-header-links.md',
            '/zh/reference/plugin/debug.md',
            '/zh/reference/plugin/git.md',
            '/zh/reference/plugin/palette.md',
            '/zh/reference/plugin/theme-data.md',
            '/zh/reference/plugin/toc.md',
          ],
        },
      ],
    },
  ],
}
