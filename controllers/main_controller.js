var models  = require('../models');
var express = require('express');
var path = require('path');
var router  = express.Router();

router.get('/', function(req, res) {
	console.log(__dirname);
	res.sendFile(path.join(__dirname+'/../views/main/index.html'));
});

router.post('/login', function (req, res) {
	console.log(JSON.stringify(req.body));
	models.User.findOne({
		where: {
			username: {
				$eq: req.body.uname
			}
		}
	})
	.then (function (user) {
		if (!user) {
			models.User.create({
				username: req.body.uname,
				password: req.body.psw
			})
			.then(function (newUser) {
				console.log(JSON.stringify(newUser));
				res.redirect('/donation?user=' + newUser.id);
			});
		}
		else {
			// We should probably check passwords, but it's for charity :).
			console.log(JSON.stringify(user));
			res.redirect('/donation?user=' + user.id);
		}
	});
});

module.exports = router;
