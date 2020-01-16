const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
// Desafio
const UpdateController = require('./controllers/UpdateController');
const DestroyController = require('./controllers/DestroyController');

const routes = Router();


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
routes.get('/update', UpdateController.update);
routes.get('/destroy', DestroyController.destroy);

module.exports = routes;