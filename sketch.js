//BSc Creative Computing
//Submission for simple video game
// Hilary Young 

//Instruction
//Catch the boba by moving the drink left/right using the trackpad.

var screen = 0;
var y=-20;
var x=200;
var speed = 5;
var score= 0;
var bubble;
var boba;
var town;
var backsound;
var ffont
var bubble2


function preload() {
  soundFormats('mp3', 'wav');
  
  	town = loadImage('town.jpg');
  	boba = loadImage('boba.png');
    bubble = loadImage('bubble.png');
    bubble2 = loadImage('bubble2.png');
	backsound = loadSound('bensound-cute.mp3');
	blub = loadSound('sound.wav');
    endsound = loadSound('buzzer_x.wav');
    ffont = loadFont('game_over.ttf');


}

function setup() {
  createCanvas(500, 710);
	  backsound.play();

}

function draw() {
	if(screen == 0){
    firstScreen()
  }else if(screen == 1){
  	startBoba()
  }else if(screen==2){
  	finalScreen()
  }	
}

function firstScreen(){
        imageMode(CENTER);
		backsound.pause();
		image(town,width/2,height/2,500,710)
		fill(0)
		textAlign(CENTER);
		textSize(40)
		text('click to start', 255, 300);
        
        textFont(ffont);
        textSize(70)
        text("Catch the Boba!", width / 2, 170)
  
		reset();
}

function startBoba(){
	imageMode(CENTER);
	backsound.setVolume(0.025);
	image(town,width/2,height/2,500,710)
			textSize(15)

    textSize(70)
    text("BOBA = " + score, 255,300)
    rectMode(CENTER)
    image(boba,mouseX,height-90,110,140)
  
    image(bubble,x,y,58,70)
	y+= speed;

    if(y>height){
  	screen =2
	backsound.stop();
    endsound.play();
    endsound.setVolume(0.5);
	 }
  
  if(y>height-110 && x>mouseX-25 && x<mouseX+25){
  	y=-20
    speed+=1.3
    score+= 1
		blub.play();
        blub.setVolume(0.5);
  } 
  
	if(y==-20){
  	bubbleRandom();
  }
}

function bubbleRandom(){
	x= random(20,width-20)
}

function finalScreen(){
		textAlign(CENTER);
        textSize(90)
        textSize(50)
		text('click to play again', width / 2, 190);
		text('GAME OVER:(', width / 2, 140)
}

function mousePressed(){
	if(screen==0){
  	screen=1
		backsound.loop();
	 backsound.play();

  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2.5;
  	y=-20;
}