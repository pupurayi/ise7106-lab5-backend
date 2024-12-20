# ISE7106 LAB5 BACKEND
## RBZ ASSET REGISTER

This is a REST Api developed with Node.js ,Express.js, and MongoDB. It includes both Authentication and Authorization
using JWT tokens, it is meant to be as Simple and Secure as possible.

### Available Endpoints:


| Post | Parameters |
|:----:|:-----:|
| POST /api/asset | serial number,status,model,description,manufacturer,acquiredDate |
| PUT /api/asset/:id | serial number,status,model,description,manufacturer,acquiredDate|
| DELETE /api/asset/:id | x |
| GET /api/asset/:id | x |
| GET /api/assets ||


# How to install

1. Clone the repo
2. run `npm install` to install dependenices
```
DB_URL=mongodb://username:password@host/rest-api
PORT=4100
```
make sure to change host,username,password according to your mongodb config
5. Finally, start it with `npm start`