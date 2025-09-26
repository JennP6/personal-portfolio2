/* File: index.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Jennifer Peart' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact', function(req, res, next) {
  console.log('Contact form data:', req.body);
  res.redirect('/');
});

module.exports = router;
