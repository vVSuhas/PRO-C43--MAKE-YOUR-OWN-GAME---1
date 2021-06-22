var player,bigship,bigshipImg
var player_running,shipImg,bulletImg;
var bulletGroup,shipGroup;
var space,spaceImg;

function preload(){
  player_running = loadAnimation("images/player.png","images/player2.png","images/player3.png","images/player4.png");
  bulletImg=loadImage('images/bullet.png');
  shipImg=loadImage('images/ship.png');
  spaceImg=loadImage('images/space.jpg')
  bigshipImg=loadImage('images/bigship.png')
}

function setup(){
  player=createSprite(50,213);
  player.addAnimation("running", player_running);
  player.scale=0.1;

  bigship=createSprite(850,200);
  bigship.addImage(bigshipImg);
  bigship.scale=0.2

  bulletGroup = new Group();
  shipGroup = new Group();
}

function draw(){
  createCanvas(1000, 525);
  background(spaceImg);
  
  if(keyDown("UP_ARROW")){
    player.y=player.y-10;
  }

  else if(keyDown("DOWN_ARROW")){
    player.y=player.y+10;
  }
  if (keyDown("space")) {
    spawnBullet();
   }

   if (bulletGroup.isTouching(shipGroup)) {
    shipGroup.destroyEach();
    bulletGroup.destroyEach();
  }

   if (World.frameCount % 50 == 0) {
    spawnShips()
  }

  drawSprites();
}

function spawnShips(){
  var rand=(1,400);
  //create ship sprite
  var ship=createSprite(950,900);
  ship.y = Math.round(random(1,1000));
  ship.addImage(shipImg);
  ship.scale=0.3;
  ship.velocityX = -3
  shipGroup.add(ship);
  //velocity
  //spawn randomly
  //call this function in draw
}

function spawnBullet(){
  var bullet=createSprite(18,220);
  bullet.addImage(bulletImg);
  bullet.scale=0.4;
  bullet.depth=0.1
  bullet.x = 65 ;
  bullet.y = player.y;
  bullet.velocityX = 4;
  bulletGroup.add(bullet);
}