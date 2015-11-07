var mongoose = require('mongoose'),
    models = require('./models'),
    md5 = require('MD5');

module.exports = {
    check: function() {

        models.VipGame.find({}, function(err, vipgames) {
            if (vipgames.length === 0) {
                console.log('no vipgames found, seeding...');

                var newVipGame = new models.VipGame({
                    ascii: 'game(p&q)', domain: "Propositional Logic"
                });
                newVipGame.save(function(err, vipgame) {
                    console.log('successfully inserted vipgame: ' + vipgame._id);
                });
                var newVipGame = new models.VipGame({
                    ascii: 'game(#p>*q)', domain: "Modal Logic"
                });
                newVipGame.save(function(err, vipgame) {
                    console.log('successfully inserted vipgame: ' + vipgame._id);
                });
                var newVipGame = new models.VipGame({
                    ascii: 'game($x(P(x)|(!yR(x,y))))', domain: "Predicate Logic"
                });
                newVipGame.save(function(err, vipgame) {
                    console.log('successfully inserted vipgame: ' + vipgame._id);
                });
                var newVipGame = new models.VipGame({
                    ascii: 'game#($x*(P(x)>*(!y#R(x,y))))', domain: "Quantified Modal Logic"
                });
                newVipGame.save(function(err, vipgame) {
                    console.log('successfully inserted vipgame: ' + vipgame._id);
                });

            } else {
                console.log('found ' + vipgames.length + ' existing vipgames!');
            }
        });

        models.VipStructure.find({}, function(err, vipstructures) {
            if (vipstructures.length === 0) {
                console.log('no vipstructures found, seeding...');

                var newVipStructure = new models.VipStructure({
                    ascii: 'model(p&q)', domain: "Propositional Logic"
                });
                newVipStructure.save(function(err, vipstructure) {
                    console.log('successfully inserted vipstructure: ' + vipstructure._id);
                });
                var newVipStructure = new models.VipStructure({
                    ascii: 'model(#p>*q)', domain: "Modal Logic"
                });
                newVipStructure.save(function(err, vipstructure) {
                    console.log('successfully inserted vipstructure: ' + vipstructure._id);
                });
                var newVipStructure = new models.VipStructure({
                    ascii: 'model($x(P(x)|(!yR(x,y))))', domain: "Predicate Logic"
                });
                newVipStructure.save(function(err, vipstructure) {
                    console.log('successfully inserted vipstructure: ' + vipstructure._id);
                });
                var newVipStructure = new models.VipStructure({
                    ascii: 'model#($x*(P(x)>*(!y#R(x,y))))', domain: "Quantified Modal Logic"
                });
                newVipStructure.save(function(err, vipstructure) {
                    console.log('successfully inserted vipstructure: ' + vipstructure._id);
                });

            } else {
                console.log('found ' + vipstructures.length + ' existing vipstructures!');
            }
        });

        models.Structure.find({}, function(err, structures) {
            if (structures.length === 0) {
                console.log('no structures found, seeding...');
                var newStructure = new models.Structure({
                    ascii: 'model (p&q)',
                });
                newStructure.save(function(err, structure) {
                    console.log('successfully inserted structure: ' + structure._id);
                });
            } else {
                console.log('found ' + structures.length + ' existing structures!');
            }
        });

        models.VipFormula.find({}, function(err, vipformulas) {
            if (vipformulas.length === 0) {
                console.log('no vipformulas found, seeding...');

                var newVipFormula = new models.VipFormula({
                    ascii: '(p&q)', domain: "Propositional Logic"
                });
                newVipFormula.save(function(err, vipformula) {
                    console.log('successfully inserted vipformula: ' + vipformula._id);
                });
                var newVipFormula = new models.VipFormula({
                    ascii: '(#p>*q)', domain: "Modal Logic"
                });
                newVipFormula.save(function(err, vipformula) {
                    console.log('successfully inserted vipformula: ' + vipformula._id);
                });
                var newVipFormula = new models.VipFormula({
                    ascii: '($x(P(x)|(!yR(x,y))))', domain: "Predicate Logic"
                });
                newVipFormula.save(function(err, vipformula) {
                    console.log('successfully inserted vipformula: ' + vipformula._id);
                });
                var newVipFormula = new models.VipFormula({
                    ascii: '#($x*(P(x)>*(!y#R(x,y))))', domain: "Quantified Modal Logic"
                });
                newVipFormula.save(function(err, vipformula) {
                    console.log('successfully inserted vipformula: ' + vipformula._id);
                });

            } else {
                console.log('found ' + vipformulas.length + ' existing vipformulas!');
            }
        });

        models.Formula.find({}, function(err, formulas) {
            if (formulas.length === 0) {
                console.log('no formulas found, seeding...');
                var newFormula = new models.Formula({
                    ascii: '(p&q)',
                });
                newFormula.save(function(err, formula) {
                    console.log('successfully inserted formula: ' + formula._id);
                });
            } else {
                console.log('found ' + formulas.length + ' existing formulas!');
            }
        });

    }
};
