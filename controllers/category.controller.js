const categoryAddModel = require('../models/categoryAdd.model');

const categoryAddAPI =async(req, res)=> {

    try {

        const {categoryName1,categoryDescription1} = req.body;

        console.log(req.body);
 
        const categoryAdd = new categoryAddModel({
            categoryName:categoryName1,
            categoryDescription:categoryDescription1
        })

        const sendCategoryData = await categoryAdd.save();

        if(!sendCategoryData){
            res.status(404).json({
                message:"Not added"
            }) 
        }
        res.status(201).json({
            message: "Data added successfully",
            sendCategoryData
        })

    } catch (error) {

        console.log(error, "Category Data not Added");
    }

}

const getcategoryData = async (req,res)=>{
    try {
        
        const getCatData = await categoryAddModel.find();
        if(!getCatData){
            res.status(404).json({
                message:"no data found"
            })
        }
        res.status(200).json({
            message:"success",
            getCatData
        })

    } catch (error) {
        console.log(error);
    }
}


const updateCategory = async (req,res)=>{
    const{id}=req.params;
    const { categoryName1}=req.body;

    console.log(id,categoryName1);
    try {
        const updatedData = await categoryAddModel.findByIdAndUpdate({_id:id},{categoryName:categoryName1},{
            new:true
        });
        if(!updatedData){
            res.status(404).json({
                message:"Category Name not updated"
            })
        }

        res.status(200).json({
            message:"Category Name Updted",
            updatedData
        })

    } catch (error) {
        console.log(error);
    }
}

const deleteCategory = async(req,res)=>{
    const{id}=req.params;
    try {
        const deleteData = await categoryAddModel.findById({_id:id})
        if(!deleteData){
            res.status(404).json({
                message:'Not deleted'
            })
        }

        res.status(200).json({
            message:"deleted",
            deleteData
        })
    } catch (error) {

        console.log(error);
    }
}

const getcategoryDataById = async (req,res)=>{
    const{id}=req.query;
    try {
        
        const getCatDataById = await categoryAddModel.findById({_id:id});
        if(!getCatDataById){
            res.status(404).json({
                message:"no data found with this id"
            })
        }
        res.status(200).json({
            message:"success",
            getCatDataById
        })

    } catch (error) {
        console.log(error);
    }
}


module.exports ={categoryAddAPI,getcategoryData,updateCategory,deleteCategory,getcategoryDataById};