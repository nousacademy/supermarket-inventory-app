const express = require('express'),
 app = express(),
 path = require('path'),
 db = require('./db/inventory');

app.use(express.static(path.join(__dirname, '/public')));

// app.get('/',  (req, res) => res.send('Hello World'));

// Adding a new produce item

// Deleting a produce item

// Fetch the produce inventory
app.get('/inventory',  (req, res) => res.send(db));

app.listen(3000);
