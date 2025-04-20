const express = require('express');
const router = express.Router();

const User = require('../controllers/auth.controller');
const verifytoken = require('../middleware/verify-token');

router.post('/register', User.register);
router.post('/login', User.login);
router.get('/users', verifytoken, User.all_users);

module.exports = router;
