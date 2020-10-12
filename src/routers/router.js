const express = require('express');
const controller = require('../controllers/controller.js');
const { body } = require('express-validator');

const router = new express.Router();

router.post('/convert', [
  body('input')
    .exists()
    .not().isEmpty()
    .trim()
    .escape()
    .matches('^[0-9]*$')
], controller.converter);

module.exports = router;
