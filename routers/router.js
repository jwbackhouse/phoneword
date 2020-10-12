const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/', (req, res) => {

});

router.get('*', (req, res) => {
  res.send('Doh. That\'s a 404');
});

module.exports = router;
