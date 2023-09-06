const  mongoose = require('mongoose');
const {Schema} = mongoose;

const categoryID = mongoose.Schema.Types.ObjectId;

const ProductSchema = new Schema({
    product_name:{
        type:String,
        required:true
    },
    product_Tqnty:{
        type:Number,
        default:20,
        required:true
    },
    company:{
        type:String,
        required:true

    },
    price:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    color_choice:{
        type : String,
        enum:['red','yellow','green'],
        default:'red',
        required:true
    },
    comments:[{}],
    featured:{
        type:Boolean,
        default:false,
        required:true
    },
    category:{
        type:categoryID,
        ref:'category',
        required:true
    }
})

const productModel = new mongoose.model('product',ProductSchema);

module.exports = productModel;