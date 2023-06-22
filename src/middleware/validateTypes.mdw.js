const validateTypesMdw = (val) => {
  return (req, res, next) => {
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
      // Validate if the isbn/library are valid integers
      if (isbn && !Number.isInteger(isbn)) {
        return res.status(400).json({error:"Invalid isbn, integer expected"});
      }

      if (library != null && !Number.isInteger(library)) {
        return res.status(400).json({error:"Invalid library, integer or null expected"});
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
      
    } else {
      // Unknown validation type
      return res.status(400).json({
        error: "Validation error",
      });
    }

    next();
  };
};


module.exports = validateTypesMdw;