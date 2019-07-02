const Koa = require('koa')
const app = new Koa()


app.use(async (ctx, next) => {
  await next()
  ctx.cookies.set('uu_token', 'zacisbest', {'httpOnly': true})
  ctx.cookies.set('username', 'zaczac', {'httpOnly': false})
})

// response
app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3200)
