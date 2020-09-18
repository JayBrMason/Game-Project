
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
  if (keyCode === UP_ARROW) {
  let  b_1 = new NewBall(100, 200, "blue");
  balls.push(b_1);
  print(balls);
}
    if (keyCode === DOWN_ARROW) {
    let  b = new Ball(100, 100, "red");
    balls.push(b);
    print(balls);
  }

}

class Ball {
 // here is where you’ll put the instructions for making balls
 constructor(x,y, color){
 		this.x = x;
     		this.y = y;
          this.color = color;

           }
  drawBall(){
      stroke(0);
    	fill(this.color);
      ellipse(this.x,this.y,10,10);
	}

    moveBall(){
	    this.x = this.x+2;
	    this.y = this.y+.5;
	}

}
class NewBall {
 // here is where you’ll put the instructions for making balls
 constructor(x,y,color){
 		this.x = x;
     		this.y = y;
          this.color = color;

           }
  drawBall(){
      stroke(0);
    	fill(this.color);
      ellipse(this.x,this.y,10,10);
	}

    moveBall(){
	    this.x = this.x+5;
	    this.y = this.y+.5;
	}

}
