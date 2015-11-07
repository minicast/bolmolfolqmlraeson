var models = require('../app/models');

module.exports = {
    index: function(req, res) {
        models.VipFormula.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.VipFormula.find({ _id: req.params.id }, function(err, formula) {
            if (err) {
                res.json({error: 'VipFormula not found.'});
            } else {
                res.json(formula);
            }
        });
    },
    add: function(req, res) {
        var newVipFormula = new models.VipFormula(req.body);
        newVipFormula.save(function(err, formula) {
            if (err) {
                res.json({error: 'Error adding formula.'});
            } else {
                res.json(formula);
            }
        });
    },
    update: function(req, res) {
        console.log(req.body);
        models.VipFormula.update({ _id: req.body._id }, req.body, function(err, updated) {
            if (err) {
                res.json({error: 'VipFormula not found.'});
            } else {
                res.json(updated);
            }
        })
    },
    delete: function(req, res) {
        models.VipFormula.findOne({ _id: req.params.id }, function(err, formula) {
            if (err) {
                res.json({error: 'VipFormula not found.'});
            } else {
                formula.remove(function(err, formula){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }
};
