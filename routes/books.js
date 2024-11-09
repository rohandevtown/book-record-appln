const express = require("express");
const {books} = require("../data/books.json");

// const BookModel = require("../models/book-model");
// const UserModel = require("../models/user-model");

const {BookModel, UserModel} = require("../models");
const { getAllBooks, getSingleBookById, addNewBook, updateBookById } = require("../controllers/book-controller");

const router = express.Router();



/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Paramaters: None
 */

// router.get("/", (req, res)=>{
//     res.status(200).json({
//         success: true,
//         data: books
//     })
// })

router.get("/", getAllBooks)



/**
 * Route: /books/:id
 * Method: GET
 * Description: Get book by their id
 * Access: Public
 * Paramaters: id
 */
// router.get("/:id", (req, res)=>{
//     const {id} = req.params;
//     const book = books.find((each) => each.id == id);
//     if(!book){
//         return res.status(404).json({
//             success: false,
//             message: "Book not found"
//         })
//     }
//     return res.status(200).json({
//         success: true,
//         data: book
//     })
// })

router.get("/:id", getSingleBookById)



/**
 * Route: /books
 * Method: POST
 * Description: Create a new book
 * Access: Public
 * Paramaters: None
 */
// router.post("/", (req, res)=>{
//     const {id, name, author, genre, price, publisher} = req.body;

//     const book = books.find((each) => each.id == id);

//     if(book){
//         return res.status(404).json({
//             success: false,
//             message: "Book exists with the given id"
//         })
//     }

//     books.push({id, name,  author, genre, price, publisher})
//     return res.status(201).json({
//         success: true,
//         data: books
//     })

// })

router.post("/", addNewBook)



/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book by their id
 * Access: Public
 * Paramaters: id
 */
// router.put("/:id", (req, res)=>{
//     const {id} = req.params;
//     const {data} = req.body;

//     const book = books.find((each) => each.id == id);
//      if(!book){
//         return res.status(404).json({
//             success: false,
//             message: "Book not found for the given id"
//         })
//     }

//     const updatedBook = books.map((each)=> {
//         if(each.id ==id){
//             return {
//                 ...each,
//                 ...data,
//             }
//         }
//         return each;
//     })

//     return res.status(200).json({
//         success: true,
//         data: updatedBook
//     })
// })


router.put("/:id", updateBookById)


/**
 * Route: /books/:id
 * Method: DELETE
 * Description: Deleting a book by their id
 * Access: Public
 * Paramaters: id
 */
router.delete("/:id", (req, res)=>{
    const {id} = req.params;

    const book = books.find((each) => each.id == id);
     if(!book){
        return res.status(404).json({
            success: false,
            message: "Book not found for the given id to delete here"
        })
    }

    const index = books.indexOf(user);
    books.slice(index, 1);

    return res.status(200).json({
        success: true,
        data: book
    })

})




module.exports = router