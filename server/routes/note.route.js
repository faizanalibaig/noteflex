const express = require('express');
const router = express.Router();

const Note = require('../controllers/note.controller');
const verifytoken = require('../middleware/verify-token');

router
  .route('/')
  .post(verifytoken, Note.create)
  .patch(verifytoken, Note.update)
  .delete(verifytoken, Note.delete)
  .get(verifytoken, Note.retrieveAll);

router.route('/:id').get(verifytoken, Note.retrieve);

module.exports = router;
