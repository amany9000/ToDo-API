
const jwt = require("jsonwebtoken");

var data = {
	"auth" : "engineering-level"
}

var token = jwt.sign(data, "secret").toString(); // function to generate the token using data and secret 

token = "eyJhbGciOiJIUzI1NiJ9.ewogICJfaWQiOiAiNWI3YmJiZjg3MDk4OWU3M2I2MjAwOGQ5IiwKICAiYWNjZXNzIjogImF1dGgiCn0.VCin3v6_TxiqFuIUGXOVMZIwvMrhBI0NsHdBaWkYR6Y";
var decoded = jwt.verify(token, "secret"); // funtion to veify the token
console.log(decoded);                                   // (decoded will be an error as token is changed)

