var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var counter=0;
app.get('/counter',function (req,res){
    counter++;
    res.send(counter.toString());
});

app.get('', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/HD-High-Tech-Background.jpg', function (req,res){
    res.sendFile(path.join(__dirname, 'HD-High-Tech-Background.jpg'));
});
app.get('/Myself.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Myself.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','style.css'));
});
app.get('/create.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui','create.html'));
});
app.get('/create2.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui','create2.html'));
});
app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui','main.js'));
});
app.get('/ui/login.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui','login.css'));
});

app.get('/image.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'image.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
