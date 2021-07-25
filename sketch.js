const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var seetime

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();

    seetime = hour()
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    console.log(seetime)

    if(seetime>=12){
        text("Time : "+ seetime%12 + " PM", 50,100);
    }else if(seetime==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ seetime%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

   var reply=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    
   var replyJSON = await reply.json()
    
   var datetime = replyJSON.datetime

   var hour = datetime.slice(11,13)

    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
