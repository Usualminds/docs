import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/theroy/': [
        {
            text: '框架',
            children: [
                {
                    text: 'Vue',
                    children: [
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
}
