
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}
function keyPressed(){

  let  b = new Ball(100, 100);
  balls.push(b);
  print(balls);
}

class Ball {
 // here is where you’ll put the instructions for making balls
 constructor(x,y){
 		this.x = x;
     		this.y = y;
           }

}
