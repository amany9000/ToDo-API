# ToDo-API
A node and mongodb based rest API. 

## To Run 
* Clone the repository.  
 ``` cd ToDo-API ```
* Inlucde the dependecies - 
``` node
npm install
```
* To run the server - 
``` node
node server/server.js
```
## Notes 
* The mongodb functionality is implemented in ```server.js``` through the Mongoose ORM and the API requests are handled through express. 
* The API has been deployed at Heroku, here is the <a href = "https://polar-garden-35382.herokuapp.com/"> link</a>.
## To test
* Run - 
``` node 
npm test
```
* Securityand Authentication is enabled using jsonwebtoken, validator and bcrypt npm libraries. 
* Testing uses mocha and supertest modules.
