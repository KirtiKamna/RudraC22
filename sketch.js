const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;
var object;

function setup() {

engine = Engine.create();
world = engine.world;

var object_options = {

  isStatic :true

}

object = Bodies.rectangle(200,380,400,50,object_options);
World.add(world,object);

console.log(object.type);
console.log(object.position.x);
console.log(object.position.y);
 createCanvas(400,400);

}

function draw() {
Engine.update(engine);
  background("pink");  
rectMode(CENTER);
rect(object.position.x,object.position.y,400,50);
  
}