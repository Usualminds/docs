class LRUCache {
    max: number = 0
    cache: Map<number, number>

    constructor(capacity: number) {
        this.max = capacity
        this.cache = new Map()
    }
    get(key: number): number {
        let value = this.cache.get(key)
        if (value !== undefined) {
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        } else {

            return -1
        }
    }
    put(key: number, value: number): void {
        let val = this.cache.get(key)
        if (val !== undefined) {
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            if (this.cache.size >= this.max) {
                this.cache.delete(this.cache.keys().next().value)
            }

            this.cache.set(key, value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */