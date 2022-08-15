class MyCircularDeque {
    private statck: number[]
    private front: number
    private end: number
    private max: number

    constructor(k: number) {
        this.max = k + 1
        this.front = 0
        this.end = 0
        this.statck = []
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false

        this.front = (this.front - 1 + this.max) % this.max
        this.statck[this.front] = value

        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false

        this.statck[this.end] = value
        this.end = (this.end + 1) % this.max

        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false

        this.front = (this.front + 1) % this.max

        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false

        this.end = (this.end - 1 + this.max) % this.max
        return true
    }

    getFront(): number {
        if (this.isEmpty()) return -1

        return this.statck[this.front]
    }

    getRear(): number {
        if (this.isEmpty()) return -1

        return this.statck[(this.end - 1 + this.max) % this.max]
    }

    isEmpty(): boolean {
        return this.front === this.end
    }

    isFull(): boolean {
        return (this.end + 1) % this.max === this.front
    }
}