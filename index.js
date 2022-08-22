//SETTING UP EXPRESS LIBRARY
const express = require('express')
const connectDB = require('./config/db')
const app = express()

//CONNECT TO DATABASE
connectDB()

//TESTING LANDING PAGE 'LOCALHOST/5000/'
app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`using port ${port}`))


