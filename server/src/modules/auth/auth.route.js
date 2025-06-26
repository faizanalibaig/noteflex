const express = require('express');
const router = express.Router();

const User = require('./auth.controller');
const verifytoken = require('../../middleware/verify-token');

router.route('/register').post(User.register);
router.route('/login').post(User.login);
router.route('/logout').get(User.logout);
router.route('/verify-token').get(verifytoken);

module.exports = router;
