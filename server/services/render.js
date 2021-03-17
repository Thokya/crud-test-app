exports.homeRoutes = (req, res) => {
    res.render('index');
};

exports.add_category = (req, res) => {
    res.render('add_cat');
};

exports.update_cat = (req, res) => {
    res.render('update_cat');
};