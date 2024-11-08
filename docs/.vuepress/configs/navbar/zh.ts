import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
    {
        text: '博客',
        link: 'https://qjidea.com'
    },
    {
        text: "基础",
        link: "/base/js/basic.md",
        children: [
            // {
            //     text: "Rust",
            //     children: [
            //         "/base/rust/basic.md",
            //         "/base/rust/variable.md",
            //         "/base/rust/practice.md",
            //     ],
            // },
            {
                text: "Javascript",
                children: [
                    "/base/js/basic.md",
                    "/base/js/type.md",
                    "/base/js/prototype.md",
                    "/base/js/this.md",
                    "/base/js/function.md",
                    "/base/js/class.md",
                    "/base/js/event.md",
                    "/base/js/code.md",
                    "/base/js/others.md",
                ],
            },
            {
                text: "Typescript",
                children: [
                    "/base/ts/basic.md",
                    "/base/ts/grammer.md",
                    "/base/ts/deep.md",
                    "/base/ts/practise.md",
                    "/base/ts/ts_source_code.md",
                ],
            },
            {
                text: "CSS",
                children: ["/base/css/basic.md"],
            },
            {
                text: "H5",
                children: ["/base/h5/basic.md"],
            },
        ],
    },
    {
        text: "算法",
        children: [
            {
                text: "数据结构",
                children: [
                    "/algorithms/array.md",
                    "/algorithms/hash.md",
                    "/algorithms/sort.md",
                    "/algorithms/tree.md",
                    "/algorithms/dp.md",
                    "/algorithms/linklist.md",
                    "/algorithms/graph.md",
                    "/algorithms/math.md",
                ],
            },
            {
                text: "数据库",
                children: ["/algorithms/sql/basic.md"],
            },
            {
                text: "Leetcode",
                children: [
                    "/algorithms/leetcode/date.md",
                    "/algorithms/leetcode/smart.md",
                    "/algorithms/leetcode/june.md",
                    "/algorithms/leetcode/april.md",
                    "/algorithms/leetcode/february.md",
                    "/algorithms/leetcode/january.md",
                    "/algorithms/leetcode/contest.md",
                ],
            },
            {
                text: "答题",
                children: [
                    "/test/shopee.md",
                    "/test/finpoints.md",
                    "/test/mego.md",
                    "/test/ht.md",
                    "/test/ft.md",
                ],
            },
        ],
    },
    {
        text: "编程范式",
        link: "/design/index.md",
        children: [
            {
                text: "面向对象编程",
                children: ["/design/oop/basic.md"],
            },
            {
                text: "函数式编程",
                children: [
                    "/design/function/basic.md",
                    "/design/function/immutable.md",
                    "/design/function/rules.md",
                ],
            },
            {
                text: "设计模式",
                children: [
                    "/design/patterns/index.md",
                    "/design/patterns/single.md",
                    "/design/patterns/factory.md",
                    "/design/patterns/proxy.md",
                    "/design/patterns/strategy.md",
                    "/design/patterns/watch.md",
                ],
            },
        ],
    },
    {
        text: "框架",
        children: [
            {
                text: "Debugger",
                link: "/utils/debugger/basic.md",
                children: [
                    {
                        text: "浏览器",
                        link: "/utils/debugger/chrome/basic.md",
                    },
                    {
                        text: "Vue",
                        link: "/utils/debugger/vue/basic.md",
                    },
                    {
                        text: "Vscode",
                        link: "/utils/debugger/vscode/basic.md",
                    },
                ],
            },
            {
                text: "Vue",
                children: [
                    "/theroy/vue/nextTick.md",
                    "/theroy/vue/reactive.md",
                    "/theroy/vue/renderer.md",
                    "/theroy/vue/compiler.md",
                    "/theroy/vue/component.md",
                ],
            },
            {
                text: "React",
                children: ["/theroy/react/"],
            },
        ],
    },
    {
        text: "工程化",
        link: "/utils/babel/basic.md",
        children: [
            {
                text: "Babel",
                children: ["/utils/babel/basic.md"],
            },
            {
                text: "Vite",
                children: ["/utils/vite/basic.md"],
            },
            {
                text: "Webpack",
                children: ["/utils/webpack/basic.md"],
            },
            {
                text: "Rollup",
                children: ["/utils/rollup/basic.md"],
            },
        ],
    },
    {
        text: "文章",
        children: [
            {
                text: "技术",
                children: [
                    /* inject */
                    '/article/cursor.md',
                    '/article/css-timeline.md',
                    '/article/chatgpt.md',
                    // '/article/apple-grow.md',
                    // "/article/year.md",
                    "/article/nginx.md",
                    "/article/taicss.md",
                    "/article/nim.md",
                    "/article/lru.md",
                    "/article/string.md",
                    "/article/project.md",
                    "/article/pnpm.md",
                    "/article/dp.md",
                    "/article/browser-finger.md",
                ],
            },
            {
                text: "IOS开发",
                children: [
                    "/article/ios/1-env.md",
                    "/article/ios/2-todo-list.md",
                ],
            },
            {
                text: "读书笔记",
                children: [
                    "/article/books/elon.md",
                    "/article/books/citylove.md",
                    "/article/books/education.md",
                    "/article/books/personal-anxiety.md",
                    "/article/books/maom-thinking.md",
                    "/article/books/not-like-lesson.md",
                    "/article/books/not-like-lesson-next.md",
                ],
            },
            {
                text: "服务",
                children: [
                    "/article/services/picture-cleaner.md",
                ],
            },
        ],
    },
    {
        text: "翻译",
        children: [
            {
                text: "前端",
                children: [
                    "/translation/5-advanced-typescript-tips-to-make-you-a-better-programmer.md",
                    "/translation/dependency-injection-in-typescript.md",
                    "/translation/ensure-javascript-code-quality-with-husky-and-hooks.md",
                    "/translation/how-to-become-a-google-developer-expert-gde-a-practical-guide.md",
                    "/translation/improve-page-rendering-speed-using-only-css.md",
                    "/translation/leave-javascript-aside-mint-is-a-great-language-for-building-web-apps.md",
                    "/translation/new-in-devtools-92.md",
                    "/translation/stage-3-review.md",
                    "/translation/using-web-workers-to-speed-up-javascript-applications.md",
                    "/translation/we-collected-500-000-browser-fingerprints-here-is-what-we-found.md",
                    "/translation/will-webtransport-replace-webrtc-in-near-future.md",
                ],
            },
            {
                text: "Webpack",
                children: [
                    "/translation/webpack/stylus-loader.md",
                    "/translation/webpack/stats.md",
                ],
            },
        ],
    },
    {
        text: 'GitHub',
        link: 'https://github.com/Usualminds/docs'
    },
    // {
    //     text: "业务",
    //     children: [
    //         {
    //             text: "职业规划",
    //             children: ["/business/basic.md"],
    //         },
    //         {
    //             text: "香港",
    //             children: ["/business/hk/basic.md"],
    //         },
    //     ],
    // },

];
