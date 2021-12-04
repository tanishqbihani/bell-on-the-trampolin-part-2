
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trampolin ,trampImg
var bell ,bellImg , bellFallImg
var ground;

function preload()
{
	bellImg = loadImage("bell jump.jpg");
	trampImg = loadImage("trampolin.jpg");
	bellFallImg = loadImage("bell fall.jpg");
	
}

function setup() {
	createCanvas(700, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground= new Ground(350,640,700, 20);
	bell= new Bell(Math.round(random(50,650)), 350);
	trampolin = new Trampolin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);


//

//ground.display();
trampolin.display();
bell.display();
  
 // drawSprites();
  
}



