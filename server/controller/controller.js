// const Catdb = require('../model/model');
let Catdb = require('../model/model');

// create and save new category
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" })
        return;
    }

    // create new category
    const category = new Catdb({
        id: req.body.id,
        name: req.body.name
    });

    // saving category in DB
    category
        .save(category)
        .then(data => {
            // res.send(data);
            res.redirect('/add_category');
        })
        .catch(e => {
            res.status(500).send({ message: e.message || "Some error has occured while create operation" });
        });
}

// show all category/single category
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        Catdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `No entry found with ID : ${id}`
                    });
                } else {
                    res.send(data);
                }
            }).catch(e => {
                res.status(500).send({ message: `Error retriving category with ID : ${id}` });
            });
    } else {
        Catdb.find()
            .then(category => {
                res.send(category)
            })
            .catch(e => {
                res.status(500).send({ message: e.message || "Some error has occured while retriving category information" });
            });
    }
}

// update new category
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be empty" });
    }

    const id = req.params.id;
    Catdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update with ${id}. Category not found` });
            } else {
                res.send(data);
            }
        }).catch(e => {
            res.status(500).send({ message: "Error Update category information" });
        });
}

// delete category
exports.delete = (req, res) => {
    const id = req.params.id;
    Catdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete with ${id}. ${id} could be wrong` });
            } else {
                res.send({ message: `Category with ID as ${id} was deleted successfully` });
            }
        })
        .catch(e => {
            res.status(500).send({ message: `Could not delete category with ID : ${id}` });
        });
}