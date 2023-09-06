const express = require('express');
const InventoryRouter =express.Router();

let{AllInventory,inventoryAdd} = require('../controllers/inventory.controller');


// InventoryRouter.get('/info', AllInventory);

InventoryRouter.post('/add', inventoryAdd);


// InventoryRouter.put('/api/:id', updateinventory);
// InventoryRouter.delete('/api/:id', deleteinventory);
// InventoryRouter.get('/api/getProduct', getinventoryDetailById);
module.exports = InventoryRouter;