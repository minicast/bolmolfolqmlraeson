var models = require('../app/models');

module.exports = {
    index: function(req, res) {
        models.Formula.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Formula.find({ _id: req.params.id }, function(err, formula) {
            if (err) {
                res.json({error: 'Formula not found.'});
            } else {
                res.json(formula);
            }
        });
    },
    add: function(req, res) {
        var newFormula = new models.Formula(req.body);
        newFormula.save(function(err, formula) {
            if (err) {
                res.json({error: 'Error adding formula.'});
            } else {
                res.json(formula);
            }
        });
    },
    update: function(req, res) {
        console.log(req.body);
        models.Formula.update({ _id: req.body._id }, req.body, function(err, updated) {
            if (err) {
                res.json({error: 'Formula not found.'});
            } else {
                res.json(updated);
            }
        })
    },
    delete: function(req, res) {
        models.Formula.findOne({ _id: req.params.id }, function(err, formula) {
            if (err) {
                res.json({error: 'Formula not found.'});
            } else {
                formula.remove(function(err, formula){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }
};
