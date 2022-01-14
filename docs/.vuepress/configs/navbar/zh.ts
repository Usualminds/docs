import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {
        text: '算法',
        link: '/algorithms/tree.md',
    },
    {
        text: '框架',
        children: [
            {
                text: 'Vue',
                children: [
                    '/zh/vue/cli.md',
                ],
            },
            {
                text: 'React',
                children: [
                    '/react',
                ],
            },
        ],
    },
    {
        text: '每日一题',
        link: '/leetcode/january.md'
    },
    {
        text: '打包工具',
        children: [
            {
                text: 'Vite',
                children: [
                    '/zh/reference/cli.md',
                ],
            },
            {
                text: 'Webpack',
                children: [
                    '/webpack',
                ],
            },
            {
                text: 'Rollup',
                children: [
                    '/rollup',
                ],
            },
        ],
    },
    {
        text: '文章',
        children: [
            {
                text: '算法',
                children: [
                    '/article/dp.md',
                    '/article/browser-finger.md',
                ]
            }
        ]
    },
]
