var express = require ('express');

var home = require('../routers/home');
var updatedroutes = require('../routers/updatedroutes');

var app = express();

app.use('/', home);
app.use('/api', updatedroutes);

app.listen(1800, function () {
	console.log('application listening on port 1800');
};
