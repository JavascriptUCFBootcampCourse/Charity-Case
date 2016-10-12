var models  = require('../models');
var express = require('express');
var router  = express.Router();
var path = require('path');


router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/../views/donation/index.html'));
});
router.post('/donate', function (req, res) {
  models.Donation.create({
    username: req.body.name,
    charityId: req.body.sleepy,
    user_id: req.session.user_id
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});

module.exports = router;