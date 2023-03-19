"use strict";

var express = require('express');

var path = require('path');

var hbs = require('hbs');

var app = express();

var geocode = require('../utils/location');

var forecast = require('../utils/forecast');

var directory = path.join(__dirname, '../public');
var viewsPath = path.join(__dirname, '../templates/views');
console.log(viewsPath);
var partialsPath = path.join(__dirname, '../templates/partials');
var port = 3000;
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express["static"](directory));
app.get('', function (req, res) {
  res.render("index", {
    title: "Weather"
  });
});
app.get('/about', function (req, res) {
  res.render("about", {
    title: "About Me",
    name: "Momina Mustehsan"
  });
});
app.get('/weather', function (req, res) {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address !'
    });
  }

  var data = forecast(req.query.address);
  var data1 = geocode(req.query.address);
  res.send({
    "forecast": data,
    "geocode": data1
  });
});
app.get('/help', function (req, res) {
  res.render("help", {
    title: "Help"
  });
});
app.get('/*', function (req, res) {
  res.render("Page not Found");
});
app.listen(port, function () {
  console.log("Server is  listening at http://localhost:".concat(port));
});