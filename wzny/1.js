Actors['安其拉'] = function () {
  this.name = '安其拉'
  this.state = []
}

Actors['安其拉'].prototype.firstAction = function () {
  console.info('1-火球')
}

Actors['安其拉'].prototype.secondAction = function () {
  console.info('2-减速')
}

Actors['安其拉'].prototype.thirdAction = function () {
  console.info('3-喷火')
}
