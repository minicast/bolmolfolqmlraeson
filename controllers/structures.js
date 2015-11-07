var models = require('../app/models');

module.exports = {
    index: function(req, res) {
        models.Structure.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Structure.find({ _id: req.params.id }, function(err, structure) {
            if (err) {
                res.json({error: 'Structure not found.'});
            } else {
                res.json(structure);
            }
        });
    },
    add: function(req, res) {
        var newStructure = new models.Structure(req.body);
        newStructure.save(function(err, structure) {
            if (err) {
                res.json({error: 'Error adding structure.'});
            } else {
                res.json(structure);
            }
        });
    },
    update: function(req, res) {
        console.log(req.body);
        models.Structure.update({ _id: req.body._id }, req.body, function(err, updated) {
            if (err) {
                res.json({error: 'Structure not found.'});
            } else {
                res.json(updated);
            }
        })
    },
    delete: function(req, res) {
        models.Structure.findOne({ _id: req.params.id }, function(err, structure) {
            if (err) {
                res.json({error: 'Structure not found.'});
            } else {
                structure.remove(function(err, structure){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }
};
