// 设计一个人物 达摩

var Dabaojian = Actors['亚瑟'] = function () {
  this.name = '亚瑟'
  this.state = []
}

Dabaojian.prototype.firstAction = function () {
  console.info('1-冲刺')
}

Dabaojian.prototype.secondAction = function () {
  console.info('2-刀片')
}

Dabaojian.prototype.thirdAction1 = function () {
  console.info('3-按地方磨蹭')
}

