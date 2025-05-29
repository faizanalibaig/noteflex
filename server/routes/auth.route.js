const express = require('express');
const router = express.Router();

const User = require('../controllers/auth.controller');

router.route('/register').post(User.register);
router.route('/login').post(User.login);
router.route('/logout').get(User.logout);

module.exports = router;
