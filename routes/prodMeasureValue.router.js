const router = require('express').Router();
const productMVController = require('../controllers/prodMeasureValue.controller');
const passport = require('passport');
const { user, admin, guest } = require('../middlewares/auth')


router.get('/', passport.authenticate('user', { session: false }), productMVController.getAll);
router.post('/', passport.authenticate('user', { session: false }), productMVController.add);
router.put('/', passport.authenticate('user', { session: false }), productMVController.update);
router.delete('/', passport.authenticate('user', { session: false }), productMVController.delete);
router.get('/:measurementID', passport.authenticate('user', { session: false }), productMVController.getByID);
router.get('/:productDetail_id', passport.authenticate('user', { session: false }), productMVController.getByID);


module.exports = router;
