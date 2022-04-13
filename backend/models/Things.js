const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    title: {type: 'string', required: true},
    description: {type: 'string', required: true},
    imageUrl: {type: 'string', required: true},
    userId: {type: 'string', required: true},
    price: {type: 'number', required: true},
});

module.exports = mongoose.model('Thing', thingSchema); // * mongoose.model('nom du modèle', Schema utilisé )