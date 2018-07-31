
var {user} = require("./../models/user.js");

var authenticate = (req, res, next) => {
	token = req.header("x-auth");
	user.findByToken(token).then((reply) => {
		if(!reply){
			return Promise.reject();
		}
		req.user = reply;
		req.token = token;
		console.log("auth")		
		next();
	}).catch((e) => {
		res.status(401).send("Invalid Request");
	})
}

module.exports = {authenticate};
