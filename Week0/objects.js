var charizard = {
    "attack" : "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
    }

    /*
    -we want to add:
    -power
    -sidekick
    -race
    -gender
    -hideout
    -arch nemisis
    -what universe
    */
    function Superhero(realName, power, sidekick, race, gender, hideout, nemisis, universe){
        this.realName = realName;
        this.power = power;
        this.sidekick = sidekick;
        this.race = race;
        this.gender = gender;
        this.hideout = hideout;
        this.nemisis = nemisis;
        this.universe = universe;

        this.talk = function(){
            console.log( "Hello I am " + this.realName)
        }
    }

    var superman = new Superhero('Clark Kent', 'Heat vision', false, 
                                'Kryptonian', 'Male', 'Metroplis',  
                                'Lex Luthor', 'D.C');
    

    function Pizza(sauce, cheese, toppings, size){
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
        this.size = size;
    }

    var pizza = new Pizza('tomato', 'mozzerella', ['pinapples', 'ham', 'bacon'], 'xxl');