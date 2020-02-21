var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var http = require('http').Server(app);

app.use(express.static('client'));
http.listen(port, () => console.log(`Listening on ${ port }`));
