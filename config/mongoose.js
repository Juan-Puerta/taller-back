const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/taller");

module.exports = mongoose;
