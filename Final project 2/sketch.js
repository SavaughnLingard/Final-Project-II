let ballx = 300
let bally = 300
let ballsize = 40
let score = 0
let gamestate = "L1";

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('white');
if(gamestate == "L1"){
  levelOne();
}
  if(gamestate == "L2"){
  levelTwo();
  }
  if(gamestate == "L3"){
  YOU_WIN();
  }
  
}

function levelOne(){
  fill('Blue')
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  
  let distToBall = dist(ballx,bally, mouseX,mouseY)
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height)
    score = score+1
  }
  if (score > 10){
  gamestate="L2"
  
  }
  ellipse(ballx,bally,ballsize,ballsize)
  fill(0)
  text(("Score: "+score),width/2,40)
text("Level 1", width/2,height-20)
textSize(20)
}

function levelTwo(){
  background('Black')
  fill('Purple')
  
  let distToBall = dist(ballx,bally, mouseX,mouseY)
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height)
    score = score+1
  }
  if (score > 20){
  gamestate="L3"
  
  }
 
  ellipse(ballx,bally,ballsize/2,ballsize/2)
  fill('Red')
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  text(("Score: "+score),width/2,40)
text("Last Level ", width/2,height-20)
textSize(20)
}
function YOU_WIN(){
  noStroke()
background ('White')
  fill('Purple')
  text("YOU WIN! Refresh to play again",width/2,height/2)
  textSize(50)
}