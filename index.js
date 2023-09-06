const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');  //keeps the log
require('dotenv').config(); //which cannot be leaked to public
const Port = process.env.Port;
const app = express();
app.use(express.json());
 const connectDB = require('./connection');
 connectDB();

 const categoryRouter = require('./routes/category.routes');
 app.use('/category',categoryRouter);

const productRouter = require('./routes/product.routes');
app.use('/product',productRouter);

const InventoryRouter = require('./routes/inventory.routes');
app.use('/inventory',InventoryRouter);

const UserRouter = require('./routes/user.route')
app.use('/auth',UserRouter)

 app.listen(Port,()=>{
    console.log(`server is Running on port ${Port}`);
 })