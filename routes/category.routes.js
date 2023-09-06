const express = require('express');
const categoryAddRouter = express.Router();
let {categoryAddAPI,getcategoryData,updateCategory,deleteCategory,getcategoryDataById} = require('../controllers/category.controller');

categoryAddRouter.get('/api',getcategoryData);
categoryAddRouter.post('/add',categoryAddAPI);
categoryAddRouter.put('/update/:id',updateCategory);
categoryAddRouter.delete('/delete/:id',deleteCategory);
categoryAddRouter.get('/getdata',getcategoryDataById);

module.exports = categoryAddRouter;