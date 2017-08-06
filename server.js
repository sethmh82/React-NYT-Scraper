var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = require('./models/Article.js');

//LOAD EXPRESS
var app = express();
// BODY PARSER
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('./public'));

// LOAD THE INDEX.HTML
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// LOAD SAVED ARTICLES
app.get('/api/saved', function(req, res) {
  Article.find({}).exec(function(err, doc){
      if(err){
        console.log(err);
      } else { res.send(doc); }
    })
});

// SAVE A NEW ARTICLE
app.post('/api/saved', function(req, res){
  var newArticle = new Article(req.body);
  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;
  newArticle.save(function(err, doc){
    if(err){ console.log(err); } 
    else { res.send(doc._id); }
  });
});

// DELETE THE ARTICLE ENTRY
app.delete('/api/saved/', function(req, res){
  var url = req.param('url');
  Article.find({"url": url}).remove().exec(function(err, data){
    if(err){ console.log(err); }
    else { res.send("Deleted"); }
  });
});

// LISTENING PORT
app.listen(PORT, function() {
  console.log("LISTENDING ON PORT: " + PORT);
});
