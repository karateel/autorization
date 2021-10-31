const Router = require('express')
const router = new Router()
const controller = require('./authController.js')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware.js')
const roleMiddleware = require('./middleware/roleMiddleware.js')

router.post('/registration',[
    check('username', "The name cant be empty").notEmpty(),
    check('password', "Password more then 4 and less then 10").isLength({min: 4,max: 10})
],controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers)

module.exports = router