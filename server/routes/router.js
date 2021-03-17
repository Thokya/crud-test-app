const express = require('express');
const route = express.Router();

const services = require('../services/render');

route.get('/', services.homeRoutes);

route.get('/add_category', services.add_category);

route.get('/update_cat', services.update_cat);

module.exports = route;