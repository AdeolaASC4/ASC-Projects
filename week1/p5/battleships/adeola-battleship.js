var grid = [ [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7] ];

function setup(){
    createCanvas(800,800);
    background('#2ECC71');
}

function draw(){
    for(var i = 0; i < 8; i++ ){
     for(j = 0; j < 8; j++){
        rect(i*100, j*100, 100, 100);
        stroke('#0000FF')
        strokeWeight(6)
        
     }
}
}

function mousePressed