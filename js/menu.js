var menuState = {

	create: function() {
		// texts
		var nameLabel = game.add.text(80,80, 'oh hai',
			{font: '40px Arial', fill: '#333'});
		
		var startLabel = game.add.text(80,80, 'INFO INFO. PUSH ENTER TO START',
			{font: '40px Arial', fill: '#333'});

		// define the enter key
		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		// when it's pressed, call the start function.
		// todo, this!
		enterKey.onDown.addOnce(this.start, this);

	},

	start: function() {
		game.state.start('play');
	}

}