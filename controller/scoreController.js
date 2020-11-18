const mongoose = require('mongoose')
const pokeSchema = require('../models/PokeScores')

const scoreController = (req, res) => {
    const { score, last_update } = req.body
    
     pokeSchema.create({ score, last_update })
       .then(data => res.json(data))
       .catch(err => console.error(err.message))
}

module.exports = scoreController;