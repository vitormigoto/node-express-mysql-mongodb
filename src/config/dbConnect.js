const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vitormigoto:senhavitor123@miglabs.rebmjjb.mongodb.net/test-node");

let db = mongoose.connection;

module.exports = db;