/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

}

var addTwoNumbers = function (l1, l2) {
  var node = l1
  var node2 = l2
  var arr1 = []
  var arr2 = []
  while (node != null) {
    arr1.push(node.val)
    node = node.next
  }
  while (node2 != null) {
    arr2.push(node2.val)
    node2 = node2.next
  }
  var num1 = parseInt(arr1.reverse().join('').toString())
  var num2 = parseInt(arr2.reverse().join('').toString())
  return num1 + num2
}
