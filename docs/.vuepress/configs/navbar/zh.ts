import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {
        text: '基础',
        link: '/base/js/basic.md',
        children: [
            {
                text: 'Javascript',
                children: [
                    '/base/js/basic.md',
                    '/base/js/type.md',
                    '/base/js/prototype.md',
                    '/base/js/this.md',
                    '/base/js/event.md',
                    '/base/js/code.md',
                    '/base/js/others.md',
                ],
            },
            {
                text: 'Typescript',
                children: [
                    '/base/ts/basic.md',
                    '/base/ts/grammer.md'
                ],
            },
            {
                text: 'CSS',
                children: [
                    '/base/css/basic.md'
                ],
            },
            {
                text: 'H5',
                children: [
                    '/base/h5/basic.md'
                ],
            },
        ]
    },
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
                    '/theroy/vue/reactive.md',
                    '/theroy/vue/renderer.md',
                    '/theroy/vue/compiler.md',
                    '/theroy/vue/component.md',
                ],
            },
            {
                text: 'React',
                children: [
                    '/theroy/react/',
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
                    '/article/project.md',
                    '/article/pnpm.md',
                    '/article/dp.md',
                    '/article/browser-finger.md',
                ]
            }
        ]
    },
    {
        text: '答题',
        children: [
            {
                text: '题目',
                children: [
                    '/test/finpoints.md',
                ]
            }
        ]
    },
]
