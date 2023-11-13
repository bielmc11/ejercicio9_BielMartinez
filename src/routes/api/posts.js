const router = require('express').Router();
const postController = require('../../controllers/posts.controller');

router.get('/', postController.getAll);
router.get('/:autorId', postController.getPostByAutor);

router.post('/', postController.createPost);

module.exports = router;