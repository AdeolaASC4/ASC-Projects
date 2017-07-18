function setup(){
    createCanvas(windowWidth, windowHeight);
    background("Blue");
}
function mouseDragged(){
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
     ellipse(random(mouseX), random(mouseY),random(mouseX),random(mouseY));
     trinangle(random(mouseX), random(mouseY),random(mouseX),random(mouseY), random(mouseX), random(mouseY));
    strokeWeight(5);
    
}