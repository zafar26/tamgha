const router = require('express').Router();
const commentController = require('../controllers/comment.controller');
const passport = require('passport');


router.get('/', commentController.getAll);
// router.post('/add', productController.add);



module.exports = router;
