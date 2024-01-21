const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connecter à MongoDB
mongoose.connect('mongodb+srv://meirroos:Ad5TUtBd8gVQieuv@clusterwebscool.cv7grk6.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connecté"))
  .catch(err => console.error("Erreur de connexion à MongoDB", err));

// Définir une route de base
app.get('/', (req, res) => {
    res.send('Serveur fonctionne!');
});

// Définir le port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

const sabresRouter = require('./routes/sabres');
app.use('/sabres', sabresRouter);

const personnagesRouter = require('./routes/Perso');
app.use('/Persos', personnagesRouter);
