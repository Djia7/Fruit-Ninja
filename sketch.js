//Sprites
var knife,knifeImage;
var fruit;
var fruitImage1,fruitImage2,fruitImage3,fruitImage4;
var fruitGroup;
var monster,monsterImage,monsterImage2;
var monsterGroup;

//Gamestates
var PLAY = 1;
var END = 0;
var gameState = 1;

//Gameover/reset
var gameover,gameoverImage;

//sounds
var swordSound;
var gameOverSound;

//score
var score = 0;

function preload(){
  //sprite Images
  knifeImage = loadImage("sword.png");
  monsterImage = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
  
  //gameover image
  gameoverImage = loadImage("gameover.png");
  
  //sounds
  swordSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");
}

function setup(){
  //knife Image
  knife = createSprite(300,300,20,20);
  knife.addImage(knifeImage);
  knife.scale = 0.5;
  
  //Groups of projectiles
  monsterGroup = new Group();
  fruitGroup1 = new Group();
  
  //gameover sprite
  gameover = createSprite(300,300,20,20);
  gameover.addImage(gameoverImage);
  gameover.visible = false;
}

function draw(){
  knife.debug = false;
  if(gameState === PLAY){
  //knife movement
  knife.x = mouseX
  knife.y = mouseY
  
  //fruit creation
  fruit();
  
  //enemy creation
  enemy();
  
  if(knife.isTouching(monsterGroup)){
    monsterGroup.destroyEach();
    knife.destroy();
    gameOverSound.play();
    gameState = END
  }
    
    if(knife.isTouching(fruitGroup1)){
      score = score + 1;
      fruitGroup1.destroyEach();
      swordSound.play();
    }
    
    if(score > 0 && score%4 === 0){
      fruitGroup1.setVelocityEach = -(8 + score/4);
    }
    
    if(score > 0 && score%10 === 0){
      monsterGroup.setVelocityEach = -(8 + score/4);
    }
  }
  
  if(gameState === END){
    gameover.visible = true;
    fruitGroup1.setVelocityXEach(0);
  }
  
  createCanvas(600,600);
  text("Score: " + score,300,10);
  
  drawSprites();
}


function fruit(){
  if(World.frameCount % 100 === 0){
    var position = Math.round(random(1,2));
    let fruit = createSprite(600,Math.round(random(0,600)),20,20);
  
  if(position === 1){
    fruit.x = 0
    fruit.y = Math.round(random(0,600));
    fruit.velocityX = 8;
    
    if(score > 0 && score%100 === 0){
      fruit.velocityX = (8 + score/4);
    }
  }
  else if(position === 2){
    fruit.x = 600;
    fruit.y = Math.round(random(0,600));
    fruit.velocityX = -8;
  }
    n = Math.round(random(1,4));
    if(n === 1){
      fruit.addImage(fruitImage1);
    }
    else if(n === 2){
      fruit.addImage(fruitImage2);
    }
    else if(n === 3){
      fruit.addImage(fruitImage3);
    }
    else if(n === 4){
      fruit.addImage(fruitImage4);
    }
  fruit.scale = 0.2;
  fruit.lifetime = 200;
    fruitGroup1.add(fruit);
    
  }

  
  
}



function enemy(){
  if(World.frameCount % 200 === 0){
     monster = createSprite(600,Math.round(random(0,600)),20,20);
  position = Math.round(random(1,2));
    if(position === 1){
    monster.x = 0
    monster.y = Math.round(random(0,600));
    monster.velocityX = 8;
      
    if(score > 0 && score%10 === 0){
      monster.velocityx = (8 + score/10);
    }
  }
  else if(position === 2){
    monster.x = 600;
    monster.y = Math.round(random(0,600));
    monster.velocityX = -8;
  }
    r = Math.round(random(1,2));
    if(r === 1){
      monster.addImage(monsterImage);
    }
    else if(r === 2){
      monster.addImage(monsterImage2);
    }
    
    monster.lifetime = 200;
    monsterGroup.add(monster);
    
  }
}