class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null) {
        this.val = val;
        this.next = next;
    }
}

const reverseList = function (head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let prev = null;
    let current = head;
    let next = head.next;
    
    while(next !== null) {
        const tempNext = next;
        next = next.next;

        current.next = prev;

        prev = current;
        current = tempNext;
    }
    if (prev !== null) {
        current.next = prev;
    }

    return current;
}

const a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))));
const b = new ListNode(1, new ListNode(2, null));
const c = new ListNode(1, null);
