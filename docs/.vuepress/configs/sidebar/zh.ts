import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
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
                '/leetcode/january.md',
                '/leetcode/february.md',
                '/leetcode/contest.md',
            ],
        },
    ],
    '/article/': [
        {
            text: '文章',
            children: [
                '/article/dp.md',
                '/article/browser-finger.md',
            ],
        },
    ],
}
