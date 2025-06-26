const express = require('express');
const router = express.Router();

const authRoutes = require('./src/modules/auth/auth.route');
const noteRoute = require('./src/modules/note/note.route');

router.use('/auth', authRoutes);
router.use('/note', noteRoute);

module.exports = router;
