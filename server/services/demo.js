var express = require('express'),
    _       = require('lodash'),
    sleep   = require('sleep');

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'test',
  password: 'test'
}, {
  id: 2,
  username: 'test2',
  password: 'test2'
}];

var configs = {
    name: 'Nguyen Nhu Tuan',
    email: 'tuanquynh0508@gmail.com',
    tel: '+84.903.258.221',
    web: 'http://tnqsoft.com',
    jobTitle: 'Web Developer'
};

// -----------------------------------------------------------------------
// Get User list
app.get('/api/demo', function(req, res) {
  res.status(200).send(users);
});

// Get Config
app.get('/api/configs', function(req, res) {
  res.status(200).send(configs);
});

// Demo slow api request
app.get('/api/slow', function(req, res) {
  let waitInSecond = 5;
  sleep.sleep(waitInSecond);
  res.status(200).send({
    message: 'Demo Slow API in ' + waitInSecond + ' second.'
  });
});
// -----------------------------------------------------------------------
