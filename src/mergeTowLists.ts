import { ListNode } from './types';
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let ptr1: ListNode | null = l1;
    let ptr2: ListNode | null = l2;

    let resultHead;

    if (ptr1.val > ptr2.val) {
        resultHead = new ListNode(ptr2.val, null);
        ptr2 = ptr2.next;
    } else {
        resultHead = new ListNode(ptr1.val, null);
        ptr1 = ptr1.next;
    }

    let resultPtr = resultHead;

    while (!(ptr1 === null && ptr2 === null)) {
        if (ptr1 === null) {
            resultPtr.next = ptr2;
            ptr2 = null;
        } else if (ptr2 === null) {
            resultPtr.next = ptr1;
            ptr1 = null
        } else {
            if (ptr1.val > ptr2.val) {
                resultPtr.next = new ListNode(ptr2.val, null);
                resultPtr = resultPtr.next;
                ptr2 = ptr2.next;
            } else {
                resultPtr.next = new ListNode(ptr1.val, null);
                resultPtr = resultPtr.next;
                ptr1 = ptr1.next;
            }
        }
    }
    return resultHead;
};

const ptr1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))));
const ptr2 = new ListNode(1, new ListNode(2, null))

console.log(mergeTwoLists(ptr1, ptr2));