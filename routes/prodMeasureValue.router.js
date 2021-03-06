const router = require('express').Router();
const productMVController = require('../controllers/prodMeasureValue.controller');
const passport = require('passport');


router.get('/', passport.authenticate('user', { session: false }), productMVController.getAll);
router.post('/', passport.authenticate('user', { session: false }), productMVController.add);
router.put('/', passport.authenticate('user', { session: false }), productMVController.update);
router.delete('/', passport.authenticate('user', { session: false }), productMVController.delete);
router.get('/getBy/:measurementID', passport.authenticate('user', { session: false }), productMVController.getByID);
router.get('/getByProductDetailId/:productDetailId', passport.authenticate('user', { session: false }), productMVController.getByID);


module.exports = router;
