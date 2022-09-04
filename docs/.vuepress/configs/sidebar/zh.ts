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
    }],
    '/theroy/': [
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
    ],

    '/algorithms/': [
        {
            text: '算法',
            children: [
                '/algorithms/array.md',
                '/algorithms/hash.md',
                '/algorithms/sort.md',
                '/algorithms/tree.md',
                '/algorithms/dp.md',
                '/algorithms/linklist.md',
                '/algorithms/graph.md',
                '/algorithms/math.md',
            ],
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
    ],
    '/article/': [
        {
            text: '文章',
            children: [
                /* injectSider */
                '/article/nginx.md',
                '/article/taicss.md',
                '/article/nim.md',
                '/article/string.md',
                '/article/lru.md',
                '/article/project.md',
                '/article/pnpm.md',
                '/article/dp.md',
                '/article/browser-finger.md',
            ],
        },
    ],
    '/translation/': [
        {
            text: '翻译',
            children: [
                {
                    text: '前端',
                    children: [
                        '/translation/5-advanced-typescript-tips-to-make-you-a-better-programmer.md',
                        '/translation/dependency-injection-in-typescript.md',
                        '/translation/ensure-javascript-code-quality-with-husky-and-hooks.md',
                        '/translation/how-to-become-a-google-developer-expert-gde-a-practical-guide.md',
                        '/translation/improve-page-rendering-speed-using-only-css.md',
                        '/translation/leave-javascript-aside-mint-is-a-great-language-for-building-web-apps.md',
                        '/translation/new-in-devtools-92.md',
                        '/translation/stage-3-review.md',
                        '/translation/using-web-workers-to-speed-up-javascript-applications.md',
                        '/translation/we-collected-500-000-browser-fingerprints-here-is-what-we-found.md',
                        '/translation/will-webtransport-replace-webrtc-in-near-future.md',
                    ]
                }
            ]
        },
    ],
    '/design/': [
        {
            text: '设计模式',
            link: '/design/index.md',
            children: [
                '/design/index.md',
                '/design/single.md',
                '/design/factory.md',
                '/design/proxy.md',
                '/design/strategy.md',
                '/design/watch.md',
            ]
        },
    ],
    '/utils/': [
        {
            text: '工具',
            children: [
                {
                    text: 'Babel',
                    children: [
                        '/utils/babel/basic.md',
                        '/utils/babel/mini-babel.md',
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
    ],
    '/business/': [
        {
            text: '业务',
            children: [
                {
                    text: '基础业务',
                    children: [
                        '/business/basic.md',
                    ]
                },
                {
                    text: '港交所',
                    children: [
                        '/business/hk/basic.md',
                    ]
                },
           
            ]
        },
    ],
    '/test/': [
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
    ],
}
