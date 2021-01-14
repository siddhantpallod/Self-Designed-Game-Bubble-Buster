var ball;
var board;
var bubbles;
var ballImg, boardImg;
var blue,green,orange,purple,red,yellow;
var blueImg,greenImg,orangeImg,yellowImg;
var gameState = "start";
var blueGroup, greenGroup, orangeGroup, yellowGroup;
var score = 0;
var score2 = 0;
var heartImg, heart1, heart2 , heart3;
var bombImg , bomb, bombGroup;
var count = 0;
var boomImg, gameOverImg;
var boom , gameOver;
var spaceImg, space;
var goodImg, good;
var superbImg, superb;
var fantasticImg, fantastic;
var level1Img, level1;
var level2Img, level2;
var purpleblockImg, purpleblock;
var orangeblockImg, orangeblock;
var greenblockImg, greenblock;
var blueblockImg, blueblock;
var cannonImg, cannon;
var cannonBall;
var blueblockGroup, greenblockGroup, orangeblockGroup, purpleblockGroup;
var cannonBallGroup;
var yellowAlien, greenAlien, blueAlien;
var yellowAlienImg, greenAlienImg, blueAlienImg;
var greenAlienGroup, blueAlienGroup, yellowAlienGroup;
var amazingImg, amazing;
var awesomeImg, awesome;
var marvellousImg, marvellous;
var gameOver2Img, gameOver2;
var space2Img, space2;
var restartImg, restart;

function preload(){
  ballImg = loadImage("images/ball1.png");
  boardImg = loadImage("images/skateboard1.png");
  blueImg = loadImage("images/blue.png");
  greenImg = loadImage("images/green.png");
  orangeImg = loadImage("images/orange.png");
  yellowImg = loadImage("images/yellow.png");
  heartImg = loadImage("images/heart.png");
  bombImg = loadImage("images/bomb.png");
  boomImg = loadImage("images/Boom.JPG");
  gameOverImg = loadImage("images/gameover1.jpg");
  spaceImg = loadImage("images/Space.png");
  goodImg = loadImage("images/Good Going.png");
  superbImg = loadImage("images/superb.png");
  fantasticImg = loadImage("images/fantastic.png");
  level1Img = loadImage("images/level1.png");
  level2Img = loadImage("images/level2.png");
  purpleblockImg = loadImage("images/purpleblock.png");
  orangeblockImg = loadImage("images/orangeblock.png");
  greenblockImg = loadImage("images/greenblock.png");
  blueblockImg = loadImage("images/blueblock.png");
  cannonImg = loadImage("images/cannon.png");
  blueAlienImg = loadImage("images/bluealien.png");
  greenAlienImg = loadImage("images/greenalien.png");
  yellowAlienImg = loadImage("images/yellowalien.png");
  amazingImg = loadImage("images/amazing.png");
  awesomeImg = loadImage("images/awesome.png");
  marvellousImg = loadImage("images/marvellous.png");
  gameOver2Img = loadImage("images/gameover2.JPG");
  space2Img = loadImage("images/space2.png");
  restartImg = loadImage("images/restart.png");
}

function setup(){
  createCanvas(600,500);
  ball = createSprite(300,440,20,20);
  ball.addImage(ballImg);
  ball.scale = 0.2;
 // ball.debug = true;
  ball.setCollider("circle",15,0,70);

  board = createSprite(300,450,80,20);
  board.addImage(boardImg);
  board.scale = 0.4;
  //board.debug = true;
  board.setCollider("rectangle",0,0,150,10);

  blueGroup = createGroup();
  greenGroup = createGroup();
  orangeGroup = createGroup();
  yellowGroup = createGroup();
  bombGroup = createGroup();
  greenblockGroup = createGroup();
  blueblockGroup = createGroup();
  orangeblockGroup = createGroup();
  purpleblockGroup = createGroup();
  cannonBallGroup = createGroup();
  greenAlienGroup = createGroup();
  blueAlienGroup = createGroup();
  yellowAlienGroup = createGroup();

  heart1 = createSprite(550,30,20,20);
  heart1.addImage(heartImg);
  heart1.scale = 0.05;

  heart2 = createSprite(520,30,20,20);
  heart2.addImage(heartImg);
  heart2.scale = 0.05;

  heart3 = createSprite(490,30,20,20);
  heart3.addImage(heartImg);
  heart3.scale = 0.05;

  boom = createSprite(300,330,400,400);
  boom.addImage(boomImg);
  boom.scale = 1.16;
  boom.visible = false;

  gameOver = createSprite(290,250,20,50);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1.13;
  gameOver.visible = false;

  space = createSprite(515,400,20,20);
  space.addImage(spaceImg);
  space.scale = 0.2;
  space.visible = false;

  good = createSprite(300,250,20,20);
  good.addImage(goodImg);
  good.scale = 0.4;
  good.visible = false;

  superb = createSprite(330,250,20,20);
  superb.addImage(superbImg);
  superb.scale = 0.4;
  superb.visible = false;

  fantastic = createSprite(330,250,20,20);
  fantastic.addImage(fantasticImg);
  fantastic.scale = 0.4;
  fantastic.visible = false;

  level1 = createSprite(315,150,20,20);
  level1.addImage(level1Img);
  level1.scale = 0.4;
  level1.visible = false;

  level2 = createSprite(315,150,20,20);
  level2.addImage(level2Img);
  level2.scale = 0.4;
  level2.visible = false;

  cannon = createSprite(300,450,20,20);
  cannon.addImage(cannonImg);
  cannon.scale = 0.15;
  cannon.visible = false;

  amazing = createSprite(330,200,20,20);
  amazing.addImage(amazingImg);
  amazing.scale = 0.4;
  amazing.visible = false;

  awesome = createSprite(300,200,20,20);
  awesome.addImage(awesomeImg);
  awesome.scale = 0.35;
  awesome.visible = false;
  
  marvellous = createSprite(300,200,20,20);
  marvellous.addImage(marvellousImg);
  marvellous.scale = 0.35;
  marvellous.visible = false;

  gameOver2 = createSprite(290,250,20,20);
  gameOver2.addImage(gameOver2Img);
  gameOver2.visible = false;

  space2 = createSprite(500,430,20,20);
  space2.addImage(space2Img);
  space2.scale = 0.4;
  space2.visible = false;

  restart = createSprite(300,200,20,20);
  restart.addImage(restartImg);
  restart.scale = 0.3;
  restart.visible = false;

  cannonBall = createSprite(100,100,20,20);
  cannonBall.addImage(ballImg);
  cannonBall.scale = 0.2;
  cannonBall.visible = false;
  cannonBall.y = cannon.y;
  cannonBall.x = cannon.x;
}

function draw(){
  background("black");
  
  edges = createEdgeSprites();
  board.bounceOff(edges);


  if (gameState === "start"){
    textSize(20);
    fill("white");
    text("Press 'Space' To Start!!", 200,200);
    restart.visible = false;
    level1.visible = true;
    
    score = 0;
    count = 0;
    
    if(keyDown("space") || touches.length > 0){
      board.velocityX = 5;
      touches = [];
     level1.visible = false;
     heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
      gameState = "stage1";
    }
  }

  if(gameState === "stage1"){
    board.visible = true;
    ball.visible = true;
    
    if(ball.collide(board)){
    ball.x = board.x;
    }
    
    for(var i = 0; i < touches.length; i++){

    ellipse(touches[i].x,touches[i].y,100,100);

    if((keyDown("UP_ARROW") || (touches[i].x > 200  && touches[i].x < 400 )) && ball.y > 400){
      ball.velocityY = -12; 
    }


    if((keyDown("LEFT_ARROW") || touches[i].x < 200 && touches[i].x > 0)){
      //ball.velocityY = -7;
      ball.velocityX = -7;
    }

    if(keyDown("RIGHT_ARROW") || (touches[i].x > 400 && touches[i].x < 600)){
      //ball.velocityY = -7;
      ball.velocityX = 7;
    }
  }

    ball.velocityY += 0.2;

    if(ball.isTouching(blueGroup) && ball.y < 430){
      blueGroup.destroyEach();
      score += 1;
    }

    if(ball.isTouching(greenGroup) && ball.y < 430){
      greenGroup.destroyEach();
      score += 1;
    }

    if(ball.isTouching(orangeGroup) && ball.y < 430){
      orangeGroup.destroyEach();
      score += 1;
    }

    if(ball.isTouching(yellowGroup) && ball.y < 430){
      yellowGroup.destroyEach();
      score += 1;
    }

    if(ball.isTouching(bombGroup) && ball.y < 430){
      count += 1;
      bombGroup.destroyEach();
    }

    if(ball.y > 500){
      count = count + 1;
      gameState = "resume";
    }

    switch(count){
      case 1 : heart1.visible = false;
      break;
      case 2 : heart2.visible = false;
      break;
      case 3 : heart3.visible = false;
      break;
      default : 
      break;
    }

    if(count === 3){
      gameState = "end";
    }
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[0]);


    createBubble();
    createBomb();

    textSize(20);
    stroke("white");
    text("Score: " + score , 30,70);
    
    if (score === 10){
      good.visible = true;
  }

  if(score > 10){
    good.visible = false;
  }

  if(score === 20){
    superb.visible = true;
  }

  if(score > 20){
    superb.visible = false;
  }

  if(score === 28){
    fantastic.visible = true;
  }

  if(score > 29){
    fantastic.visible = false;
  }

  if(score === 30){
    gameState = "start2";
  }

  }

  if(gameState === "resume"){
    textSize(20);
    fill("white");
    text("Press 'Space' To Resume!!",200,200);
    bombGroup.setVelocityEach(0,0);
    blueGroup.setVelocityEach(0,0);
    greenGroup.setVelocityEach(0,0);
    orangeGroup.setVelocityEach(0,0);
    yellowGroup.setVelocityEach(0,0);
    bombGroup.setLifetimeEach(-1);
    blueGroup.setLifetimeEach(-1);
    greenGroup.setLifetimeEach(-1);
    orangeGroup.setLifetimeEach(-1);
    yellowGroup.setLifetimeEach(-1);
    board.visible = false;
  }
  
  if((keyDown("space") || touches.length > 0) && gameState === "resume"){
    board.visible = true;
    board.velocityX = 5;
    ball.x = board.x;
    ball.y = 440;
    bombGroup.destroyEach();
    blueGroup.destroyEach();
    greenGroup.destroyEach();
    orangeGroup.destroyEach();
    yellowGroup.destroyEach();
    gameState = "stage1";
    touches = [];
  }

  if (gameState === "end") {
    space.visible = true;
    boom.visible = true;
    superb.visible = false;
    fantastic.visible = false;
    good.visible = false;
    
    if(keyDown("space")){
      gameState = "end1";
    }
  }

  if (gameState === "end1") {
    boom.visible = false;
    space.visible = false;
    gameOver.visible = true;
  }

  if(gameState === "start2"){
    board.visible = false;
    ball.visible = false;
    greenGroup.destroyEach();
    blueGroup.destroyEach();
    bombGroup.destroyEach();
    orangeGroup.destroyEach();
    yellowGroup.destroyEach();
    level2.visible = true;
    score2 = 0;
    count = 0
    fill("white");
    textSize(25);
    text("Press 'Space' To Start!!",200,200);

    if(keyDown("space")){
      level2.visible = false;
      cannon.visible = true;
      heart1.visible = true;
      heart2.visible = true;
      gameState = "stage2";
    }
  }

  if(gameState === "stage2"){
  
    textSize(20);
    stroke("white");
    text("Score: " + score2,30,70);

    if(keyDown(LEFT_ARROW)){
      cannon.x -= 10;
    }

    if(keyDown(RIGHT_ARROW)){
      cannon.x += 10;
    }

    if(keyWentUp(UP_ARROW)){
      cannonBall.visible = true;
      cannonBall.velocityY = -7;
    }

    if(keyWentDown(UP_ARROW) && (cannonBall.y < 20)){
      
      cannonBall.x = cannon.x + 20;
      cannonBall.y = cannon.y - 20;
  }

    if(cannonBall.isTouching(blueAlienGroup) && cannonBall.y < 400){
      count += 1;
      blueAlienGroup.destroyEach();
    }

    if(cannonBall.isTouching(greenAlienGroup) && cannonBall.y < 400){
      count += 1;
      greenAlienGroup.destroyEach();
    }

    if(cannonBall.isTouching(yellowAlienGroup) && cannonBall.y < 400){
      count += 1;
      yellowAlienGroup.destroyEach();
    }

    if(cannonBall.isTouching(blueblockGroup) && cannonBall.y < 400){
      score2 += 1;
      blueblockGroup.destroyEach();
    }

    if(cannonBall.isTouching(orangeblockGroup) && cannonBall.y < 400){
      score2 += 1;
      orangeblockGroup.destroyEach(); 
    }

    if(cannonBall.isTouching(greenblockGroup) && cannonBall.y < 400 ){
      score2 += 1;
      greenblockGroup.destroyEach();
    }

    if(cannonBall.isTouching(purpleblockGroup) && cannonBall.y < 400){
      score2 += 1;
      purpleblockGroup.destroyEach();
    }

    switch(count){
      case 1 : heart1.visible = false;
      break;
      case 2 : heart2.visible = false;
      break;
      case 3 : heart3.visible = false;
      break;
      default : 
      break;
    }

    if(count === 3){
      gameState = "end2";
    }

    if(score2 === 10){
      amazing.visible = true;
    }

    if(score2 === 11){
      amazing.visible = false;
    }

    if(score2 === 20){
      awesome.visible = true;
    }

    if(score2 === 21){
      awesome.visible = false;
    }

    if(score2 === 28){
      marvellous.visible = true;
    }

    if(score2 === 29){
      marvellous.visible = false;
    }

    if(score2 === 30){
      gameState = "end2";
    }

    createBlock();
    createAlien();
  }

  if(gameState === "end2"){
    gameOver2.visible = true;
    space2.visible = true;
    cannonBallGroup.destroyEach();
    cannon.visible = false;
    greenAlienGroup.destroyEach();
    yellowAlienGroup.destroyEach();
    blueAlienGroup.destroyEach();
    blueblockGroup.destroyEach();
    greenblockGroup.destroyEach();
    orangeblockGroup.destroyEach();
    purpleblockGroup.destroyEach();
    marvellous.visible = false;
    awesome.visible = false;
    amazing.visible = false;
    
    if(keyDown("space")){
      gameState = "end3";
    }
  }

  if(gameState === "end3"){
    restart.visible = true;
    gameOver2.visible = false;
    space2.visible = false;

    if(keyDown("space")){
      gameState = "start";
    }
  }
  
  cannon.collide(edges);
  ball.collide(board);
  
  drawSprites();
  
}

function createBubble(){
  if(frameCount % 150 === 0){
    blue = createSprite(random(30,550),0,20,20);
    blue.addImage(blueImg);
    blue.scale = 0.7;
    blue.velocityY = 3; 
    blue.depth = ball.depth - 1;
    blue.lifetime = 167;
    blueGroup.add(blue);
  }
  if(frameCount % 165 === 0){
    orange = createSprite(random(30,550),0,20,20);
    orange.addImage(orangeImg);
    orange.scale = 0.7;
    orange.velocityY = 3; 
    orange.depth = ball.depth - 1;
    orange.lifetime = 167;
    orangeGroup.add(orange);
  }
  if(frameCount % 170 === 0){
    green = createSprite(random(30,550),0,20,20);
    green.addImage(greenImg);
    green.scale = 0.7;
    green.velocityY = 3; 
    green.depth = ball.depth - 1;
    green.lifetime = 167;
    greenGroup.add(green);
  }
  if(frameCount% 160 === 0){
    yellow = createSprite(random(30,550),0,20,20);
    yellow.addImage(yellowImg);
    yellow.scale = 0.7;
    yellow.velocityY = 3; 
    yellow.depth = ball.depth - 1;
    yellow.lifetime = 167;
    yellowGroup.add(yellow);
  }
}

function createBomb(){
  if(frameCount % 200 === 0){
    bomb = createSprite(random(30,550),0,20,20);
    bomb.addImage(bombImg);
    bomb.velocityY = 6;
    bomb.depth = ball.depth - 1;
    bomb.scale = 0.1;
    bomb.lifetime = 84;
    bombGroup.add(bomb);
  }
}

function createBlock(){
  if(frameCount % 190 === 0){
    orangeblock = createSprite(random(30,550),0,20,20);
    orangeblock.addImage(orangeblockImg);
    orangeblock.scale = 0.2;
    orangeblock.velocityY = 5;
    orangeblock.lifetime = 100;
    orangeblock.depth = cannon.depth - 1;
    orangeblockGroup.add(orangeblock);
  }

  if(frameCount % 180 === 0){
    greenblock = createSprite(random(30,550),0,20,20);
    greenblock.addImage(greenblockImg);
    greenblock.scale = 0.2;
    greenblock.velocityY = 5;
    greenblock.lifetime = 100;
    greenblock.depth = cannon.depth - 1;
    greenblockGroup.add(greenblock);
  }

  if(frameCount % 200 === 0){
    purpleblock = createSprite(random(30,550),0,20,20);
    purpleblock.addImage(purpleblockImg);
    purpleblock.scale = 0.2;
    purpleblock.velocityY = 5;
    purpleblock.lifetime = 100;
    purpleblock.depth = cannon.depth - 1;
    purpleblockGroup.add(purpleblock);
  }

  if(frameCount % 170 === 0){
    blueblock = createSprite(random(30,550),0,20,20);
    blueblock.addImage(purpleblockImg);
    blueblock.scale = 0.2;
    blueblock.velocityY = 5;
    blueblock.lifetime = 100;
    blueblock.depth = cannon.depth - 1;
    blueblockGroup.add(blueblock);
  }
  }

  

  function createAlien(){
    if(frameCount % 200 === 0){
      blueAlien = createSprite(random(30,550),0,20,20);
      blueAlien.addImage(blueAlienImg);
      blueAlien.scale = 0.3;
      blueAlien.velocityY = 6;
      blueAlien.lifetime = 85;
      blueAlien.depth = cannon.depth - 1;
      blueAlienGroup.add(blueAlien);
    }

    if (frameCount % 300 === 0) {
      yellowAlien = createSprite(random(30,550),0,20,20);
      yellowAlien.addImage(yellowAlienImg);
      yellowAlien.scale = 0.3;
      yellowAlien.velocityY = 6;
      yellowAlien.lifetime = 85;
      yellowAlien.depth = cannon.depth - 1;
      yellowAlienGroup.add(yellowAlien);
    }

    if (frameCount % 400 === 0) {
      greenAlien = createSprite(random(30,550),0,20,20);
      greenAlien.addImage(greenAlienImg);
      greenAlien.scale = 0.3;
      greenAlien.velocityY = 6;
      greenAlien.lifetime = 85;
      greenAlien.depth = cannon.depth - 1;
      greenAlienGroup.add(greenAlien);  
    }
  }


