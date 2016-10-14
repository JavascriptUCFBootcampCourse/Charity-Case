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
	models.User.create({
		username: req.body.uname,
		password: req.body.psw
	})
	.then(function () {
		res.redirect('/donation');
	});
});

module.exports = router;
