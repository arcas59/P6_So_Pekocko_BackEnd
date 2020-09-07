//plugin Npm Node.js
const mongoose = require('mongoose');
// Plugin qui permets d'avoir un email unique pour l'inscription dans la base de données
const uniqueValidator = require('mongoose-unique-validator');

// Modèle des utilisateurs
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Utilisation du plugin uniquevalidator
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);