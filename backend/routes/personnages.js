const express = require('express');
const router = express.Router();
const Perso = require('../models/Personnage');
const personnagesRouter = require('./routes/Perso');
app.use('/personnages', personnagesRouter);
// Route pour obtenir tous les personnages
router.get('/', (req, res) => {
    Perso.find()
        .then(persos => res.json(perso))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Ajoute ici d'autres routes selon tes besoins

module.exports = router;






// Autres routes ou middlewares...
