const { Mongoose, isValidObjectId } = require('mongoose');
const productModel = require('../models/product.model');
const Productmodel = require('../models/product.model')

const productAPI = async (req, res) => {
    try {
        let productData = await Productmodel.find();

        if (productData.length < 1) {
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
        console.log(error);
    }
}


const productAddAPI = async (req, res) => {
    try {
        const { product_name, product_Tqnty, company, price, brand, color_choice, featured, category } = req.body;

        const productAddData = new Productmodel({
            product_name: product_name,
            product_Tqnty: product_Tqnty,
            company: company,
            price: price,
            brand: brand,
            color_choice: color_choice,
            featured: featured,
            category: category
        })

        

        // "product_name":"Apple iPhone ",
        // "product_Tqnty":20,
        // "company":"Apple",
        // "price":"2000",
        // "brand":"Apple" ,
        // "color_choice": "red",
        // "featured" : true,
        // "category" :category1


        // "product_name":" OPPO Mobile",
        // "product_Tqnty":15,
        // "company":"OPPO",
        // "price":"2000",
        // "brand":"OPPO LTD" ,
        // "color_choice": "red",
        // "featured" : true,
        // "category" :"64eb0000c6d77e9e194d2778"

        const sendProductData = await productAddData.save();

        if (!sendProductData) {
            return res.status(404).json({
                message: "Product not updated"

            })

        }
        res.status(201).json({
            message: "Saved Data",
            sendProductData
        })

    } catch (error) {
        console.log(error);
    }
}

const updateproduct = async (req, res) => {
    let { id } = req.params;
    let { price } = req.body;
    console.log(id, price, "From requests");
    try {
        const updateProduct = await Productmodel.findByIdAndUpdate({ _id: id }, { price: price }, {
            new: true
            //telling mongoose to return this new documnet;
        })

        if (!updateProduct) {
            return res.status(404).json({
                message: "Product not updated"

            })

        }

        res.status(200).json({
            message: "updated",
            updateProduct
        })
    } catch (e) {
        console.log(e);
    }
}

const deleteProduct = async (req, res) => {
    let { id } = req.params;
    try {
        const deletedProduct = await productModel.findByIdAndDelete({ _id: id });
        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not deleted"

            })

        }

        res.status(200).json({
            message: "deleted ",
            deletedProduct
        })
    } catch (error) {
        console.log(error, "Delete error");
    }
}


const getProductDetailById = async (req, res) => {
    let { id } = req.query;
    try {
        const getProduct = await Productmodel.findById({ _id: id })
        if (!getProduct) {
            return res.status(400).json({
                message: "no product with this id"
            })
        }
        res.status(200).json({
            message: 'got the product',
            getProduct
        })

    } catch (error) {
        console.log(error);
    }
}




const getProductByCategory = async (req, res) => {
    let {id} = req.query;
    console.log(id);


    try {

        if(isValidObjectId(id)){
            console.log("correct id ");
        }
        const getProduct = await Productmodel.find({category:id});

        // console.log(getProduct);
        if (!getProduct) {
            return res.status(400).json({
                message: "no product with this category"
            })
        }
        res.status(200).json({
            message: 'got the product',
            getProduct
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = { productAPI, productAddAPI, updateproduct, deleteProduct, getProductDetailById,getProductByCategory };
