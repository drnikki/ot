var loadState = {
	// preload is another standard function
	preload: function() {
		var loadingMsg = game.add.text(80,150, 'loading text!',
			{font: '30px Arial', fill: '#fff'});

		// we'd load images here too if we had them. i wish we had them.
	},

	create: function() {
		// Call the menu state
		game.state.start('menu');
	}
}