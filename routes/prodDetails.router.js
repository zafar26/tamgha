const router = require('express').Router();
const prDetailController = require('../controllers/prodDetails.controller');
const passport = require('passport');
const { user, admin, guest } = require('../middlewares/auth')

router.use('/measurement', require('./prodMeasureValue.router'));

router.get('/', passport.authenticate('user', { session: false }), prDetailController.getAll);
router.post('/', passport.authenticate('user', { session: false }), prDetailController.add);
router.put('/', passport.authenticate('user', { session: false }), prDetailController.update);
router.delete('/', passport.authenticate('user', { session: false }), prDetailController.delete);
router.get('/:productDetailID', passport.authenticate('user', { session: false }), prDetailController.getByID);
router.get('/:product_id', passport.authenticate('user', { session: false }), prDetailController.getByID);


module.exports = router;
