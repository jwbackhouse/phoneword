const express = require('express');
const controller = require('../controllers/controller.js');
const { body } = require('express-validator');

const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/convert', [
  body('input')
    .exists()
    .not().isEmpty()
    .trim()
    .escape()
    .matches('^[0-9]*$')
], controller.converter);

router.get('*', (req, res) => {
  res.send('Doh. That\'s a 404');
});

module.exports = router;
