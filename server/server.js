const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config;

const dbconfig = require('./src/config/db.config');
const IndexRoute = require('./index.route');

dbconfig();
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(morgan('dev'));

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use('/', IndexRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
