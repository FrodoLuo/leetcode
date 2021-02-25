function isPalindrome(head: ListNode | null): boolean {
    const stack = [];
    let ptr = head;
    while(ptr !== null) {
        stack.push(ptr.val);
        ptr = ptr.next;
    }
    ptr = head;
    while(ptr != null) {
        if (ptr.val !== stack.pop()) {
            return false;
        }
    }
    return true;
};
isPalindrome({val: 1, next: null});