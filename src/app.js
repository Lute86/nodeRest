const express = require('express');
const { initializeDB } = require('./config/db.config');
const { libraryRouter, bookRouter, userRouter, authRouter } = require("./routes/index.routes");



const PORT = 8090;
//Create server
const app = express()

//Mdw
app.use(express.json())

app.use(()=>console.log('Auth')/* login/auth */)

//Routes
app.use(()=>console.log('user')/* '/user' , userRouter */)
app.use(()=>console.log('library')/* library.. */)
app.use(()=>console.log('books')/* books.. */)

//Non-existent route
app.use(()=>console.log('404')/* 404 */)


//Run server
app.listen(PORT, async() => {
  await initializeDB();
  console.log(`Server running on port: ${PORT}`)
})