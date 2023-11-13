const router = require('express').Router();
const autoresController = require('../../controllers/autores.controller');


router.get('/', autoresController.getAll)
router.post('/', autoresController.createAutor )

module.exports = router;