class LinkedList {
    insert(data) {
        if (this.head === null) {
            this.head = new _Node(data);
            return;
        }

        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = new _Node(data);
    }

    deleteFirst() {
        if (this.head === null) {
            return;
        }

        this.head = this.head.next;
    };

    isEmpty() {
        return this.head === null;
    };
}