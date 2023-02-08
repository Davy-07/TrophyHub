const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({

        buyer:{
            type: ObjectID,
            required: true,
            ref: 'User',
        },
        items: [{
            productID:{
                type: ObjectID,
                required: true,
                ref: 'Product'
            },
            name:{
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                required:true,
                min: 1,
                default: 1,
            },
            price:{
                type:Number,
                required: true
            }
        }],
        bill:{
            type: Number,
            required: true,
            default: 0,
        }
})

module.exports = mongoose.model('Cart',cartSchema);