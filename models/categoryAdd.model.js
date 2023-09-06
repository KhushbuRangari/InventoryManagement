const  mongoose = require('mongoose');
const {Schema} = mongoose;

const CategoryAddSchema = new Schema(
    {
         categoryName:{
            type:String,
            required:true
        },
        categoryDescription:{
            type:String,
            required:true
        }
    }
);

const categoryAddModel =  mongoose.model('category',CategoryAddSchema);

module.exports = categoryAddModel;