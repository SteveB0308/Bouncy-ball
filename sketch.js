const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world =  engine.world;

  var options= {
    isStatic: true
  }
  
  var b_option = {
    restitution: 0.5
  }
  ground = Bodies.rectangle(200, 380, 400, 20, options);
  World.add(world, ground);

  ball= Bodies.circle(200,200,40,b_option);
  World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);
    
  
  
}