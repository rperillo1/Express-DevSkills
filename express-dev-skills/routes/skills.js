var express = require('express');
var router = express.Router();
let skillsController = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:id', skillsController.show);
router.get('/:id/edit', skillsController.edit);

router.post('/', skillsController.create);
router.put('/:id', skillsController.update);
router.delete('/:id', skillsController.delete);



module.exports = router;
