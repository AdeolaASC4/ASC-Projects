var x = 400; // player ship x coord
var y = 700; // player ship y coord
var xE = 0; //alien ships
var yE = 0; //alien ships
var w = 10; // bullet width
var h = 10; // bullet height
var width = 30; // alien ships
var height = 30; // alien ships

//setup
function setup(){
createCanvas(800, 800);
background('black');
}

//Bullet object
function Bullet(x,y,width,height){
    this.x = x + 40;
    this.y = y;
    this.width= w;
    this.height= h;
}

//Stores all bullets
var bulletChamber=[];

//alien ship object layout
function alienShips(xE){
    this.xE = xE;
    this.yE = yE;
    this.width = width;
    this.height = height;
};

//alien ship objects
var alienShip1 = new alienShips(xE + 20);
var alienShip2 = new alienShips(xE + 180);
var alienShip3 = new alienShips(xE + 340);
var alienShip4 = new alienShips(xE + 500);
var alienShip5 = new alienShips(xE +640);

// player
function draw(){
background("black");
noStroke();
var playerRect = rect(x,700,80,40);
var cannon = rect(x+35,y-20,20,20);

// alien
fill('white');
var alienArr = [alienShip1, alienShip2,alienShip3, alienShip4, alienShip5];
rect(alienShip1.xE,alienShip1.yE,alienShip1.width,alienShip1.height);
rect(alienShip2.xE,alienShip2.yE,alienShip2.width,alienShip2.height);
rect(alienShip3.xE,alienShip3.yE,alienShip3.width,alienShip3.height);
rect(alienShip4.xE,alienShip4.yE,alienShip4.width,alienShip4.height);
rect(alienShip5.xE,alienShip5.yE,alienShip5.width,alienShip5.height);

//player mechanics
for(i = 0; i < bulletChamber.length; i++){
  rect(bulletChamber[i].x, bulletChamber[i].y, w, h);
  bulletChamber[i].y = bulletChamber[i].y-10; 
  if(Bullet.x + Bullet.width > alienArr.xE + alienArr.yE && Bullet.y - 10 < alienArr.yE + alienArr.height && Bullet.height + alienArr.y > alienArr.y){
}else{clear(alienArr)}
 if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  }
}


function keyPressed(){
  if (keyCode == CONTROL) {
    bulletChamber.push(new Bullet(x,y-10,w,h));
    
  }
}

 
 function enemyMove(){
     for(i=0;i<aliensArr.length;i++){        //myarray=enemy ships
         if(aliensArr[i].xE > 500 || aliensArr.xe <0){
         xE *=-1
         }
     }



  