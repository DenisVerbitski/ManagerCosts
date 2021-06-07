const {Schema, model, ObjectId} = require("mongoose")


const User = new Schema({
    UserName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

module.exports = model('User', User)