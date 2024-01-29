const mongoose = require('mongoose');
const Sabre = require('../models/Sabre'); // Assure-toi que le chemin est correct
const data = require('../../starwars-new/src/mongoDB/Sabre.json'); 
const sabresRouter = require('./routes/sabres');
app.use('/sabres', sabresRouter);

mongoose.connect('mongodb://localhost:27017/taBaseDeDonnees', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connecté");
    Sabre.insertMany(data)
        .then(() => console.log("Données insérées"))
        .catch(err => console.error("Erreur lors de l'insertion des données", err));
}).catch(err => console.error("Erreur de connexion à MongoDB", err));
