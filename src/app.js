const express = require('express');
const { initializeDB } = require('./config/db.config');
const { libraryRouter, bookRouter, userRouter, authRouter } = require("./routes/index.routes");
const loggingMdw = require("./middleware/logging.mdw");



const PORT = 8090;
//Create server
const app = express()

//Mdw
app.use(express.json())

app.use(loggingMdw);

//=> Auth

app.get("/user", (req, res) => {
  console.log("User", req);
  res.send("<h1>Hello World</h1>");
});

//Routes
app.use('/user' , userRouter)
app.use('/library', libraryRouter)
app.use('/book', bookRouter)

// Non-existent route
app.use((req, res, next) => {
  console.log('404');
  res.status(404).send('404 - Not Found');
});

//Run server
app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running on port: ${PORT}`);
});