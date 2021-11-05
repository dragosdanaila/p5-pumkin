

//Global Variables
var pumpkinX,pumpkinY,pumpkinHeight,pumpkinWidth,pEyeSize,pIrisSize;

function setup() {
  createCanvas(600, 600);
  
  //initialising variables that affect all of the drawn shapes
  //x,y poisition:
  pumpkinX= width/2;
  pumpkinY= height/2;
  
  //height and width of circles
  pumpkinWidth=180;
  pumpkinHeight=pumpkinWidth-60;
  
  //variables that affect eye size 
  pEyeSize= pumpkinHeight-80;
  pIrisSize= pEyeSize-30;
}

function draw() {
    
    background(215);


    //PUMPKIN
  
    //Create a stem with dark and light overlapping shapes
  
     //green
    noStroke();
    fill(37,88,45);
    triangle(pumpkinX,pumpkinY-50,pumpkinX-20,pumpkinY-85,pumpkinX+20,pumpkinY-85)
  
    noStroke();
    fill(51,117,52);
    triangle(pumpkinX,pumpkinY-60,pumpkinX-10,pumpkinY-80,pumpkinX+10,pumpkinY-80)
  
    //back ellipse dark orange
    noStroke();
    fill(180, 52, 37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth,pumpkinHeight);
    
    //back ellipse light
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-10,pumpkinHeight-10);
  
    //Create another dark orange middle ellipse to make it look more pumpkin-y
  
    noStroke();
    fill(180,52,37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth-50,pumpkinHeight+10)


    //Create another light orange middle ellipse to make it look more pumpkin-y

    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-60,pumpkinHeight);
  
    //nose
	fill(150,25,0);
  	triangle(pumpkinX-15, pumpkinY+20, pumpkinX, pumpkinY-5, pumpkinX+15, pumpkinY+20);
  
    //left eye - add a right eye here
	noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX-35,pumpkinY-20,pEyeSize,pEyeSize);

  
    //eye pupils - add a left pupil here
	noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX-35,pumpkinY-20,pIrisSize,pIrisSize);
  
    //right eye
    noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX+35,pumpkinY-20,pEyeSize,pEyeSize);
  
    //right pupil
    noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX+35,pumpkinY-20,pIrisSize,pIrisSize);
  
}