const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object;
var ball;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  // creating Physisc engine
  engine = Engine.create();
  // refering to the world from physisc engine
  world = engine.world;
  var options = {
    'isStatic':true
  }
// creating object of rectangleshape
  object = Bodies.rectangle(400,390,800,20,options);
  // adding object to the world 
  World.add(world,object);

  var ballOptions = {
    'restitutewtion':0.8,
    'density':0.4
    }
    ball = Bodies.circle(100,150,10);
    World.add(world,ball);
}

function draw() {
  background(55,215,25); 
  Engine.update(engine);
  // displaying the object
  rectMode(CENTER);
  fill("red");
  rect(object.position.x,object.position.y,800,20);

  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,10,10);
  drawSprites();
}