var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var fs = require ('fs');
<<<<<<< HEAD
=======
//
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
//
//   fs.appendFile('text.txt', 'Hello SNC!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
>>>>>>> 82aa4644d08cbd0fc2e294fdb5844e0ed56a5028

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD

app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/public', express.static(__dirname + "/public"));
app.use('/js', express.static(__dirname + "/js"));

=======
// app.use(express.static(__dirname + "/views"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "mainController"));
app.use('/public', express.static(__dirname + "/public"));
>>>>>>> 82aa4644d08cbd0fc2e294fdb5844e0ed56a5028


app.get('/', function (req, res) {
 res.sendFile(__dirname +'/index.html');

});


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(3050, function () {
    console.log("Listening on port %s...", server.address().port);
});



exports = module.express = app;
