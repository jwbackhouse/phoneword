const express = require('express');

const router = require('./routers/router.js');
// const userRouter = require('./routers/users.js');
// const logRouter = require('./routers/log.js');
// const statsRouter = require('./routers/stats.js');
// const authRouter = require('./routers/auth.js');

const app = express();
const port = process.env.PORT || 8080;

// Configure express
// app.set('view engine', 'pug');
// app.set('views', viewsPath);
// app.use(express.static(publicPath));
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json()); // Configure express to auto-parse JSON
// app.use(cookieParser());

// Handle CORS issues
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router);
// app.use(logRouter);
// app.use(statsRouter);
// app.use(userRouter);  // Must come last - contains 404 route

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
