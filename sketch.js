var snow1 






function setup() {
  createCanvas(2000,900);
  createSprite(400, 200, 50, 50);
snow1 = loadImage ("snow1.jpg")
snow2 = loadImage ("snow2.jpg")
snow3 = loadImage ("snow3.jpg")
snow4 = loadImage ("snow4.jpg")
}

function draw() {
  background(snow1);  
  
  if (keyDown("space")){

   background(snow2)    
  }
  
  
  drawSprites();











}