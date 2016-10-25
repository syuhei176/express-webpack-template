var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

app.post('/api', function(req, res) {
	res.status(200).send();
});




app.listen(process.env.PORT || 3000)