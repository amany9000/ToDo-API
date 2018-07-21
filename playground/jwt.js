
const jwt = require("jsonwebtoken");

var data = {
	"auth" : "engineering-level"
}

var token = jwt.sign(data, "verySecretive"); // function to generate the token using data and secret 

var decoded = jwt.verify(token + "1", "verySecretive"); // funtion to veify the token
console.log(decoded);                                   // (decoded will be an error as token is changed)