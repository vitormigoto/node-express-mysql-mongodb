const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: String},
    rid: {type:Number, required:true},
    nome:{type: String, required:true},
    idade:{type:Number}
});

const users = mongoose.model('users', userSchema)

module.exports = users;