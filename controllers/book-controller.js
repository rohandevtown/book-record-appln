const {BookModel, UserModel} = require("../models");


exports.getAllBooks = async(req, res) => {
    const books = await BookModel.find();

    if(books.length == 0 ){
        return res.status(404).json({
            success: false,
            message: "No Book Found :-("
        })
    }

    res.status(200).json({
        success: true,
        data: books
    })
}

exports.getSingleBookById = async(req, res)=>{
    const {id} = req.params;

    // const book = books.find((each) => each.id == id);
    const book = await BookModel.findById(id)

    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book not found"
        })
    }
    return res.status(200).json({
        success: true,
        data: book
    })
}

exports.addNewBook = async(req, res)=>{
    // const {id, name, author, genre, price, publisher} = req.body;
    const {data} = req.body;

    // const book = books.find((each) => each.id == id);

    if(!data){
        return res.status(404).json({
            success: false,
            message: "Please enter the data to add the book"
        })
    }

    // books.push({id, name,  author, genre, price, publisher})
    await BookModel.create(data)
    const allBooks = await BookModel.find();

    return res.status(201).json({
        success: true,
        data: allBooks
    })

}

exports.updateBookById = async (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;

    // const book = books.find((each) => each.id == id);

    const updateBook = await BookModel.findOneAndUpdate({_id:id}, data, {new: true})

    //  if(!book){
    //     return res.status(404).json({
    //         success: false,
    //         message: "Book not found for the given id"
    //     })
    // }

    // const updatedBook = books.map((each)=> {
    //     if(each.id ==id){
    //         return {
    //             ...each,
    //             ...data,
    //         }
    //     }
    //     return each;
    // })

    return res.status(200).json({
        success: true,
        data: updateBook
    })
}


// module.exports = {getAllBooks, getSingleBookById}