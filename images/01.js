const imagemin = require('imagemin')
const imageminGifsicle = require('imagemin-gifsicle');

(async () => {
  await imagemin(['./images/*.gif'], './build/images', {
    use: [
      imageminGifsicle()
    ]
  })

  console.log('Images optimized')
})()

imagemin loading.gif --plugin.gifsicle.colors=8 --plugin.gifsicle.optimize=3 > go-loading.gif
