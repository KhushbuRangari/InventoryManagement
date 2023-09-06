const express = require('express');
const productRouter = express.Router();


let { productAPI, productAddAPI, updateproduct, deleteProduct, getProductDetailById ,getProductByCategory} = require('../controllers/product.controller');
productRouter.get('/info', productAPI);
productRouter.post('/add', productAddAPI);
productRouter.put('/api/:id', updateproduct);
productRouter.delete('/api/:id', deleteProduct);
productRouter.get('/api/getProduct', getProductDetailById);
productRouter.get('/api/ByCategory', getProductByCategory);
module.exports = productRouter;