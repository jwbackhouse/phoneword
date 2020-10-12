const express = require('express');
const controller = require('../controllers/controller.js');

const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/convert', controller.converter);

router.get('*', (req, res) => {
  res.send('Doh. That\'s a 404');
});

module.exports = router;
