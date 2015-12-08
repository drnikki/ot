// The Game itself
var game = new Phaser.Game(640, 480, Phaser.AUTO);

// Identify the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
// for lack of a better term, we'll call it the state 
// in which you configure your player
game.state.add('config', configState);

game.state.add('play', playState);

// Then, after you've identified all of the states, show the first one
game.state.start('boot');