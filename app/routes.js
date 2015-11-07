var home = require('../controllers/home'),
    formulas = require('../controllers/formulas'),
    vipformulas = require('../controllers/vipformulas'),
    structures = require('../controllers/structures'),
    vipstructures = require('../controllers/vipstructures'),
    vipgames = require('../controllers/vipgames');

module.exports.initialize = function(app) {
    app.get('/', home.index);

    app.get('/api/formulas', formulas.index);
    app.get('/api/formulas/:id', formulas.getById);
    app.post('/api/formulas', formulas.add);
    app.put('/api/formulas/:id', formulas.update);
    app.delete('/api/formulas/:id', formulas.delete);

    app.get('/api/vipformulas', vipformulas.index);
    app.get('/api/vipformulas/:id', vipformulas.getById);
    app.post('/api/vipformulas', vipformulas.add);
    app.put('/api/vipformulas/:id', vipformulas.update);
    app.delete('/api/vipformulas/:id', vipformulas.delete);

    app.get('/api/structures', structures.index);
    app.get('/api/structures/:id', structures.getById);
    app.post('/api/structures', structures.add);
    app.put('/api/structures/:id', structures.update);
    app.delete('/api/structures/:id', structures.delete);

    app.get('/api/vipstructures', vipstructures.index);
    app.get('/api/vipstructures/:id', vipstructures.getById);
    app.post('/api/vipstructures', vipstructures.add);
    app.put('/api/vipstructures/:id', vipstructures.update);
    app.delete('/api/vipstructures/:id', vipstructures.delete);

    app.get('/api/vipgames', vipgames.index);
    app.get('/api/vipgames/:id', vipgames.getById);
    app.post('/api/vipgames', vipgames.add);
    app.put('/api/vipgames/:id', vipgames.update);
    app.delete('/api/vipgames/:id', vipgames.delete);
};
