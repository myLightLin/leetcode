栈的典型应用场景：括号匹配问题。需要验证输入的字符串是否合法，即'(', ')', '{', '}', '[' and ']'<br>
利用栈的特性，先进后出。我们可以用对象先存储好这些字符和它们的值。然后遍历字符串，一一到对象里去匹配，如果不存在，就<br>
加入，如果匹配，就验证其相加是否为 0 ，因为对象里的定义规则类似 {'(': -1 ,')': 1} 。最后遍历完后如果栈数组的长度不为 0，<br>
那么说明不匹配成功，返回 false
