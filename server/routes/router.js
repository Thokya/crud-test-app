const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

route.get('/add_category', services.add_category);

route.get('/update_cat', services.update_cat);

// api
route.post('/api/category', controller.create);
route.get('/api/category', controller.find);
route.put('/api/category/:id', controller.update);
route.delete('/api/category/:id', controller.delete);

module.exports = route;