//SETTING UP EXPRESS LIBRARY
const express = require('express')
const connectDB = require('./config/db')
const app = express()
let cors = require('cors')

//CONNECT TO DATABASE
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//TESTING LANDING PAGE 'LOCALHOST/5000/'
app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`using port ${port}`))


