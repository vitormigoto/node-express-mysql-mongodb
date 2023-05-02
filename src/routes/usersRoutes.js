const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController');

router.get('/', usersController.getUsers);
router.get('/mysql', usersController.getUsersMysql);
router.get('/:id', usersController.getOneUser);

module.exports = router;