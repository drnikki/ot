var menuState = {

	create: function() {
		// texts
		var startLabel = game.add.text(10, 10, 'TITLE HERE!',
			{font: '40px Arial', fill: '#fff'});
		var ctaLabel = game.add.text(10, 90, 'PUSH ENTER TO START',
			{font: '40px Arial', fill: '#fff'});

		// define the enter key
		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		// when it's pressed, call the start function.
		// todo, this!
		enterKey.onDown.addOnce(this.start, this);

	},

	start: function() {
		game.state.start('config');
	}

}