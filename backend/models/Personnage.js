const mongoose = require('mongoose');

const personnageSchema = new mongoose.Schema({
    titre: String,
    IMAGE: String,
    description: String,
    
});

module.exports = mongoose.model('Perso', personnageSchema);
