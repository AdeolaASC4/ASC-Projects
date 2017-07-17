//HP,NUM,TYPE,BESTMOVE,LASTEVO,ATTACK,DEFENSE,SPEED
var pokemonRoster= [["Ursaring", 90,217,"normal","hammer arm",true,130,75,55],
                    ["Snorunt",50,361,"ice","blizzard",false,50,50,50],
                    ["Nuzleaf", 70,274,"dark" + " and " + "grass","extrasensory",false,70,40,60],
                    ["Arbok", 60,24,"poison","coil",true,85,69,80],
                    ["Ditto", 48,134,"normal","transform",true,48,48,48]];


var pokeDesc = '';
for(i = 0; i < pokemonRoster.length; i++){
    for(j = 0; j < pokemonRoster[i].length; j++){
        pokeDesc = pokeDesc + pokemonRoster[i][j] + " ";
    }
    pokeDesc = pokeDesc + "\n";
}
console.log(pokeDesc);
