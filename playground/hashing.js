
const bcryptjs = require("bcryptjs");

var password = "12345678";
/*
bcryptjs.genSalt( 10, (err, salt) => {
	bcryptjs.hash(password, salt, (err, hash) => {
		console.log(hash)
	});
});
*/
var hashedPassword = "$2a$10$08yLFW16SHK4xpf5agncO./dslR0Gt8DdS5hih/8VlTWmOYq0hWxy";

bcryptjs.compare( "12345678", hashedPassword, (err, res) => {
	console.log(res)
})