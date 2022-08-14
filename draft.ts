class LFUCache {
    private max: number
    private count: number
    private times: Map<number, number>
    private values: Map<number, number>
    private map: Map<number, Set<number>>

    constructor(capacity: number) {
        this.max = capacity
        this.count = 0
        this.times = new Map()
        this.values = new Map()
        this.map = new Map()
    }

    get(key: number): number {
        if (this.values.has(key)) {
            this.update(key)
            return this.values.get(key)
        }

        return -1
    }

    put(key: number, value: number): void {
        if (this.max === 0) return

        if (this.values.has(key)) {
            this.values.set(key, value)
            this.update(key)
        } else {
            if (this.max === this.values.size) {
                let minUse = this.map.get(this.count), minKey = minUse.keys().next().value

                minUse.delete(minKey)
                this.values.delete(minKey)
                this.times.delete(minKey)
            }

            this.values.set(key, value)

            let countSet = this.map.get(1) || new Set()
            countSet.add(key)

            this.map.set(1, countSet)
            this.times.set(key, 1)
            this.count = 1
        }
    }

    update(key: number): void {
        let time = this.times.get(key), countSet = this.map.get(time)

        if (this.count === time && countSet.size === 1) {
            this.count += 1
        }

        time++
        countSet.delete(key)
        countSet = this.map.get(time) || new Set()
        countSet.add(key)

        this.map.set(time, countSet)
        this.times.set(key, time)
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */