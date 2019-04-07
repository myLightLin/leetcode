去除链表中的重复元素<br>

遍历链表，令 current = head, 假如它的 current.val = current.next.val 并且非空。那么就把 next 指针下移一位，即删除元素。
