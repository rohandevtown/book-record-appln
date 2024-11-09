const express = require("express");
const {users} = require("../data/users.json");

const {BookModel, UserModel} = require("../models");
const { getAllUsers, getSingleUserById, createNewUser, updateUserById } = require("../controllers/user-controller");
const router = express.Router();


/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Paramaters: None
 */

// router.get("/", (req, res)=>{
//     res.status(200).json({
//         success: true,
//         data: users
//     })
// })

router.get("/", getAllUsers)


/**
 * Route: /users/:id
 * Method: GET
 * Description: Get user by their id
 * Access: Public
 * Paramaters: id
 */
// router.get("/:id", (req, res)=>{
//     const {id} = req.params;
//     const user = users.find((each) => each.id == id);
//     if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User not found"
//         })
//     }
//     return res.status(200).json({
//         success: true,
//         data: user
//     })
// })

router.get("/:id", getSingleUserById)



/**
 * Route: /users
 * Method: POST
 * Description: Create a new user
 * Access: Public
 * Paramaters: None
 */
// router.post("/", (req, res)=>{
//     const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;

//     const user = users.find((each) => each.id == id);

//     if(user){
//         return res.status(404).json({
//             success: false,
//             message: "User exists with the given id"
//         })
//     }

//     users.push({id, name, surname, email, subscriptionType, subscriptionDate})
//     return res.status(201).json({
//         success: true,
//         data: users
//     })

// })

router.post("/", createNewUser)


/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating a user by their id
 * Access: Public
 * Paramaters: id
 */
// router.put("/:id", (req, res)=>{
//     const {id} = req.params;
//     const {data} = req.body;

//     const user = users.find((each) => each.id == id);
//      if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User not found for the given id"
//         })
//     }

//     const updatedUser = users.map((each)=> {
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
//         data: updatedUser
//     })
// })


router.put("/:id", updateUserById)







/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Deleting a user by their id
 * Access: Public
 * Paramaters: id
 */
router.delete("/:id", (req, res)=>{
    const {id} = req.params;

    const user = users.find((each) => each.id == id);
     if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found for the given id to delete here"
        })
    }

    const index = users.indexOf(user);
    users.slice(index, 1);

    return res.status(200).json({
        success: true,
        data: user
    })

})

module.exports = router