const express = require('express');
const router = express.Router();

const Note = require('../controllers/note.controller');
const verifytoken = require('../middleware/verify-token');

router.post('/create', verifytoken, Note.create);
router.get('/find/:id', verifytoken, Note.retrieve);
router.post('/find', verifytoken, Note.retrieveAll);
router.patch('/update', verifytoken, Note.update);
router.delete('/delete', verifytoken, Note.delete);

module.exports = router;
