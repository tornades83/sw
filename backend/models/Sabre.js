const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
    Apparence: String,
    Histoire: String,
    Signification: String,
    Origine: String,
    Symbolisme: String,
    Caractéristiques_Uniques: String,
    Technique_de_Combat: String,
    Caractéristiques_techniques: String,
    Contexte: String,
    Impact_Culturel: String,
    Heritage: String,
    Histoire_dans_les_films: String,
    Construction: String,
    Details_uniques: String,
    Importance: String,

    
});

const sabreSchema = new mongoose.Schema({
    id: String,
    titre: String,
    IMAGE: String,
    description: descriptionSchema // Utilise le schéma de description ici
});

module.exports = mongoose.model('Sabre', sabreSchema);
