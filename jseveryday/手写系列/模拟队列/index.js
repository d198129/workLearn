// 用数组模拟队列在数据量较小的时候似乎没有什么影响，当数据量较大的时候性能就会严重下降
// 这是因为在底层实现中，数组是顺序存储的，当shift的时候会先取出队列首端的一个元素，整个队列往前移，时间复杂度是O(n)
class Node {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}

export default class Queue {
    _head; // 头
    _tail; // 尾
    _size; // 大小
    constructor() {
        this.clear()
    }
    enqueue(value) {
        const node = new Node(value);
        if (this._head) {
            this._tail.next = node;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this._size++;
    }
    dequeue() {
        const current = this._head;
        if (!current) {
            return;
        }
        this._head = this._head.next;
        this._size--;
        return current.value;
    }
    clear() {
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    * [Symbol.iterator]() {
        let current = this._head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}