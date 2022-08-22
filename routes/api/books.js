// ROUTES/API/BOOKS.JS

const express = require('express')
const router = express.Router()

//LOAD BOOK MODEL TO USE FOR DATABASE
const Book = require('../../models/Book')

// localhost:5000/test - Testing Routes
router.get('/test', (req, res) => {
    res.send('book route testing!')
})

// localhost:5000/api/books
//get all books - public access
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books)) //transform data received into json format for user
    .catch(err => res.status(404).json({nobooksfound: 'No Books Found!'})) // return error message in json format
})

// localhost:5000/api/books/:id
// get a single book by its id
router.get('/:id', (req,res) => {
    Book.findByID(req.params.id) //receive :id through the url
    .then(book => res.json(book)) // return data in json format
    .catch(err => res.status(404).json({nobookfound: "The Specific Book Was Not Found!"})) //return error in json format
})

// localhost:5000/api/books/
// create a database entry for a new book
router.post('/', (res, req) => {
    Book.create(req.body)  //receive data from the body of request
    .then(book => res.json({message: "Book Added Succesfully!"})) //return a successful message
    .catch(err => res.status(400).json({error: "Unable To Add This Book!"})) // return an error message if book not created
})

// localhost:5000/api/books/:id
// update a book by its id
router.put('/:id', (req, res) => {
    Book.findByIDAndUpdate(req.params.id, req.body)  //receive data from url bar and body of request
    .then(book => res.json({message: 'Update Book!'})) //send a succesful message
    .catch(err => res.status(400).json({error: 'Unable To Update To The Database!'}))
})

// localhost:5000/api/books/:id
// delete a book by its id
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ message: 'BOOK DELETED!!!!' }))
      .catch(err => res.status(404).json({ error: 'No Book Found With This ID' }));
  })

module.exports = router
