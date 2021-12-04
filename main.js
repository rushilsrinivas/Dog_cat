img="";
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#42ad2a");
    text("Dog",150,100);
    noFill();
    stroke("#42ad2a");
    rect(120,30,200,385);
    fill("#e3392d");
    text("Cat",500,100);
    noFill();
    stroke("#e3392d");
    rect(350,30,200,385);
    
}