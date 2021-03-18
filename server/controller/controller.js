const CatDB = require('../model/model');
let Catdb = require('../model/model');

// create and save new category
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" })
        return;
    }

    // create new category
    const category = new CatDB({
        id: req.body.id,
        name: req.body.name
    });

    // saving category in DB
    category
        .save(category)
        .then(data => {
            res.send(data);
        })
        .catch(e => {
            res.status(500).send({
                message: e.message || "Some error has occured while create operation"
            });
        });
}

// show all category/single category
exports.find = (req, res) => {

}

// update new category
exports.update = (req, res) => {

}

// delete category
exports.delete = (req, res) => {

}