var models = require('../app/models');

module.exports = {
    index: function(req, res) {
        models.VipGame.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.VipGame.find({ _id: req.params.id }, function(err, game) {
            if (err) {
                res.json({error: 'VipGame not found.'});
            } else {
                res.json(game);
            }
        });
    },
    add: function(req, res) {
        var newVipGame = new models.VipGame(req.body);
        newVipGame.save(function(err, game) {
            if (err) {
                res.json({error: 'Error adding game.'});
            } else {
                res.json(game);
            }
        });
    },
    update: function(req, res) {
        console.log(req.body);
        models.VipGame.update({ _id: req.body._id }, req.body, function(err, updated) {
            if (err) {
                res.json({error: 'VipGame not found.'});
            } else {
                res.json(updated);
            }
        })
    },
    delete: function(req, res) {
        models.VipGame.findOne({ _id: req.params.id }, function(err, game) {
            if (err) {
                res.json({error: 'VipGame not found.'});
            } else {
                game.remove(function(err, game){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }
};
