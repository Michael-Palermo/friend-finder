// Variables - Dependencies
let express = require('express');
let path = require('path');

// Variables - Routing
let router = express.Router();


// GET - Route to home.html
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
})

// GET - Route to survey.html
router.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
})


// Export - Router
module.exports = router;