const mongoose = require("mongoose");

mongoose.connect(process.env.URLMONGO);

module.exports = mongoose;
