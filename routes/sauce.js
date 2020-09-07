//plugin Npm Node.js
const express = require('express');
const router = express.Router();

// Middlewares avec auth pour sécuriser les connexions et Multher pour la gestion des images
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Controleurs des routes sauces
const sauceCtrl = require('../controllers/sauce');

// Les routes
router.post('/', auth, multer, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.updateSauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;