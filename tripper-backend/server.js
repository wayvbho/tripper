require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT

// express app
const app = express()

// middleware
app.use(express.json())

// listen for requests

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
})


// routes
app.get('/', (req, res) =>{
    res.send('Welcome to the Tripper backend!')
})


