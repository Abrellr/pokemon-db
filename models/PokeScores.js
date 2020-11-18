const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pokeSchema = new Schema({
    score: {type: String, min: 1, max: 50},
    last_update: {type: Date, default: Date.now()}
})

const PokeScores = mongoose.model('PokeScores', pokeSchema)

module.exports = PokeScores
