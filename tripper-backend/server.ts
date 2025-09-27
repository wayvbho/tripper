import 'dotenv/config'
import express from 'express'
import tripRoutes from './routes/trips'

const PORT = process.env.PORT

// express app
const app = express()

// middleware
app.use(express.json())

// listen for requests
app.use('/api/trips', tripRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to the Tripper backend!')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})