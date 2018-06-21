# ToDo-API
A node and mongodb based rest API. 

To Run 
===
* Install Mongo db and keep its server running on a different terminal on your localhost. 
* Clone the repository.
* ``` cd ToDo-API ```
* Run - 
``` node
npm install
node mongo-connect.js
```

Notes : The mongodb functionality is implemented in ```server.js``` through the Mongoose ORM and the API requests are handled through express. 

## To test
* Run - 
``` node 
npm run testIt
```
* Testing uses mocha and supertest modules.