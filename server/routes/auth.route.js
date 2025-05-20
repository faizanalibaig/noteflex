const express = require('express');
const router = express.Router();

const User = require('../controllers/auth.controller');
const verifytoken = require('../middleware/verify-token');

router.route('/register').post(User.register);
router.route('/login').post(User.login);
router.route('/logout').get(User.logout);
router.route('/users').get(verifytoken, User.all_users);

module.exports = router;
