/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var current = head;
    var prev = null;
    while (current !== null) {
        if (current.val == val) {
            if (prev == null) {
                head = current.next;
            } else {
                prev.next = current.next;
            }
        } else {
            prev = current;
        }
        current = current.next;
    }
    return head;
};