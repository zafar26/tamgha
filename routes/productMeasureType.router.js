const router = require('express').Router();
const productMTypController = require('../controllers/productMeasureType.controller');
const passport = require('passport');
const { user, admin, guest } = require('../middlewares/auth')


router.get('/', passport.authenticate('user', { session: false }), productMTypController.getAll);
router.post('/', passport.authenticate('user', { session: false }), productMTypController.add);
router.put('/', passport.authenticate('user', { session: false }), productMTypController.update);
router.delete('/', passport.authenticate('user', { session: false }), productMTypController.delete);
router.get('/:typeID', passport.authenticate('user', { session: false }), productMTypController.getByID);
router.get('/:product_id', passport.authenticate('user', { session: false }), productMTypController.getByID);



module.exports = router;
