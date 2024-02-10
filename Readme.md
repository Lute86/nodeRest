
Node.js RestApi  => MVC (Model-View-Controller) pattern architecture. 

ENDPOINTS 

------------------
/login
------------------
POST / => generates bearer token (admin token or regular user token)
{
  "user": "",
  "pass": ""
}

------------------
/user
------------------
GET
/ => returns an h1
/:userId  => returns user with id = userId

POST / => creates user
{
    "firstName": "Pepe",
    "lastName": "Gil",
    "email": "pepe@gmail.com",
    "password": 123
}

------------------------
/book
------------------------

=> requires login(simple user or admin) 
GET 
/ => returns all books
/:bookId => return book with id = bookId

=> requires admin auth
GET /deleted => returns deleted books

POST / => creates book
{
  "isbn": 14232,
  "title": "Siddharta",
  "author": "Herman Hesse",
  "year": "1984",
  "library": 1
}
isbn cant be duplicated for different book titles

PUT /:bookId => updates the book. At least one property needed

DELETE /:bookId => deletes book of id = bookId

----------------------
/library
----------------------
=> requires login(simple user or admin)

GET 
/ => returns all libraries
/:libraryId => return library with id = libraryId

=> requires admin auth

GET /deleted => returns deleted libraries

POST /:libraryId/book => creates book if libraryId exists
{
  "isbn": 14232,
  "title": "Siddharta",
  "author": "Herman Hesse",
  "year": "1984",
}
isbn cant be duplicated for different book titles. Library automatically filled/changed for current libraryId when creating from a library

POST / => creates library
{
  "name": "Ateneo",
  "location": "CABA",
  "phone": "457392718"
}

PUT /:libraryId => updates the library. At least one property needed

DELETE /:bookId => deletes library of id = libraryId


Theory
Routes: 
  /login => auth 
  /user => users
  /library => library
  /book => books
  theroutes define the endpoints of the app and connect them to specific controllers.


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


