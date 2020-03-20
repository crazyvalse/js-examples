// 设计一个人物 达摩

Actors['达摩'] = function () {
  this.personName = '达摩'
  this.personState = []
}

Actors['达摩'].prototype.firstAction = function () {
  console.info('1-冲刺')
}

Actors['达摩'].prototype.secondAction = function () {
  console.info('2-多拳')
}

Actors['达摩'].prototype.thirdAction = function () {
  console.info('3-踢墙')
}

