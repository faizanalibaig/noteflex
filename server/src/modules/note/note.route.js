const express = require('express');
const router = express.Router();

const Note = require('./note.controller');
const verifytoken = require('../../config/middleware/verify-token');

router.param('id', (req, res, next, id) => {
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).send({
      message: 'Invalid ID parameter',
    });
  }

  next();
});

router
  .route('/')
  .post(verifytoken, Note.create)
  .patch(verifytoken, Note.update)
  .delete(verifytoken, Note.delete)
  .get(verifytoken, Note.retrieveAll);

router.route('/:id').get(verifytoken, Note.retrieve);

module.exports = router;
