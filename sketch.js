var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
//	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxpos=350
     
	 leftverticalpart= Bodies.rectangle(boxpos+20,640,20,70,{isStatic:true});
	 World.add(world,leftverticalpart);
	 leftsprite = createSprite(boxpos,640,20,70);
	 leftsprite.shapeColor="brown";
	
	 middlepart= Bodies.rectangle(boxpos+80,665-20,150,20,{isStatic:true});
	 World.add(world,middlepart);
	 middlesprite = createSprite(boxpos+80,665,150,20);
	 middlesprite.shapeColor="brown";


	 rightverticalpart= Bodies.rectangle(boxpos+160-20,640,20,70,{isStatic:true});
	 World.add(world,rightverticalpart);
	 rightsprite = createSprite(boxpos+160,640,20,70);
	 rightsprite.shapeColor="brown";

	Engine.run(engine);
  
}


function draw() {
	//Engine.update(engine);
 // rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
}

function keyPressed() {
if(keyCode===LEFT_ARROW){
	helicopterSprite.x= helicopterSprite.x-20;
	translation={x:-20,y:0}
	Matter.Body.translate(packageBody,translation);
}else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x = helicopterSprite.x+20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody,translation);
	
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}




