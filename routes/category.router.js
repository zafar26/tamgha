const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const passport = require('passport');



router.get('/', passport.authenticate('user', { session: false }), categoryController.getAll);
router.get('/', passport.authenticate('admin', { session: false }), categoryController.getAll);

router.post('/', passport.authenticate('user', { session: false }), categoryController.add);
router.put('/', passport.authenticate('user', { session: false }), categoryController.update);
router.delete('/', passport.authenticate('user', { session: false }), categoryController.delete);
router.get('/getBy/:categoryID', passport.authenticate('user', { session: false }), categoryController.getByID);




module.exports = router;
