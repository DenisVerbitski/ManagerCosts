const {model, Schema, ObjectId} = require('mongoose')

const Data = new Schema({
    category: {type: String, required: true},
    categoryItem: {type: String, required: true}
})

module.exports = model('Data', Data)