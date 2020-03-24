let {PythonShell} = require('python-shell');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.redirect('index.html');
});

app.get('/track', function(req, res) {
  username = req.query.user;
  let options = {
    pythonOptions: ['-u'],
    args: [username]
  };

  PythonShell.run('scrape.py', options, function (err, results) {
    if (err) throw err;
    let followers = results;
    res.send({
      followers: followers
    });
  });
});

app.listen(8080);