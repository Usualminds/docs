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
                    '/base/ts/grammer.md',
                    '/base/ts/deep.md',
                    '/base/ts/practise.md',
                    '/base/ts/ts_source_code.md'
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
        children: [
            {
                text: "数组",
                children: [
                    '/algorithms/array.md',
                    '/algorithms/hash.md',
                    '/algorithms/sort.md',
                    '/algorithms/tree.md',
                    '/algorithms/dp.md',
                    '/algorithms/linklist.md',
                    '/algorithms/graph.md',
                    '/algorithms/math.md',
                ]
            },
            {
                text: 'Leetcode',
                children: [
                    '/algorithms/leetcode/date.md',
                    '/algorithms/leetcode/smart.md',
                    '/algorithms/leetcode/june.md',
                    '/algorithms/leetcode/april.md',
                    '/algorithms/leetcode/february.md',
                    '/algorithms/leetcode/january.md',
                    '/algorithms/leetcode/contest.md',
                ],
            },
        ]
    },
    {
        text: '设计模式',
        link: '/design/index.md',
        children: [
            {
                text: '设计模式',
                children: [
                    '/design/index.md',
                    '/design/single.md',
                    '/design/factory.md',
                    '/design/proxy.md',
                    '/design/strategy.md',
                    '/design/watch.md',
                ]
            },
        ]
    },
    {
        text: '框架',
        children: [
            {
                text: 'Vue',
                children: [
                    '/theroy/vue/nextTick.md',
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
        text: '工程化',
        link: '/utils/babel/basic.md',
        children: [
            {
                text: 'Babel',
                children: [
                    '/utils/babel/basic.md',
                ],
            },
            {
                text: 'Vite',
                children: [
                    '/utils/vite/basic.md',
                ],
            },
            {
                text: 'Webpack',
                children: [
                    '/utils/webpack/basic.md',
                ],
            },
            {
                text: 'Rollup',
                children: [
                    '/utils/rollup/basic.md',
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
                    /* inject */
                    '/article/nginx.md',
                    '/article/taicss.md',
                    '/article/nim.md',
                    '/article/lru.md',
                    '/article/string.md',
                    '/article/project.md',
                    '/article/pnpm.md',
                    '/article/dp.md',
                    '/article/browser-finger.md',
                ]
            }
        ]
    },
    {
        text: '业务',
        children: [
            {
                text: '基础业务',
                children: [
                    '/business/basic.md',
                ]
            }
        ]
    },
    {
        text: '香港',
        children: [
            {
                text: '港交所',
                children: [
                    '/hk/basic.md',
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
                    '/test/shopee.md',
                    '/test/finpoints.md',
                    '/test/mego.md',
                    '/test/ht.md',
                    '/test/ft.md',
                ]
            }
        ]
    },
]
