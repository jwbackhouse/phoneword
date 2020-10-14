const express = require('express');
const controller = require('../controllers/controller.js');
const { param } = require('express-validator');

const router = new express.Router();

// Includes query validation
router.get('/convert/:query', [
  param('query')
    .exists()
    .escape()
    .matches('^[0-9]*$')
], controller.converter);

module.exports = router;
