
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer,ground,stone,rubber;



function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new ground(500,height,1200,20);
	hammer = new hammer(600,500,200,PI/2);
	stone = new stone(750,240,80,80);
  
	rubber = Bodies.circle(400,100,40,ball_options)
    World.add(world,ball);

    console.log(ground);
}


function draw() {
  background("cyan");
  Engine.update(engine);
  
  ground = new Ground(500,height,1200,20);
  hammer.display();
  stone.display();
  ground.display();

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}
}



