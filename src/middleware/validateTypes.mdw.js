const { Op } = require("sequelize");
const Book = require("../models/books");

const validateTypesMdw = (val) => {
  return async (req, res, next) => {
    // Book properties validation
    if (val === "books") {
      const { isbn, title, author, year, library } = req.body;
      // Check if any of the properties is provided
      if (library === undefined && !isbn && !title && !author && !year) {
        return res.status(400).json({
          error: "Isbn, title, author, year, or library must be provided",
        });
      }
      // Check type
      // Validate if the isbn/library are valid integers => Model
      // if (isbn && !Number.isInteger(isbn)) {
      //   return res.status(400).json({error:"Invalid isbn, integer expected"});
      // }

      // if (library != null && !Number.isInteger(library)) {
      //   return res.status(400).json({error:"Invalid library, integer or null expected"});
      // }
      // Validate if title, author, and year are strings
      if (title && typeof title !== "string" || author && typeof author !== "string" || year && typeof year !== "string") {
        return res.status(400).json({ error: "Invalid entry (title, author, or year), string expected" });
      }
      //Check isbn validity 
      if (isbn && title) {
        try {
          // Find any book with the same ISBN but a different title
          const existingBook = await Book.findOne({
            where: {
              isbn,
              title: {
                [Op.ne]: title // Exclude books with the same title
              }
            }
          });
          // If an existing book is found, it means the ISBN is already associated with a different title
          if (existingBook) {
            return res.status(400).json({ error: "Duplicate ISBN with a different title" });
          } 
        } catch (error) {
          // Handle any error that occurs during the database query
          return res.status(500).json({ error: "Database error" });
        }
      }

    // Library properties validation
    } else if (val === "library") {
      const { name, location, phone } = req.body;
      // Check if any of the properties is provided
      if (!name && !location && !phone) {
        return res.status(400).json({
          error: "Name, location or phone must be provided",
        });
      }
      // Check type
      // Validate if name, location, and phone are strings
      if (name && typeof name !== "string" || location && typeof location !== "string" || phone && typeof phone !== "string") {
        return res.status(400).json({ error: "Invalid entry (name, location, or phone), string expected" });
      }
      
    } 
    //Validate user => used direct validation in Model
    // else if(val === "user"){
    //   const { firstName, lastName, email, password } = req.body;
    //   // Check if any of the properties is provided
    //   if (!firstName && !lastName && !email && !password) {
    //     return res.status(400).json({
    //       error: "firstName, lastName, enail and password must be provided",
    //     });
    //   }
    //   // Check type
    //   // Validate if values are strings
    //   if (firstName && typeof firstName !== "string" || lastName && typeof lastName !== "string" || email && typeof email !== "string" || password && typeof password !== string) {
    //     return res.status(400).json({ error: "Invalid entry in one of the fields, only string expected" });
    //   }
    // }
    else {
      // Unknown validation type
      return res.status(400).json({
        error: "Validation mdw error",
      });
    }

    next();
  };
};


module.exports = validateTypesMdw;