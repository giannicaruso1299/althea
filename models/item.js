const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    event: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    },
    productImage: {
        type:String,
        required: true
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);