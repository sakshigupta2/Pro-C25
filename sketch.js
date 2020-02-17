var bg, bgImg;
var c1, c1Img;
var c2, c2Img;
var c3, c4;
var tree1, tree1Img;
var tree2, tree2Img;
var tree3, tree3Img;
var tree4, tree4Img;
var tree5, tree5Img;
var drop1, drop1Img;
var drop2, drop1Img;
var drop3, drop1Img;
var drop4, drop1Img;
var sound;


function preload(){
bgImg = loadImage("bg2.jfif");
c1Img = loadImage("c1.png");
c2Img = loadImage("c2.png");
tree1Img = loadImage("tree3.png");
tree2Img = loadImage("tree4.png");
tree3Img = loadImage("tree4.png");
tree4Img = loadImage("tree5.png");
tree5Img = loadImage("tree3.png");
drop1Img = loadImage("d4.png");

sound = loadSound("rain.mp3");
}
function setup() {
  createCanvas(800, 600);

  bg = createSprite(300,200,10,10);
  bg.addImage(bgImg);
  bg.scale = 4.9;

  c1 = createSprite(120,100,10,10);
  c1.addImage(c1Img);
  c1.scale = 0.4;

  c2 = createSprite(300,50,10,10);
  c2.addImage(c1Img);
  c2.scale = 0.4;

  c3 = createSprite(480,100,10,10);
  c3.addImage(c1Img);
  c3.scale = 0.4;

  c4 = createSprite(650,80,10,10);
  c4.addImage(c1Img);
  c4.scale = 0.4;

  tree1 = createSprite(100,410,10,10);
  tree1.addImage(tree1Img);
  tree1.scale = 0.3;

  tree2 = createSprite(280,400,10,10);
  tree2.addImage(tree2Img);
  tree2.scale = 0.8;

  tree3 = createSprite(400,400,10,10);
  tree3.addImage(tree3Img);
  tree3.scale = 0.8;

  tree4 = createSprite(700,470,10,10);
  tree4.addImage(tree4Img);
  tree4.scale = 1.2;

  tree5 = createSprite(570,410,10,10);
  tree5.addImage(tree5Img);
  tree5.scale = 0.3;

  drop1 = createSprite(200, 0);
    drop1.addImage(drop1Img);
    drop1.scale = 0.02;
    drop1.velocityY = 7.5;

    drop2 = createSprite(200, 0);
    drop2.addImage(drop1Img);
    drop2.scale = 0.02;
    drop2.velocityY = 7.5;

    drop3 = createSprite(200, 0);
    drop3.addImage(drop1Img);
    drop3.scale = 0.02;
    drop3.velocityY = 7.5;

    drop4 = createSprite(200, 0);
    drop4.addImage(drop1Img);
    drop4.scale = 0.02;
    drop4.velocityY = 7.5;
}



function draw() {
  background("blue");

  
    if (frameCount % 10 === 0) {
        drop1 = createSprite(Math.round(random(20, 800), Math.round(random(-400, 0))));
        drop1.addImage(drop1Img);
        drop1.scale = 0.02;
        drop1.velocityY = 7.5;
        sound.play();
  
      
    }
  
   
  if (drop1.y > 530) {
    drop1.x = Math.round(random(20, 800));
    drop1.y = 0;
  }

  if (frameCount % 10 === 0) {
    drop2 = createSprite(Math.round(random(50, 800), Math.round(random(-400, 0))));
    drop2.addImage(drop1Img);
    drop2.scale = 0.02;
    drop2.velocityY = 7.5;
    sound.play();
  
}


if (drop2.y > 530) {
drop2.x = Math.round(random(50, 750));
drop2.y = 0;
}

if (frameCount % 10 === 0) {
  drop3 = createSprite(Math.round(random(100, 700), Math.round(random(-400, 0))));
  drop3.addImage(drop1Img);
  drop3.scale = 0.02;
  drop3.velocityY = 9.5;
  sound.play();

}


if (drop3.y > 530) {
drop3.x = Math.round(random(100, 700));
drop3.y = 0;
}


if (frameCount % 10 === 0) {
  drop4 = createSprite(Math.round(random(200, 500), Math.round(random(-400, 0))));
  drop4.addImage(drop1Img);
  drop4.scale = 0.02;
  drop4.velocityY = 9.5;
  sound.play();

}


if (drop4.y > 530) {
drop4.x = Math.round(random(200, 500));
drop4.y = 0;
}

  drawSprites();

  fill("blue");
  textSize(30);
  text("Listen to the rhythm of falling RAIN",150,50);
}