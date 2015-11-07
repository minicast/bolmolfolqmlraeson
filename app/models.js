var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Formula = new Schema({
    ascii:      { type: String },
    domain:     { type: String },
    name:       { type: String },
    latex:      { type: String },
    unicode:    { type: String },
    parsed:     { type: String },
    syntaxtree: { type: String },
    status:     { type: String },
    description:{ type: String },
    sources:    { type: String },
    json:       { type: String }
});

var VipFormula = new Schema({
    ascii:      { type: String },
    domain:     { type: String },
    name:       { type: String },
    latex:      { type: String },
    unicode:    { type: String },
    parsed:     { type: String },
    syntaxtree: { type: String },
    status:     { type: String },
    description:{ type: String },
    sources:    { type: String },
    json:       { type: String }
});

var Structure = new Schema({
    ascii:      { type: String },
    domain:     { type: String },
    name:       { type: String },
    latex:      { type: String },
    // unicode:    { type: String },
    parsed:     { type: String },
    // syntaxtree: { type: String },
    status:     { type: String },
    description:{ type: String },
    sources:    { type: String }
});

var VipStructure = new Schema({
    ascii:      { type: String },
    domain:     { type: String },
    name:       { type: String },
    latex:      { type: String },
    // unicode:    { type: String },
    parsed:     { type: String },
    // syntaxtree: { type: String },
    status:     { type: String },
    description:{ type: String },
    sources:    { type: String }
});

var VipGame = new Schema({
    ascii:      { type: String },
    domain:     { type: String },
    name:       { type: String },
    latex:      { type: String },
    unicode:    { type: String },
    parsed:     { type: String },
    syntaxtree: { type: String },
    status:     { type: String },
    description:{ type: String },
    sources:    { type: String },
    json:       { type: String }
});

module.exports = {
      Formula: mongoose.model('Formula', Formula)
    , VipFormula: mongoose.model('VipFormula', VipFormula)
    , Structure: mongoose.model('Structure', Structure)
    , VipStructure: mongoose.model('VipStructure', VipStructure)
    , VipGame: mongoose.model('VipGame', VipGame)
};
