# Authentication with JWT (JSON web tokens)

jsonwebtokens are one way to implement authentication in a website

# About setting up mongodb (cloud)

1. go to mongodb.com
2. create a cluster
3. create a database 
4. add collection (name of collection should be plural)
5. give access rights, create a new user maybe and then give read and write access.
6. go to connection, and get the connection uri

# App routes (MVC approach)

Model View Contoller approach is a codebase organization approach, means we gonna keep our auth-router handler into seperate folders.

### Auth Routes

1. /signup    GET 
2. /login     GET
3. /signup    POST
4. /login     POST
5. /logout    GET


### handling post routes with postman

1. First we need to use the express json parser middleware to handle json requests [ app.use(express.json()) ]

# User Model using Mongoose

1. create a models folder and to place all the models in [ User.js ] 
2. Create a schema for the model



# Using mongoose hooks to encrypyt and hash the password


# Using cookies 

1. cookies parser 