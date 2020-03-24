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

// 3. 初始化，并添加第一张图
function setup () {
  let app = new PIXI.Application({
    width: screenWidth,
    height: screenHeight
  })
  document.querySelector('#stage').appendChild(app.view)

  // 添加第一张图片
  let parentSprite = new PIXI.Sprite.fromImage('../images/p1.png')
  parentSprite.position.set(screenWidth / 2, screenHeight / 2)
  parentSprite.anchor.set(0.5, 0.5)

  app.stage.addChild(parentSprite)
}
