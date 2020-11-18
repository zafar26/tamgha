const router = require('express').Router();
const transactionController = require('../controllers/transaction.controller');
const passport = require('passport');
const { user, admin, guest } = require('../middlewares/auth')


router.get('/', passport.authenticate('user', { session: false }), transactionController.getAll);

router.post('/', passport.authenticate('user', { session: false }), transactionController.add);
// router.put('/', transactionController.update);
router.delete('/', passport.authenticate('user', { session: false }), transactionController.delete);
router.get('/:transactionID', passport.authenticate('user', { session: false }), transactionController.getByID);



module.exports = router;
