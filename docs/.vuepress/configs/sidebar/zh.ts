import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/base/': [{
        text: '基础',
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
                    '/base/ts/grammer.md',
                    '/base/ts/deep.md',
                    '/base/ts/practise.md'
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
    }],
    '/theroy/': [
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
    ],

    '/algorithms/': [
        {
            text: '算法',
            children: [
                '/algorithms/sort.md',
                '/algorithms/tree.md',
                '/algorithms/dp.md',
                '/algorithms/linklist.md',
                '/algorithms/graph.md',
                '/algorithms/math.md',
            ],
        },
    ],
    '/leetcode/': [
        {
            text: '每日一题',
            children: [
                '/leetcode/april.md',
                '/leetcode/february.md',
                '/leetcode/january.md',
                '/leetcode/contest.md',
            ],
        },
    ],
    '/article/': [
        {
            text: '文章',
            children: [
                '/article/project.md',
                '/article/pnpm.md',
                '/article/dp.md',
                '/article/browser-finger.md',
            ],
        },
    ],
    '/design/': [
        {
            text: '设计模式',
            link: '/design/index.md',
        },
    ]
}
