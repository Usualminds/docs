import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/algorithms/': [
        {
            text: '算法',
            children: [
                '/algorithms/README.md',
                '/algorithms/dp.md',
                '/algorithms/linklist.md',
                '/algorithms/graph.md',
            ],
        },
    ],
    '/leetcode/': [
        {
            text: '每日一题',
            children: [
                '/leetcode/january.md',
                '/leetcode/february.md',
            ],
        },
    ],
    '/zh/reference/': [
        {
            text: 'VuePress 参考',
            children: [
                '/zh/reference/cli.md',
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
            ],
        },
    ],
}
