const  mongoose = require('mongoose');
const {Schema} = mongoose;
const productID = mongoose.Schema.Types.ObjectId;

const InventorySchema = new Schema({
  
    product:{
        type:productID,
        ref:'product',
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    date_added:{
        type:String,
        default:new Date(Date.now())
    }
  
})

const inventoryModel = new mongoose.model('inventory',InventorySchema);

module.exports = inventoryModel;