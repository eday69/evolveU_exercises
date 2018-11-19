class Node {
    constructor(subject, amount) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
    }
}

class LinkedList extends Node {

    constructor(subject, value) {
        super();
        let newNode = new Node(subject, value);

        this.head = newNode;
        this.length = 1;
    }

    showAll() {
        let ptr = this.head;
        let str = `head--><div class='myNode'>${ptr.subject} : ${ptr.amount}</div>`;
        while (ptr.forwardNode !== null) {
            ptr = ptr.forwardNode;
            str += `--><div class='myNode'>${ptr.subject} : ${ptr.amount}</div>`;
        }
        return str;
    }

    add(subject, amount) {
        let ptr = this.head;
        while (ptr.forwardNode !== null) {
            ptr = ptr.forwardNode;
        }
        ptr.forwardNode = new Node(subject, amount);
        ++this.length;
    }

    firstNode() {
        let ptr = this.head;
        console.log('en firstNode', ptr, ptr.subject);
        return ptr;
    }

    show(ptr) {
        console.log(ptr);
        return `${ptr.subject} : ${ptr.amount}`;
    }

    nextNode(ptr) {
        return ptr.forwardNode ? ptr.forwardNode : null;
    }

    insertNode(ptr, subject, amount) {
        let temp_ptr = ptr.forwardNode;
        ptr.forwardNode = new Node(subject, amount);
        ptr.forwardNode.forwardNode = temp_ptr;
    }

}
export default { Node, LinkedList };
