//load all necessary framework incl cors and body-parser helper
require('dotenv').config()
require('./database/client')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const path = require('path');
const app = express()
//fs is needed to serve JSON file
const fs = require('fs');
const port = process.env.PORT || 8080
//don't forget the routes
const pokeRoute = require('./routes/pokeRoute')
const pokeScore = require('./routes/pokeScore')

// serving the static folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

//this is for the jwt lib, lets our application use json from the body that gets passed up to it inside of request. 
app.use(express.json())

// configure express instance w/ some body-parser settings, including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//handling the cors for all
app.use(cors())


//handling the route
app.use('/pokemon', pokeRoute)
app.use('/score', pokeScore)


//Storing the scores route



app.get('/', (req, res) => {
    res.send('The homepage is working')
})

//listen to port
app.listen(port, () => {
    console.log(`server is listening at port ${port}`)
})
