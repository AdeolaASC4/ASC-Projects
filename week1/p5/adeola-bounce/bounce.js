function setup(){
    createCanvas(800,800);
    background("#aaff80");
}

var posX = 800/2;
var posY = 800/2;
var x = 8;
var y = 10;
function draw(){
    posX = posX + x;
    posY = posY + y;
    background("#aaff80");
    mouseclicked()
        ellipse(posX,posY,100);

    if(posX>=750 || posX<=50){
        x = -x;
    }
    if(posY>=750 || posY<=50){
        y= -y;
    }
    }
