const express = require('express');
const cors = require('cors');
require('dotenv').config;

const dbconfig = require('./config/db.config');
const AuthRoute = require('./routes/auth.route');
const NoteRoute = require('./routes/note.route');

dbconfig();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/auth', AuthRoute);
app.use('/note', NoteRoute);

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
