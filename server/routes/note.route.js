const express = require('express');
const router = express.Router();
const Note = require('../controllers/note.controller');

router.post('/create', Note.create);
module.exports = router;
