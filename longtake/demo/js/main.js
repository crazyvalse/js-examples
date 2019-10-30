//loader
const img1=['../images/p1.png']

let imgArr=[]
for(let i=1;i<=52;i++){ 
  let temp=i
  if(i<10){
    temp='0'+i
  }
  imgArr.push('../images/00'+temp+'.png')
}

PIXI.loader
  .add(img1)
  .add(imgArr)
  .on('progress',function(loader,resource){
    console.log(loader.progress)
  })
  .load(setup)

function setup(){
  const app=new PIXI.Application({
    width:750,
    height:1448
  })
  
  document.getElementById('stage').appendChild(app.view)

  let spr=new PIXI.Sprite.fromImage(img1[0])
  spr.position.set(375,724)
  spr.anchor.set(0.5,0.5)
  spr.alpha=0
  app.stage.addChild(spr)

  let spr2=new PIXI.Sprite.fromImage(imgArr[0])
  spr2.position.set(375,724)
  spr2.anchor.set(0.5,0.5)
  spr2.alpha=0
  app.stage.addChild(spr2)

  //animatedSprite
  let imgSprArr=[]
  for(let n=1;n<=52;n++){ 
    let tempn=n
    if(n<10){
      tempn='0'+n
    }
    let tempspr=new PIXI.Texture.fromImage('../images/00'+tempn+'.png')
    let temprect=new PIXI.Rectangle(0,0,1318,1448)
    let imgSprArrItem=new PIXI.Texture(tempspr,temprect)
    imgSprArr.push(imgSprArrItem)
  }
  let animatedSpr=new PIXI.extras.AnimatedSprite(imgSprArr)
  animatedSpr.position.set(0,0)
  animatedSpr.animationSpeed=0.1
  //animatedSpr.play()
  //app.stage.addChild(animatedSpr)


  //TweenMax
  let allTimeLine=new TimelineMax({paused:true})

  //AlloyTouch
  let moveMin=-2000
  let alloyTouch=new AlloyTouch({
    touch:'body',
    vertical:true,
    maxSpeed:0.1,
    min:moveMin,
    max:0,
    bindSelf:false,
    initialValue:0,
    change:function(value){
      let myprogress=value/moveMin
      console.log(myprogress)

      allTimeLine.seek(myprogress)

      animationPlay(myprogress)
    }
  })

  

  //let timeline1=new TimelineMax({delay:0.3})
  //let tweenMax1=new TweenMax(spr,0.1,{alpha:1})
  //timeline1.add(tweenMax1,0)
  //allTimeLine.add(timeline1,0)

  let timeline2=new TimelineMax({delay:0.5})
  let tweenMax2=new TweenMax(spr2,0.1,{alpha:1})
  timeline2.add(tweenMax2,0)
  allTimeLine.add(timeline2,0)


  function animationPlay(progress){
    if(progress>=0.6){
      let imgArrNum=imgArr.length
      let index=Math.floor((progress-0.6)/0.3*imgArrNum)

      let tempnn=index
      if(index<10){
        tempnn='0'+index
      }
      if(tempnn<imgArrNum){
        spr2.texture=new PIXI.Texture.fromImage('../images/00'+tempnn+'.png')
      }

    }
  }


}