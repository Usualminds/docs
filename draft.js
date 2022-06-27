const input = [
    {
        value: 110000,
        label: '北京市',
        parent: null,
        children: [
            110001,
            110002
        ]
    },
    {
        value: 110001,
        label: '东城区',
        parent: 110000,
        children: []
    },
    {
        value: 110002,
        label: '西城区',
        parent: 110000,
        children: []
    },
    {
        value: 130000,
        label: '河北省',
        parent: null,
        children: [
            130100
        ]
    },
    {
        value: 130100,
        label: '石家庄市',
        parent: 130000,
        children: [
            130102,
            130104
        ]
    },
    {
        value: 130102,
        label: '长安区',
        parent: 130100,
        children: []
    },
    {
        value: 130104,
        label: '桥西区',
        parent: 130100,
        children: []
    },
];
const output = [
    {
        value: 110000,
        label: '北京市',
        parent: null,
        children: [
            {
                value: 110001,
                label: '东城区',
                parent: 110000,
                children: []
            },
            {
                value: 110002,
                label: '西城区',
                parent: 110000,
                children: []
            }
        ]
    },
    {
        value: 130000,
        label: '河北省',
        parent: null,
        children: [
            {
                value: 130100,
                label: '石家庄市',
                parent: 130000,
                children: [
                    {
                        value: 130102,
                        label: '长安区',
                        parent: 130100,
                        children: []
                    },
                    {
                        value: 130104,
                        label: '桥西区',
                        parent: 130100,
                        children: []
                    }
                ]
            },
        ]
    },
];
function createTree(input) {
    input.forEach(item => {
        let child = item.children
        if (child.length !== 0) item.children = []
    })

    let map = input.reduce((pre, cur) => {
        pre[cur.value] = cur

        return pre
    }, [])

    let results = []
    for (let key in map) {
        let ele = map[key]

        if (ele.parent === null) {
            results.push(ele)
        } else {
            let parent = map[ele.parent]
            if (parent) {
                parent.children = parent.children ?? []
                parent.children.push(ele)
            }
        }
    }

    return results
}


console.log(createTree(input))