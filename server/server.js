const express = require('express');
const cors = require('cors');
import cookieparser from 'cookie-parser';
require('dotenv').config;

const dbconfig = require('./config/db.config');
const IndexRoute = require('./routes/index.route');

dbconfig();
const app = express();
app.use(express.json());
server.use(cookieparser());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/', IndexRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
