var models  = require('../models');
var express = require('express');
var router  = express.Router();
var path = require('path');


router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/../views/report/index.html'));
});
router.get('/:userId', function(req, res) {
		models.Donation.findAll({
		where: {
			UserId: {
				$eq: req.params.userId
			}
		}
	}).then(function(Donation) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('report/index', {
    	Donation : Donation
    });
  });
});

module.exports = router;