// The Game itself
var game = new Phaser.Game(640, 480, Phaser.AUTO);

// The states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);


// Then, after you've identified all of the states, show the first one
game.state.start('boot');