const express = require('express');
const router = express.Router();
const Perso = require('../models/Personnage');

// Route pour obtenir tous les personnages
router.get('/', (req, res) => {
    Perso.find()
        .then(persos => res.json(perso))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Ajoute ici d'autres routes selon tes besoins

module.exports = router;
