var bootState = {

	score: 0,
	player: null,
	something: null,

	// default create()
	create: function() {
		// Here we could start physics if we needed it.

		// we might load string dictionaries or other things here.
		// tbdz.

		// Call the load state
		game.state.start('load');
	}


}