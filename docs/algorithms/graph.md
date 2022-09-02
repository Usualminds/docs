# 图论
> ：point_right： 
[Wiki 链接](https://zh.wikipedia.org/wiki/%E5%9B%BE%E8%AE%BA/)

图是由若干给定的顶点及连接两顶点的边所构成的图形，这种图形通常用来描述某些事物之间的某种特定关系。顶点用于代表事物，连接两顶点的边则用于表示两个事物间具有这种关系。

## 图的分类
- **无向图**：图中任意两个顶点之间的边都是没有方向的
- **有向图**：图中任意两个顶点之间的边都是有方向的
- **加权图**：图中的每条边都带有一个相关的权重。权重可以是任何一种度量，比如时间，距离，尺寸等。生活中最常见的 “加权图” 应该就是我们的地图

## 算法

#### Quick Find

```ts
class QuickFind {
    private root: number[] = []

    constructor(size: number) {
        this.root = new Array(size)
        this.init(size)
    }

    private init(size) {
        for (let i = 0; i < size; i++){
            this.root[i] = i
        }
    }

    public find(value: number) {
        return this.root[value]
    }

    public union(x: number, y: number) {
        let rootX = this.find(x), rootY = this.find(y)

        if (rootX !== rootY) {
            for (let i = 0; i < this.root.length; i++){
                if (this.root[i] = rootY) {
                    this.root[i] = rootX
                }
            }
        }
    }

    public connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y)
    }
}
```
#### Quick Union
```ts
class QuickUnion {
    private root: number[] = []

    constructor(size: number) {
        this.root = new Array(size)
        this.init(size)
    }

    private init(size) {
        for (let i = 0; i < size; i++){
            this.root[i] = i
        }
    }

    public find(value: number) {
        while (value !== this.root[value]) {
            value = this.root[value]
        }

        return value
    }

    public union(x: number, y: number) {
        let rootX = this.find(x), rootY = this.find(y)

        if (rootX !== rootY) {
            this.root[rootY] = rootX
        }
    }

    public connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y)
    }
}
```

#### 优化并查集
- 按秩合并
```ts
class QuickUnion {
    private root: number[] = []
    private rank: number[] = []

    constructor(size: number) {
        this.root = new Array(size)
        this.rank = new Array(size)

        this.init(size)
    }

    private init(size) {
        for (let i = 0; i < size; i++){
            this.root[i] = i
            this.rank[i] = 1
        }
    }

    public find(value: number) {
        while (value !== this.root[value]) {
            value = this.root[value]
        }

        return value
    }

    public union(x: number, y: number) {
        let rootX = this.find(x), rootY = this.find(y)

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY
            } else {
                this.root[rootY] = rootX
                this.rank[rootX]++
            }
        }
    }

    public connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y)
    }
}
```

- 路径压缩
```ts
class QuickUnion {
    private root: number[] = []
    private rank: number[] = []

    constructor(size: number) {
        this.root = new Array(size)

        this.init(size)
    }

    private init(size) {
        for (let i = 0; i < size; i++){
            this.root[i] = i
        }
    }

    public find(value: number) {
        while (value !== this.root[value]) {
            value = this.root[value]
        }

        return this.root[value] = this.find(this.root[value])
    }

    public union(x: number, y: number) {
        let rootX = this.find(x), rootY = this.find(y)

        if (rootX !== rootY) {
            this.root[rootY] = rootX
        }
    }

    public connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y)
    }
}
```

- 最终版本
```ts
class QuickUnion {
    private root: number[] = []
    private rank: number[] = []

    constructor(size: number) {
        this.root = new Array(size)
        this.rank = new Array(size)

        this.init(size)
    }

    private init(size) {
        for (let i = 0; i < size; i++){
            this.root[i] = i
            this.rank[i] = 1
        }
    }

    public find(value: number) {
        while (value !== this.root[value]) {
            value = this.root[value]
        }

        return this.root[value] = this.find(this.root[value])
    }

    public union(x: number, y: number) {
        let rootX = this.find(x), rootY = this.find(y)


        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY
            } else {
                this.root[rootY] = rootX
                this.rank[rootX]++
            }
        }
    }

    public connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y)
    }
}
```

> 参考链接
- [图](https://leetcode-cn.com/leetbook/read/graph/r3sizg/)
