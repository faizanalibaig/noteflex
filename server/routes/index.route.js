const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route');
const noteRoute = require('./note.route');

router.use('/auth', authRoutes);
router.use('/note', noteRoute);

module.exports = router;
