// delete 删除数组中的一个元素，这个元素就不在数组中了。
// 例如，trees[3]被删除，trees[3] 仍然可寻址并返回undefined。
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
if (3 in trees) {
  // 不会被执行
}


// 如果想让数组中存在一个元素但是是undefined值，使用undefined关键字而不是delete操作.
// 如下： trees[3]分配一个undefined,但是这个数组元素仍然存在:
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
if (3 in trees) {
  // this gets executed（会被执行）
}
