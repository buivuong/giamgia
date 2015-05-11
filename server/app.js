var express = require('express');
var app = express();
var cors = require('cors');

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use(cors());

/* ROUTES */
require('./routes/security')(app);
require('./routes/database')(app);
/* END ROUTES */

/* ADMIN */
require('./routes/admin/security')(app);
/* END ADMIN */

var server = app.listen(3001, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})