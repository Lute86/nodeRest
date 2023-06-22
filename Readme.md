Node.js RestApi  => MVC (Model-View-Controller) pattern architecture. 

To modify, create or delete admin login required. To see books or libraries, simple user or admin login.

Basic tests
/login requires
{
  "user": "",
  "pass": ""
}

/user
{
    "firstName": "Pepe",
    "lastName": "Gil",
    "email": "pepe@mail.com",
    "password": 123
}

/library
{
  "name": "Ateneo",
  "location": "CABA",
  "phone": "457392718"
}

/book
{
  "isbn": 14232,
  "title": "Siddharta",
  "author": "Herman Hesse",
  "year": 1984,
  "library": 1
}
isbn cant be duplicated for different titles

Theory
Routes: 
  /login => auth 
  /user => users
  /library => library
  /book => books
  define the endpoints of the app and connects them to specific controllers.


Middleware: 
  often used for tasks such as authentication, logging, error handling, parsing request bodies, or any other custom processing that needs to be done before or after the main request handling.
  Here being used for logging, auth, and validating body data for creating, updating.

Models:
  represent the data structures or business logic of your application. They define how data should be structured, validated, and manipulated. Models often interact with a database to retrieve or update data. They encapsulate the application's data-related functionality.


Controllers:
  handle the logic and flow of the application. They receive requests from the client, interact with models to fetch or update data, and determine the appropriate response to send back to the client. Controllers act as the intermediary between the incoming requests and the models or services responsible for processing them.

Services:
  responsible for encapsulating complex or reusable business logic that doesn't fit within a single model or controller. They handle specific tasks or operations that may require coordination between multiple models or external APIs. 

Providers:
  responsible for managing external services, libraries, or dependencies. They can handle tasks like connecting to a database, setting up authentication mechanisms, or configuring external APIs. Providers act as a bridge between your application and the external services it relies on.



