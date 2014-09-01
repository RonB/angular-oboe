var express = require('express');
var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 9000);
app.use(express.static(__dirname + "/dist"));

// default load index.html
router.get('/', function(req, res) {
    res.sendfile('src/index.html');
});

// stream json (no parsing needed)
//router.get('/*.json', function(req, res) {
//    res.download('src' + req.path);
//});

// all others
router.get('/*', function(req, res) {
    res.sendfile('src' + req.path);
});

app.use('/', router);
app.listen(app.get('port'));