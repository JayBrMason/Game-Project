//create a variable to hold one ball
let b;
let anotherBall;
let thirdBall;
let human1;
let human2;





function setup() {
  createCanvas(800, 400);
  b = new CircularThing(0, 100,"red");
  anotherBall = new CircularThing(200,20,"green");
  thirdBall = new CircularThing(20, 20, "orange");
  let human1 = new Person(255, 255, 255);
  let human2 = new person(0, 0, 0);
}


function draw(){
	background("blue");


}


class CircularThing{

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
    this.x = this.x+2;
    this.y = this.y+.5;
  }
}


class Person{
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
    this.x = this.x+2;
    this.y = this.y+.5;
  }

//ball class from which to create new balls with similar properties.
