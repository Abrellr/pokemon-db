
const express = require('express');
const pokeScore = express.Router();
const scoreController = require('../controller/scoreController');



pokeScore.post('/', scoreController)
  
   

module.exports = pokeScore;