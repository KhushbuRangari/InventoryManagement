const inventoryModel = require('../models/inventory.model');

 
const AllInventory = async (req,res)=>{
    try {
        let allInventory = await inventoryModel.find();
        if (!allInventory) {
            return res.status(401).json({
                message: 'Data is not there',
                productData
            })
        }
        res.status(201).json({
            message: "Found Data",
            productData
        })

    } catch (error) {
        console.log(error,"Inventory All error");
    }
}

const inventoryAdd = async (req,res)=>{
    try {
        const{ product,quantity}= req.body;
        console.log("hello");
        console.log(req.body);
        const addinventoryData = new inventoryModel({
            product:product,
            quantity:quantity,
            // dateAdded:dateAdded
        })
    
        const saveData = await addinventoryData.save();
        if (!saveData) {
            return res.status(404).json({
                message: "Product not updated"
    
            })
        }
        res.status(201).json({
            message: "Saved Data",
            saveData
        })
    } catch (error) {
        console.log(error);
    }

}

 const updateinventory = async (req,res)=>{
    try {
        
    } catch (error) {
        log
    }
 }

// const deleteinventory = async (req,res)=>{}
// const getinventoryDetailById = async (req,res)=>{}

// ,updateinventory,deleteinventory,getinventoryDetailById
module.exports ={AllInventory,inventoryAdd};