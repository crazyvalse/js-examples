let screenHeight = window.innerHeight * 2
let screenWidth = window.innerWidth * 2
/********* 1. 做图片数组 **********/
let images = []
for (let i = 1; i < 53; i++) {
  images.push(`../images/${i < 10 ? '000' : '00'}${i}.png`)
}
/********* 2. 加载图片资源 **********/
PIXI.loader
  .add('../images/p1.png')
  .add(images)
  .on('progress', (loader, resource) => {
    // console.info(Math.floor(loader.progress))
  })
  .load(setup)

// 3. 初始化
function setup () {
  let app = new PIXI.Application({
    width: screenWidth,
    height: screenHeight
  })
  document.querySelector('#stage').appendChild(app.view)

  // 4. 添加第一张图片
  let parentSprite = new PIXI.Sprite.fromImage('../images/p1.png')
  parentSprite.position.set(screenWidth / 2, screenHeight / 2)
  parentSprite.anchor.set(0.5, 0.5)

  app.stage.addChild(parentSprite)

  // 5. 添加图片动画（图片组）
  initAnimatedSprite(images, app)
  initTouch()
}


function initTouch () {
  let alloyTouch = new AlloyTouch({
    touch: 'body',
    vertical: true,
    maxSpeed: 0.1,
    min: -2000,
    max: 0,
    bindSelf: false,
    initialValue: 0,
    change: function (value) {
      console.info(value)
    }
  })
}

function initAnimatedSprite (images, app) {
  let imageSprites = []
  images.forEach((item) => {
    let sprite = new PIXI.Texture.fromImage(item)
    // **** 如果是需要雪碧图截取一部分，使用Rectangle对象选取雪碧图的位置
    // let spriteRectangle = new PIXI.Rectangle(0, 0, sprite.width, sprite.height)
    imageSprites.push(
      // new PIXI.Texture(sprite, spriteRectangle)
      new PIXI.Texture(sprite)
    )
  })
  // 5.1 让图片动起来
  let animatedSprite = new PIXI.extras.AnimatedSprite(imageSprites)
  animatedSprite.position.set(0, 0)
  animatedSprite.animationSpeed = 0.5
  animatedSprite.play()
  app.stage.addChild(animatedSprite)
}

function initAnimatedSprite2 (images, app) {
  // 5.1 让图片动起来
  let animatedSprite = new PIXI.extras.AnimatedSprite.fromImages(images)
  animatedSprite.position.set(0, 0)
  animatedSprite.animationSpeed = 0.5
  animatedSprite.play()
  app.stage.addChild(animatedSprite)
}
