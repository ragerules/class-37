var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allplayers;
var distance = 0;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if(playerCount === 2) {
  game.update();
}
if(gameState === 1) {
  clear();
  game.play();
}
}
