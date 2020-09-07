// Plugin Npm Node.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const path = require('path');

// Masquage des données grâce au package DOTENV
require("dotenv").config();
const ID = process.env.ID;
const MDP = process.env.MDP;

// Connection à la base de donnée Mongoose
mongoose.connect('mongodb+srv://admin:adrien@cluster0.yq4zd.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const Sauce = require('./models/sauce');
const User = require('./models/user');

// Routes 
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

// Utilisation du Framework Express
const app = express();

// Middleware pour les headers de requêtes et éviter les erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Traitement des sonnées par BodyParser 
app.use(bodyParser.json());
// Chemin virtuel pour les fichiers statiques tel que nos images
app.use('/images', express.static(path.join(__dirname, 'images')));
// Url des routes
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;