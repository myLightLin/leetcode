# 题目
给定一个链表，判断它是否存在环
head 表示头结点，pos 表示链表尾部连接到节点的索引

> Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

# 思路
使用快慢指针，慢指针指向头结点，快指针指向头结点的下个节点，然后让快指针每次走两步，慢指针每次走一步，如果链表存在环的话，则两个指针最终会相遇
注意还要考虑头结点 head 如果为空的话，直接返回 false

# JavaScript 解法
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head === null) return false
  let l1 = head, l2 = head.next
  while(l2 !== null && l2.next !== null) {
      if(l1 == l2) return true
      l1 = l1.next
      l2 = l2.next.next
  }
  return false
};
```
