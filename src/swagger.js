//import swaggerJsdoc from "swagger-jsdoc";
const swaggerJsdoc = require('swagger-jsdoc')
//import swaggerUi from "swagger-ui-express";
const swaggerUi = require('swagger-ui-express')
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini Blog API",
      description:
        "API endpoints for a mini blog services documented on swagger",
      contact: {
        name: "",
        email: "",
        url: "",
      },
      version: "1.0.0",
    },
    // servers: [
    //   {
    //     url: "http://localhost:8080/",
    //     description: "Local server",
    //   },
    //   {
    //     url: "<your live url here>",
    //     description: "Live server",
    //   },
    // ],
  },
  // looks for configuration in specified directories
  apis: ["src/routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
module.exports= swaggerDocs