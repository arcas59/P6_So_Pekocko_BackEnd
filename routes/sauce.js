//plugin Npm Node.js
const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Controleurs des routes sauces
const sauceCtrl = require('../controllers/sauce');

// Les routes
router.get('/', auth, sauceCtrl.getAllsauce);
router.post('/', auth, multer, sauceCtrl.createsauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);
router.get('/:id', auth, sauceCtrl.getOnesauce);
router.get('/', auth, sauceCtrl.getAllSauces)
router.put('/:id', auth, multer, sauceCtrl.modifysauce);
router.delete('/:id', auth, sauceCtrl.deletesauce);

module.exports = router;