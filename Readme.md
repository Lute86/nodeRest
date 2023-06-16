Node.js => MVC (Model-View-Controller) pattern architecture. 


Routes: 
  define the endpoints of the app and map them to specific controllers. 


Middleware: 
  often used for tasks such as authentication, logging, error handling, parsing request bodies, or any other custom processing that needs to be done before or after the main request handling.

Models:
  represent the data structures or business logic of your application. They define how data should be structured, validated, and manipulated. Models often interact with a database or any other persistence layer to retrieve or update data. They encapsulate the application's data-related functionality.

Controllers:
  handle the logic and flow of the application. They receive requests from the client, interact with models to fetch or update data, and determine the appropriate response to send back to the client. Controllers act as the intermediary between the incoming requests and the models or services responsible for processing them.

Services:
  responsible for encapsulating complex or reusable business logic that doesn't fit within a single model or controller. They handle specific tasks or operations that may require coordination between multiple models or external APIs. 

Providers:
  responsible for managing external services, libraries, or dependencies. They can handle tasks like connecting to a database, setting up authentication mechanisms, or configuring external APIs. Providers act as a bridge between your application and the external services it relies on.




First layout

- models/
  - indexModels.js
  - libraryModel.js
  - bookModel.js
  - userModel.js
- controllers/
  - indexControllers.js
  - libraryController.js
  - bookController.js
  - userController.js
- routes/
  - indexRoutes.js
  - libraryRoutes.js
  - bookRoutes.js
  - userRoutes.js
- services/
  - indexServices.js
  - libraryService.js
  - bookService.js
  - userService.js
- providers/
  - indexProvider.js
- middleware/
  -authMdw.js
- config/
  - dbConfig.js
- app.js
