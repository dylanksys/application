var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/users', function(req, res) {
	res.send('Path: /users');
};

router.get('/homies', function(req, res) {
	res.send('Path: /homies');
};

module.exports = router;
