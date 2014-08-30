
var express = require('express');
var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 9000);
app.use(express.static(__dirname + "/dist"));

// test route to make sure everything is working
router.get('/', function(req, res) {
        res.sendfile('src/index.html');
	//res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/*', function(req, res) {
        console.log(req.path)
        res.sendfile('src/' + req.path);
});


app.use('/', router);

app.listen(app.get('port'));