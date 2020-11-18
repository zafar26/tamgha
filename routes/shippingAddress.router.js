const router = require('express').Router();
const shippingAddressController = require('../controllers/shippingAddress.controller');
const passport = require('passport');
const { user, admin, guest } = require('../middlewares/auth')


router.get('/', passport.authenticate('user', { session: false }), shippingAddressController.getAll);
router.post('/', passport.authenticate('user', { session: false }), shippingAddressController.add);
router.put('/', passport.authenticate('user', { session: false }), shippingAddressController.update);
router.delete('/', passport.authenticate('user', { session: false }), shippingAddressController.delete);
router.get('/:addressID', passport.authenticate('user', { session: false }), shippingAddressController.getByID);
router.get('/:product_id', passport.authenticate('user', { session: false }), shippingAddressController.getByID);



module.exports = router;
