const mongoose = require('mongoose')

// Connect from Database
module.exports = mongoose.connect(process.env.DB_URI)
