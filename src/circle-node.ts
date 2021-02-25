import { ListNode } from "./types";

interface LN extends ListNode {
    visited?: boolean;
}

var hasCycle = function (head: LN) {
    
    let ptr: LN | null = head;
    let step = 1;

    while(ptr != null) {
        if (ptr.visited) {return true;}
        ptr.visited = true;
        ptr = ptr.next;
    }
    return false;

};

const nodec: ListNode = {
    val: 3,
    next: null
}

const nodeb: ListNode = {
    val: 2,
    next: nodec
}

const nodea: ListNode = {
    val: 1,
    next: nodeb
}

nodec.next = nodeb;

hasCycle(nodea);