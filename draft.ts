class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
class MyLinkedList {
    head: ListNode
    size: number

    constructor() {
        this.size = 0;
        this.head = null
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1

        let node: ListNode = this.head;

        for (let i: number = 0; i < index; i++) {
            node = node.next;
        }

        return node.val
    }

    getNode(index: number): ListNode {
        if (index < 0 || index >= this.size) return

        let node: ListNode = this.head;
        for (let i: number = 0; i < index; i++) {
            node = node.next;
        }
        return node
    }

    addAtHead(val: number): void {
        const oldHead: ListNode = this.head;
        this.head = new ListNode(val, oldHead);
        this.size++;
    }


    addAtTail(val: number): void {
        if (this.size === 0) {
            this.size++;
            this.head = new ListNode(val, null);
            return;
        }

        const prevNode: ListNode = this.getNode(this.size - 1)
        prevNode.next = new ListNode(val, null)

        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) return

        if (index <= 0) {
            return this.addAtHead(val)
        }
        const prevNode: ListNode = this.getNode(index - 1)

        const node: ListNode = prevNode.next
        prevNode.next = new ListNode(val, node)

        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return

        if (index === 0) {
            this.head = this.head.next
            this.size--
            return
        }

        const prevNode: ListNode = this.getNode(index - 1)
        prevNode.next = prevNode.next.next

        this.size--;
    }
}
