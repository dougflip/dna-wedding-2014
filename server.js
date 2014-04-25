var express = require('express');
var path    = require("path");

var app = express();

app.configure(function(){
  app.use(express.static(path.join(__dirname, "./public")));
});

app.listen(process.env.PORT || 9000);
