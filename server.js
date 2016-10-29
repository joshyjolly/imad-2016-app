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
app.get('/image.jpg', function (req,res){
    res.sendFile(path.join(__dirname,'a52cc0fd-9347-4c81-8029-a0d0ee9cc5ea.jpg'));
});
app.get('/Myself.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Myself.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','style.css'));
});
app.get('/ui/login.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui','login.html'));
});
app.get('/ui/login.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui','login.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
