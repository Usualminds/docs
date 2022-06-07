# ts 源码解析
- [ts-source-code](https://github.com/microsoft/TypeScript/blob/main/src/compiler/core.ts)
- [Ast 分析](https://astexplorer.net/)

## compile flow
flow chart
```ts
sourceCode--scanner--token--parse--ast--binder--checker--transformer--emitter
```
## debugger flow
```shell
yarn 
yarn run build:compiler

.vscode/launch.json
```

`launch.json` config
```json
{
    "configurations": [
        {
            "name": "调试 ts 源码",
            "program": "${workspaceFolder}/test.js",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "args": [],
            "type": "node"
        }
    ]
}
```

`test.js`
```ts
const ts = require("./built/local/typescript");

const filename = "./input.ts";
const program = ts.createProgram([filename], {
    allowJs: false
});
const sourceFile = program.getSourceFile(filename);
const typeChecker = program.getTypeChecker();

function visitNode(node) {
    if (node.kind === ts.SyntaxKind.TypeReference)  {
        const type = typeChecker.getTypeFromTypeNode(node);

        debugger;
    }

    node.forEachChild(child =>
        visitNode(child)
    );
}

visitNode(sourceFile);
```



