const express = require("express");
const dotenv = require("dotenv")

const DbConnection = require("./databaseConnection")

const {users} = require("./data/users.json")


// importing routes
const usersRouter =  require("./routes/users")
const booksRouter = require("./routes/books")

dotenv.config()

const app = express();
DbConnection()

const PORT = 4000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Server is up and we are in home page"
    })
})

app.use("/users", usersRouter);
app.use("/books", booksRouter)


app.get("*", (req, res)=>{
    res.status(404).json({
        message: "This route does not exist"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is up n running on port ${PORT}`)
})