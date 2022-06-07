# 实战

## QueryPrase
```ts
type ParseParam<Param extends string> = Param extends `${infer Key}=${infer Value}` ? {
    [K in Key]: Value
} : Record<string, any>


type MergeValue<One, Other> = One extends Other ? One : Other extends unknown[] ? [One, ...Other] : [One, Other]

type MergeParams<OneParams extends Record<string, any>, OtherParams extends Record<string, any>> = {
    readonly [Key in keyof OneParams |  keyof OtherParams] : 
    Key extends keyof OneParams ? Key extends keyof OtherParams ? MergeValue<OneParams[Key], OtherParams[Key]> :OneParams[Key]:Key extends keyof OtherParams ? OtherParams[Key] : never
}

type ParseQueryToString<Query extends string> =  Query extends `${infer Param}&${infer Rest}` ? MergeParams<ParseParam<Param>, ParseQueryToString<Rest>> : ParseParam<Query>


function parseQuery<Querys extends string>(query: Querys): ParseQueryToString<Querys> {
    if (!query || !query.length) return {} as any

    const queryObj = {} as any

    const querys = query.split('&')

    querys.forEach((item) => {
        const [key, value] = item.split('=')

        if (queryObj[key]) {
            if (Array.isArray(queryObj[key])) {
                queryObj[key].push(value)
            } else {
                queryObj[key] = [queryObj[key], value]
            }

        } else {
            queryObj[key] = value
        }

    })
    return queryObj
}

const res = parseQuery('a=1&b=2&c=3&a=9')
```

## KebabCaseToCamelCase

```ts
type KebabCaseToCamelCase<Str extends string> = Str extends `${ infer Item } -${ infer Rest } ` ? `${ Item } ${ KebabCaseToCamelCase<Capitalize<Rest>>}`: Str

type Turning = KebabCaseToCamelCase<'system-event-model'>
```

## PartialSpecialKey
将对象的指定属性或方法变为可选
```ts
// copy Obj
type Copy<Obj extends Record<string, any>> = {
    [Key in keyof Obj] : Obj[Key]
}

type PartialSpecialKey<
    Obj extends Record<string, any>, 
    Key extends keyof any
> = Copy<Partial<Pick<Obj, Extract<keyof Obj, Key>>> & Omit<Obj, Key>>

type All = {
    name: string
    age: number
    sex: boolean

    output: () => void
}

type PickTwo = PartialSpecialKey<All, 'name' | 'output'>

// output

// type PickTwo = {
//     name?: string
//     output?: () => void

//     age: number
//     sex: boolean
// }
```

## override
```ts
// function
declare function Ok(test: string): string;
declare function Ok(test: string): number;

Ok()

// interface
interface T {
    (ok: string): void
    (ok: number): string
}

declare const func: T

// union
type Union = ((name: string) => number) & ((name: number) => string)
declare const un: Union
un()
```

## babel-ts type check
`Sourcecode`
```ts
const { transformFromAstSync } = require('@babel/core');
const parser = require('@babel/parser');
const typeCheckerPlugin = require('./plugin/type-checker2');


const sourceCode = `
    let name: string = 111;
`;

const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['typescript']
});

const { code } = transformFromAstSync(ast, sourceCode, {
    plugins: [[typeCheckerPlugin, {
        fix: true
    }]],
    comments: true
});
```
`plugin`
```ts
const { declare } = require('@babel/helper-plugin-utils');

function resolveType(targetType) {
    const tsTypeAnnotationMap = {
        'TSStringKeyword': 'string'
    }
    switch (targetType.type) {
        case 'TSTypeAnnotation':
            return tsTypeAnnotationMap[targetType.typeAnnotation.type];
        case 'NumberTypeAnnotation': 
            return 'number';
    }
}

function noStackTraceWrapper(cb) {
    const tmp = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    cb && cb(Error);
    Error.stackTraceLimit = tmp;
}

const noFuncAssignLint = declare((api, options, dirname) => {
    api.assertVersion(7);

    return {
        pre(file) {
            file.set('errors', []);
        },
        visitor: {
            VariableDeclarator(path, state) {
                const errors = state.file.get('errors');

                const idType = resolveType(path.get('id').getTypeAnnotation());
                const initType = resolveType(path.get('init').getTypeAnnotation());

                if (idType !== initType) {
                    noStackTraceWrapper((Error) => {
                        errors.push(path.get('init').buildCodeFrameError(`${initType} can not assign to ${idType}`,Error));
                    })
                }
            }
        },
        post(file) {
            console.log(file.get('errors'));
        }
    }
});

module.exports = noFuncAssignLint;
```