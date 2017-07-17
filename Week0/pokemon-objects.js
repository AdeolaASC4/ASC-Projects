//NAME, TYPE, HP, DEF, ATK, LEGEND
var pokemon1 = {
    NAME : "Ursaring", 
    TYPE : "normal",
    HP : 90, 
    DEF : 75,
    ATK :  130,
    LEGEND : false}
    
   var pokemon2 = { 
    NAME :"Articuno", 
    TYPE : ["ice", "flying"],
    HP : 90, 
    DEF : 100, 
    ATK : 85,
    LEGEND : true, 
   }
   var pokemon3 = {
    NAME :"Moltres",
    TYPE : ["fire", "flying"],
    HP:  90,
    DEF : 90, 
    ATK : 100, 
    LEGEND : true} 
   
  var pokemon4 = {
    NAME : "Seviper", 
    Type :"poison",
    HP : 73,
    DEF : 60,
    ATK : 100, 
    LEGEND : false} 
    var pokemon5 = {
        NAME : "Snorlax", 
        Type : "normal", 
        HP : 160, 
        DEF : 65, 
        ATK : 110, 
        LEGEND : false}
    var pokemon6 = {
        NAME :"Ninetales",
        Type : "fire",
        HP : 73,
        DEF: 75,
        ATK : 76,
        LEGEND : false}
    
var pokemonArray = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5,pokemon6]
function printRoster(){
    for(var i = 0; i < pokemonArray.length; i++){
        console.log(pokemonArray[i].NAME + " " + pokemonArray[i].TYPE + " " + pokemonArray[i].HP + " " + pokemonArray[i].DEF + " " + pokemonArray[i].ATK + " " + pokemonArray.LEGEND + "."); 
    }
}
printRoster();
pokemonAttacked();
function pokemonAttacked(){
    for(var i = 0; i < pokemonArray.length; i++){
        console.log(pokemonArray[i].HP -10);
    }
}

