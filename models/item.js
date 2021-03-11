const mongoose = require('mongoose');
const {Schema} = mongoose;

const ItemSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    category: {
        type: String,
        required: true
    },
    event: {
        type:String,
    },
    colore: {
        type: String
    },
    conf_event: {
        type: String
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
    },
    productImageSm: {
        type: String
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);