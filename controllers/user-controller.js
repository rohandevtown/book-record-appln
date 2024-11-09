const {BookModel, UserModel} = require("../models");

exports.getAllUsers = async(req, res)=>{
    const users = await UserModel.find()
     if(users.length == 0 ){
        return res.status(404).json({
            success: false,
            message: "No Book Found :-("
        })
    }

    return res.status(200).json({
        success: true,
        data: users
    })
}

exports.getSingleUserById = async(req, res)=>{
    const {id} = req.params;
    // const user = users.find((each) => each.id == id);
    const user = await UserModel.findById(id)
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    return res.status(200).json({
        success: true,
        data: user
    })
}

exports.createNewUser = async(req, res)=>{
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
    await UserModel.create(data)
    const allUsers = await UserModel.find();

    return res.status(201).json({
        success: true,
        data: allUsers
    })

}


exports.updateUserById = async (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;

    // const book = books.find((each) => each.id == id);

    const updateUser = await UserModel.findOneAndUpdate({_id:id}, data, {new: true})

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
        data: updateUser
    })
}


// module.exports = {getAllBooks, getSingleBookById}