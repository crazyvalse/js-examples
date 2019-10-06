let names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer', 'Clayton', 'Cynthia']
let name = 'Cynthia'

let position = names.indexOf(name)
if (position >= 0) {
  console.info(`Found ${name} at positon ${position}.`)
} else {
  console.info(`${name} not found in array.`)
}

// lastIndexOf() 最后一个元素索引

let lastPosition = names.lastIndexOf(name)
if (lastPosition >= 0) {
  console.info(`Found ${name} at positon ${lastPosition}.`)
} else {
  console.info(`${name} not found in array.`)
}
