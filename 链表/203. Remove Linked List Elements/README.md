[easy] 给定一个链表和 val ，删除链表元素出现过的 val 值。<br>

链表有节点和指针 next，首先定义一个变量 current 从 head 节点开始遍历，在定义一个前驱变量 prev ，用来记录前一个节点，当找到值等于 val 的节点<br>
时，**执行 prev.next = current.next** ，这是一个典型的删除链表元素的操作，这里特别要注意的是，要考虑头节点就是 val 的情况，如果头结点立即就<br>
找到了相同的，那么就直接将下一个节点赋值给头节点。每遍历一次就及时更新 current.next 找下个元素，然后把当前已经确定不是 val 的节点赋值给 prev，<br>
以便下次删除。
