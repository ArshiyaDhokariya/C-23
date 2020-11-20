const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

   

    box1 = new Box(200,300,50,60); //creating a object from blueprint(class)
    box2 = new Box (230,100,50,100)
    ground = new Ground(200,390,400,20) ;
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
   

    box1.display();
    box2.display();
    ground.display();
}