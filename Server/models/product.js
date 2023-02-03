const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    category:{
        type: String,
        required:[true, 'Please Provide Product category']
    },
    subcategory:{
        type: String,
        required: [true,"Please Provide Product subcategory"]
    },
    name:{
        type: String,
        required: [true,'Please Provide Product Name']
    },
    price:{
        type: Number,
        required: [true, 'Please Provide Product Price']
    },
    size:{
        type: Number,
        required: [true,'Please Provide Product Size in Inches']
    },
    image:{
        type: String,
        required: [true,'Please Provide Product Image']
    },
    min_order_qty:{
        type: Number,
        required: [true,'Please Provide Product Min Order Quantity']
    },
    description:{
        type: String,
        required: [true,'Please Provide Product Description']
    },
    no_of_items: {
        type: Number,
        required: [true,'Please Provide Total no of Items']
    },
    total_qty: {
        type: Number,
        required: [true,'Please provide total quantity of trophies']
    },
    personlizations:{
        image: {
            type: String,
        },
        text:{
            type: String
        }
    }

})

module.exports = mongoose.model('Product',productSchema);