const createHmac = require('create-hmac')

const KEY = '943b421c9eb07c830af81030552c86009268de4e532ba2ee2eab8247c6da0881'
const SALT = '520f986b998545b4785e0defbc4f3c1203f22de2374a3d53cb7a7fe9fea309c5'

const urlSafeBase64 = (string) => {
  return Buffer.from(string).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

const hexDecode = (hex) => Buffer.from(hex, 'hex')

const sign = (salt, target, secret) => {
  const hmac = createHmac('sha256', hexDecode(secret))
  hmac.update(hexDecode(salt))
  hmac.update(target)
  return urlSafeBase64(hmac.digest())
}

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Coffee_berries_1.jpg/1200px-Coffee_berries_1.jpg'
const resizing_type = 'fill'
const width = 300
const height = 300
const gravity = 'no'
const enlarge = 1
const extension = 'jpg'
const encoded_url = urlSafeBase64(url)
const path = `/${resizing_type}/${width}/${height}/${gravity}/${enlarge}/${encoded_url}.${extension}`

const signature = sign(SALT, path, KEY)
const result = `/${signature}${path}`
// console.log(result)

console.log(Buffer.from('hello').toString('hex'))
// var newdata = Buffer.from('hello', 'hex')//先把数据存在buf里面
// console.log(newdata.toString('hex'))//使用toString函数就能转换成hex数据啦
// console.info('hello'.toString('hex'))
