const mongoose = require('mongoose')

// Connect from Database
module.exports = mongoose.connect(
	`mongodb+srv://${import.meta.env.VITE_BASE_USERNAME}:${
		import.meta.env.VITE_BASE_PASSWORD
	}@cluster0.dfehrge.mongodb.net/`
)
