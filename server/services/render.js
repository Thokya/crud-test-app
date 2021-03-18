const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // get request to API /api/category
    axios.get('http://localhost:3000/api/category')
        .then(function (response) {
            // console.log(response.data);
            res.render('index', { categories: response.data });
        }).catch(e => {
            res.send(e);
        })
};

exports.add_category = (req, res) => {
    res.render('add_cat');
};

exports.update_cat = (req, res) => {
    res.render('update_cat');
};