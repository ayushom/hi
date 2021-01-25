var cat, catImage, catImage2,catImage3;
var jerry, jerryImage;
var background,backgroundImage;





function preload() {
    catImage = loadImage("tomOne.png");
    backgroundImage=loadImage("garden.png");
    catImage2=loadAnimation("tomThree.png","tomTwo.png");
    jerryImage=loadImage("jerryTwo.png");
    catImage3=loadImage("tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(900,500,300,400);
    cat.addImage(catImage);

    cat.scale=0.1

    garden=createSprite(100,20,20,20);
    garden.addImage(backgroundImage);
    garden.scale=2.4
   
    jerry=createSprite(500,500,10,10);
    jerry.addImage(jerryImage);
    jerry.scale=0.1
}

function draw() {

    background(0);

    cat.depth = garden.depth;
    cat.depth = cat.depth+1;

     keyPressed();
     drawSprites();
}

  

function keyPressed(){

  if(keyCode === LEFT_ARROW){
  
    cat.addAnimation("running", catImage2)
    cat.changeAnimation("running")
    cat.x = cat.x-6;

  }

  if(cat.x - jerry.x < jerry.width/2 + cat.width/2
  && jerry.x - cat.x < jerry.width/2 + cat.width/2
  && cat.y - jerry.y < jerry.height/2 + cat.height/2 
  && jerry.y - cat.y < jerry.height/2 + cat.height/2){

    cat.addAnimation("catLastImage",catImage3)
    cat.changeAnimation("catLastImage");

}else{

    cat.addAnimation("running", catImage2)
    cat.changeAnimation("running")
}

}
