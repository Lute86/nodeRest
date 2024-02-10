const express = require('express');
const { initializeDB } = require('./config/db.config');
const { libraryRouter, bookRouter, userRouter, authRouter } = require("./routes/index.routes");
const loggingMdw = require("./middleware/logging.mdw");
const swaggerDocs = require('./swagger.js')



const PORT = 8080;
//Create server
const app = express()

//Mdw
app.use(express.json())
app.disable('x-powered-by');
app.use(loggingMdw);


//Routes
app.use('/user' , userRouter)
app.use('/book', bookRouter)
app.use('/library', libraryRouter)
app.use("/login", authRouter);
try {
  swaggerDocs(app, PORT)
} catch (error) {
  console.log(error);
}

//Non-existent route

app.use('*', (req, res, next) => {
  console.log('404');
  res.status(404).send('404 - Not Found');
});

//Run server
app.listen(PORT, async () => {
  try {
    await initializeDB();
    console.log(`Server running on port: ${PORT}`);
  } catch (error) {
    
  }
});