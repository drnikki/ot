var configState = {

		create: function() {
			var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
			// todo, a loop going over an array of text values

			var startLabel = game.add.text(10, 10, 'TITLE HERE! Choose a character',
				style);

			var chooseOne = game.add.text(10, 80, '1. small dog',
				style);

			var chooseOne = game.add.text(10, 150, '2. very large sloth',
				style);

			var chooseThree = game.add.text(10, 220, '3. penguin',
				style);

			// and then when the key is pressed, we roll to another state
			// with that specific configuration.  and we'd pass it some data.

			// Grab the keys they could use to choose
			this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
			this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
			this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
			
			// set callback and passed param
			// todo: copy pasta. abstract this once we're sure we will be
			// calling the same function for each hey.
			this.oneKey.onDown.addOnce(this.setCharacter, this);
			this.twoKey.onDown.addOnce(this.setCharacter, this);
			this.threeKey.onDown.addOnce(this.setCharacter, this);

		},

	// update runs on every frame and so is suitable for making something move or interrupting something
	// not necessarily waiting for input, but whatevz
	update: function() {

		
	},

	// todo: reduce scope of what's passed in.
	setCharacter: function(obj) {
		console.log(obj);
		// set some global shit here
		console.log('Setting character to keycode ' + obj.keyCode);
		this.player = obj.keyCode;
		// and then start the play state, ok cool.
		game.state.start('play');
	}
}