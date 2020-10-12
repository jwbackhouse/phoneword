const express = require('express');
const router = require('./src/routers/router.js');

const app = express();
const port = process.env.PORT || 8080;

// Handle CORS issues
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(router);

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
