const express = require('express');
const router = express.Router();

const Note = require('../controllers/note.controller');
const verifytoken = require('../middleware/verify-token');

router.route('/create').post(verifytoken, Note.create);
router.route('/find/:id').get(verifytoken, Note.retrieve);
router.route('/find').post(verifytoken, Note.retrieveAll);
router.route('/update').patch(verifytoken, Note.update);
router.route('/delete').delete(verifytoken, Note.delete);

module.exports = router;
