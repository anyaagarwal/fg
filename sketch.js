var database,button;
var playerIndex;
var gameState=0;
var playerCount;
var form,player,game;

function setup(){
    createCanvas(777,777);
    database=firebase.database();
    console.log(database);
   
    game=new Game();
    game.getState();
    game.start();

    var msge=database.ref('name');
    

    msge.on("value",readPosition);

}



function draw(){
    background(bg);

    if(mousePressedOver(button)){

    }
    
    
    drawSprites();
}



function readPosition(data){
  playerIndex=data.val();
}

function writePosition(name){
    database.ref(playerIndex).set({
        name:name
    });
    
}


