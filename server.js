const express = require('express'),
 app = express(),
 bodyParser = require('body-parser'),
 path = require('path'),
 fs = require('fs'),
 db = require('./db/inventory');

// configure the app to use bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

// app.get('/',  (req, res) => res.send('Hello World'));

// Adding a new produce item
app.post('/add_item', (req, res) => {
  // get current data in db
  // console.log(db)
  // console.log(req.body)
  db.push(req.body);
  res.send(db)
});

// Deleting a produce item

// Fetch the produce inventory
app.get('/inventory',  (req, res) => res.send(db));

app.listen(3000);
