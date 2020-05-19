var express = require('express');
var router = express.Router();
let skillsController = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);
router.get('/:id', skillsController.show)

module.exports = router;
