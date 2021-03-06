const router = require('express').Router();
const likesController = require('../controllers/likes.controller');
const passport = require('passport');


router.get('/', passport.authenticate('user', { session: false }), likesController.getAll);
router.post('/', passport.authenticate('user', { session: false }), likesController.add);
// router.put('/', likesController.update);
router.delete('/', passport.authenticate('user', { session: false }), likesController.delete);
router.get('/getBy/:likeID', passport.authenticate('user', { session: false }), likesController.getByID);
router.get('/getByProductId/:product_id', passport.authenticate('user', { session: false }), likesController.getByID);



module.exports = router;
