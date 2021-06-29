let shipHealth = 3;
let crewLoyalty = 3;
let credits = 3;
let shipFuel = 3;

let gameTurn = 1;

//terminal work
$('body').terminal({
    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to Space Captain NLP Game');
    },
    founder: function () {
        this.echo('Connor White');
    },
    help: function () {
        this.echo('Answer questions to keep your stats above 0 for 20 rounds to win!\n'
        + 'founder - to know the founder\n'
        +'response - to respond to the AI!\n'
        + 'stats - view current game stats\n'
        + 'round - gives the rounds left till victory');
    },
    response: function(message){
        if(message == ""){
            this.echo("Response cannot be empty");
        }else{
            console.log("\nMessage = "+message);
            var response = httpGet('/game/'+message);
            var intent = httpGet('/intent/'+message);
            console.log(intent)
            interpretIntent(intent);
            this.echo(response+"\nShip Health: " + shipHealth +"\n"+"Crew Loyalty: " + crewLoyalty +"\n"+"Space Credits: " + credits +"\n"+"Ship Fuel: " + shipFuel +"\n" +
            "------------------------------------------------------------------------------------------------------\n"
            +randomEvent());
            if(loseConditions(shipHealth, crewLoyalty, credits, shipFuel)){
                this.clear();
                interpretIntent(intent);
                this.echo("YOU LOSE!\n Refresh to replay");
            }
            gameTurn++
            if(winCondition(gameTurn)){
                this.clear();
                this.echo("CONGRATS!\nYOU WON SPACE CAPTAIN!\n Refresh to replay")
            }
        }
        },

    stats: function(){
        this.echo("Ship Health: " + shipHealth +"\n"+"Crew Loyalty: " + crewLoyalty +"\n"+"Space Credits: " + credits +"\n"+"Ship Fuel: " + shipFuel +"\n")
    },

    round: function(){
        this.echo((20-gameTurn)+" turns remain till we have arrived back home!")
    }
}, {
    greetings: ' _________                           _________                __         .__        \n'
    + '/   _____/__________    ____  ____   \\_   ___ \_____  _______/  |______  |__| ____  \n'
    + '\\_____  \\\\____ \\__  \\ _/ ___\\/ __ \\  /    \\   \\/\__  \\ \\____ \\   __\\__  \\ |  |/    \\ \n'
    + '/        \\  |_> > __ \\\\  \\__\\  ___/  \\     \\____/ __ \\|  |_> >  |  / __ \\|  |   |  \\ \n'
    + '/_______  /   __(____  /\\___  >___  >  \\______  (____  /   __/|__| (____  /__|___|  /\n'
    + '        \\/|__|       \\/     \\/    \\/          \\/     \\/|__|             \\/        \\/ \n'
    + 'Welcome captain, type response before every message to play Space NLP Game\n Example: "response "destroy the ship""\n You must quote your sentence after the command response\n'
    + '- by Connor White\n'
    + randomEvent()
});



function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send(null);
    console.log("logged text " + xmlHttp.responseText);
    return xmlHttp.responseText;
}

function randomEvent(){
    //open ended questions, not yes or no!!!
    eventList = [
        "An Alien Ship is waiting near by, it seems hostile, what should we do?", //1
        "Captain we found the crews plans for a mutiny, what action do we take?",
        "A destress signal is coming from that abondended space station, what should we do?",
        "Sir a group of Androids have gone rogue, how should we deal with this?",
        "Captain we found a rare meteor near the ship, what should we do?", //5
        "A band of pirates are targeting our ship, what should we do?",
        "We found an enginner in a nearby space station, what should we ask him?",
        "Captain a solar storm is approaching how should we handle this?",
        "Captain an eldritch being is in our proximity, what do we do?",
        "We have entered a astroid belt, how should we handle this?",//10
        "An experiment went wrong in our lab, how should we handle this?",
        "Captain we are approaching a blackhole, what action do we take?",
        "An unkown planet is approaching, what should we do?",
        "A comet is passing dangeriously close to our ship, what do we do?",
        "Captain a friendly frieghter is passing by, what action should we take?", //15
        "Captain an antimatter explosion just went off a few light years away, what action do we take?",
        "Sir a distress signal is coming from an nearby moon, what should we do?",
        "Captain we found strange eggs covering the lower decks, what do we do?",
        "An animal has escaped the lab and is running throughout the ship, what actoin do we take?",
        "A nearby trading station is nearby, should we do anything?", //20
        "A giant chicken is floating nearby by, what should we do?",
        "Strange alien ants are flooding the decks, what action do we take?",
        "Sir there is a whole in our ship, what do we do?",
    ];
   eventChooser = Math.floor(Math.random() * eventList.length);
   chosenEvent = eventList[eventChooser] 
   return chosenEvent
}

function interpretIntent(intent){
    //ship+ crew-
    if(intent== "agent.attack"){
        if(shipHealth <5){        
            shipHealth-=1;
        }
        if(crewLoyalty < 5){
            crewLoyalty+=1;
        }
    }
    //fuel- loyalty-
    else if(intent== "agent.escape"){
        if(shipFuel <5){        
            shipFuel-=1;
        }
        if(crewLoyalty < 5){
            crewLoyalty-=1;
        }
    }
    //credits- loyalty+
    else if(intent== "agent.bribe"){
        if(credits <5){        
            credits-=1;
        }
        if(crewLoyalty < 5){
            crewLoyalty+=1;
        }
    }
    //credits+ fuel-
    else if(intent== "agent.investigate"){
        if(credits <5){        
            credits+=1;
        }
        if(shipFuel < 5){
            shipFuel-=1;
        }
    }
    //ship- loyatly-
    else if(intent== "agent.trick"){
        if(shipHealth <5){        
            shipHealth-=1;
        }
        if(crewLoyalty < 5){
            crewLoyalty-=1;
        }
    }
    //ship+ credits-
    else if(intent== "agent.repair"){
        if(shipHealth < 5){        
            shipHealth+=1;
        }
        if(credits < 5){
            credits-=1;
        }
    }
    //ship+ credits-
    else if(intent== "agent.peace"){
        if(shipHealth < 5){        
            shipHealth+=1;
        }
        if(credits < 5){
            credits-=1;
        }
    }
    //crew+ credits-
    else if(intent== "agent.remove"){
        if(crewLoyalty < 5){        
            crewLoyalty+=1;
        }
        if(credits < 5){
            credits-=1;
        }
    }
    //crew- credits+
    else if(intent== "agent.foot"){
        if(crewLoyalty < 5){        
            crewLoyalty-=1;
        }
        if(credits < 5){
            credits+=1;
        }
    }
    //fuel+ ship-
    else if(intent== "agent.collect"){
        if(shipHealth < 5){        
            shipHealth-=1;
        }
        if(shipFuel < 5){
            shipFuel+=1;
        }
    }
    //fuel- credits-
    else if(intent== "agent.defense"){
        if(credits < 5){        
            credits-=1;
        }
        if(shipFuel < 5){
            shipFuel-=1;
        }
    }
    //fuel-
    else if(intent== "agent.dodge"){
        if(shipFuel < 5){
            shipFuel-=1;
        }
    }
    //fuel+ crew-
    else if(intent== "agent.careful"){
        if(crewLoyalty < 5){        
            crecrewLoyaltyits-=1;
        }
        if(shipFuel < 5){
            shipFuel+=1;
        }
    }
    //crew+ credits-
    else if(intent== "agent.communicate"){
        if(credits < 5){        
            credits-=1;
        }
        if(crewLoyalty < 5){
            crewLoyalty+=1;
        }
    }
    //ship- crew- credits-
    else if(intent== "agent.nothing"){
        if(crewLoyalty < 5){        
            crewLoyalty-=1;
        }
        if(credits < 5){
            credits-=1;
        }
        if(shipHealth < 5){
            shipHealth-=1;
        }
    }
    //fuel+ credits+
    else if(intent== "agent.buyFuel"){
        if(credits < 5){        
            credits-=1;
        }
        if(shipFuel < 5){
            shipFuel+=1;
        }
    }
    //crew- fuel+
    else if(intent== "agent.eat"){
        if(crewLoyalty < 5){        
            crewLoyalty-=1;
        }
        if(shipFuel < 5){
            shipFuel+=1;
        }
    }
    //crew+ health+
    else if(intent== "agent.capture"){
        if(crewLoyalty < 5){        
            crewLoyalty+=1;
        }
        if(shipHealth < 5){
            shipHealth+=1;
        }
    }
    
}

function loseConditions(health, loyalty, spaceCredits, fuel,){
    if(health <=0 || loyalty <=0 || spaceCredits <=0 || fuel <0){
        return true
    }
    return false
}

function winCondition(turn){
    if(turn>=20){
        return true
    }
    return false
}
