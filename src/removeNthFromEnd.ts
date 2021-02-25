interface ListNode {
    val: number;
    next: ListNode | null;
}

const removeNthFromEnd = function (head: ListNode, n: number) {
    const stack = [];
    let ptr: ListNode | null = head;
    while (ptr !== null) {
        stack.push(ptr);
        ptr = ptr.next;
    }
    if (n === stack.length) {
        return head.next;
    }
    const parentOfNodeToRemove = stack[stack.length - n - 1];
    parentOfNodeToRemove.next = parentOfNodeToRemove.next?.next ?? null;
    return head;
}