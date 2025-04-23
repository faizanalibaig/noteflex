const express = require('express');
const router = express.Router();

const Note = require('../controllers/note.controller');
const verifytoken = require('../middleware/verify-token');

router.post('/create', verifytoken, Note.create);
module.exports = router;
