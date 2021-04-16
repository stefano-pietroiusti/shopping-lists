const listsController = require('../controllers/listsController');
const config = require('../common/config');

const ADMIN = config.permissions.ADMIN;
const GUEST = config.permissions.GUEST;

exports.routesConfig = function (app) {
 // To validate JWT and MIN GUEST Permissions in each of the following    
    app.get('/', [
        // Validate JWT and MIN GUEST Permissions
        listsController.getWelcome
    ]);

    app.get('/lists', [
        listsController.getLists
    ]);
        
    app.get('/lists/:id', [
        listsController.getListById
    ]);

    app.get('/lists/:id/products/:id', [
        listsController.getProductById
    ]);
 
 // To validate JWT and MIN ADMIN Permissions in each of the following    
    app.post('/lists', [
        // Validate JWT and MIN ADMIN Permissions
        listsController.insertList
    ]);

    app.post('/lists/:id/products/', [
        listsController.insertProduct
    ]);

    app.put('/lists/:id', [
        listsController.putListById
    ]);

    app.patch('/lists/:id', [
        listsController.patchListById
    ]);

    app.delete('/lists/:id', [
        listsController.removeListById
    ]);
};
