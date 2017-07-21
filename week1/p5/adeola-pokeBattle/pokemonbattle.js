function setup(){
    createCanvas(800,800);
    background('white');
}

function draw(){
    fill('#00FFFF');
    rect(1,690,800,500); //bottom attack rect
    fill('#FFFFFF');
    ellipse(700, 100, 100); //top pokemon
    ellipse(293, 593, 100); //bottom pokemon
    rect(0,480, 200, 209); //pokedex rect
    noFill();
    fill('red');
    rect(360, 622, 200, 50 );// bottom red rect
    fill('green')
    rect(360, 622,200,50); // bottom green rect
    fill('red');
    rect(429, 111,200,50); //top red rect
    fill('green');
    rect(429, 111, 200, 50);//top green rect
    noFill();
    fill('black');
    textSize(20);
    text('HP:' + this.HP, 367, 593); // bottom HP
    fill('black');
    textSize(20);
    text('HP: '+this.HP, 439, 89); // top HP
    rect(0,690,200,95);
    rect(224,688,200,95)
}

function mousePressed(){
    console.log("The mouse is at this x : " + mouseX + ".");
    console.log("The mouse is at this y : " + mouseY + ".");
}










function Pokemon(NAME, TYPE, HP, ATTACK1, ATTACK2, ATTACK3, ATTACK4 ){
    this.NAME = NAME;
    this.TYPE = TYPE;
    this.HP = HP;
}

var pokemon1 = new Pokemon("Ursaring","normal", 90,); 
    
var pokemon2 = new Pokemon ("Articuno",["ice", "flying"], 90);

var pokemon3 = new Pokemon("Moltres", ["fire", "flying"], 90);
  
var pokemon4 = new Pokemon("Seviper", "poison", 73);

var pokemon5 = new Pokemon("Snorlax", "normal", 160);

var pokemon6 = new Pokemon("Ninetales", "fire", 73);