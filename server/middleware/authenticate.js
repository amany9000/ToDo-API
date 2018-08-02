
var {user} = require("./../models/user.js");

var authenticate = (req, res, next) => {
	token = req.header("x-auth");
	console.log(token)
	user.findByToken(token).then((reply) => {
		console.log(reply)
		if(!reply){
			return Promise.reject();
		}
		req.user = reply;
		req.token = token;
		next();
	}).catch((e) => {
		res.status(401).send("Invalid Request");
	})
}

module.exports = {authenticate};
