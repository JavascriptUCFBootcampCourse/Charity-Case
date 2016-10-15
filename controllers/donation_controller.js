var models  = require('../models');
var express = require('express');
var router  = express.Router();
var path = require('path');


router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/../views/donation/index.html'));
});
router.post('/donate', function (req, res) {
	console.log(JSON.stringify(req.body));
	models.Donation.create({
		UserId: req.body.userId,
		charity: req.body.charity,
		amt: req.body.amt
	});
});

module.exports = router;
