const createHmac = require('create-hmac')

const KEY = '736563726574'
const SALT = '68656C6C6F'

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

const url = 'http://2e.zol-img.com.cn/product/99_500x2000/470/ceWcUC3fN9Uqs.jpg'
  const resizing_type = 'auto'
const width = 300
const height = 50
const gravity = 'no'
const enlarge = 1
const extension = 'jpg'
const encoded_url = urlSafeBase64(url)
const path = `/${resizing_type}/${width}/${height}/${gravity}/${enlarge}/${encoded_url}.${extension}`

const signature = sign(SALT, path, KEY)
const result = `/${signature}${path}`
console.log(result)
