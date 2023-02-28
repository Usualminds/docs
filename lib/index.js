module.exports = function (plop) {
    plop.setGenerator("article", {
        description: "新增文章",
        prompts: [
            {
                type: "input",
                name: "article",
                message: "请输入文章名称：",
                default: "article",
            },
        ],
        actions: (data) => {
            const name = "{{article}}";
            const actions = [
                {
                    type: "add",
                    path: `../docs/article/${name}.md`,
                    templateFile: "./views/article.hbs",
                    abortOnFail: true,
                },
                {
                    type: "append",
                    path: `../docs/.vuepress/configs/navbar/zh.ts`,
                    pattern: /\/\* inject \*\//,
                    template: `                    '/article/${name}.md',`,
                },
                {
                    type: "append",
                    path: `../docs/.vuepress/configs/sidebar/zh.ts`,
                    pattern: /\/\* injectSider \*\//,
                    template: `                '/article/${name}.md',`,
                },
            ];

            return actions;
        },
    });
    plop.setGenerator("business", {
        description: "新增业务文章",
        prompts: [
            {
                type: "input",
                name: "business",
                message: "请输入文章名称：",
                default: "business",
            },
        ],
        actions: (data) => {
            const name = "{{business}}";
            const actions = [
                {
                    type: "add",
                    path: `../docs/business/${name}.md`,
                    templateFile: "./views/article.hbs",
                    abortOnFail: true,
                },
            ];

            return actions;
        },
    });
};
