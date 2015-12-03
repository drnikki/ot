var loadState = {
	// preload is another standard function
	preload: function() {
		var loadingMsg = game.add.text(80,150, 'loading text!',
			{font: '30px Arial', fill: '#939844'});

		// we'd load images here too if

	},

	create: function() {
		// Call the menu state
		game.state.start('menu');
	}

}