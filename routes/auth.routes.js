const {Router} = require ('express')
const {check} = require('express-validator')
const { login } = require('../controllers/auth.controllers')
const { validateDocumentos } = require('../middlewares/validate.documents')

const router = Router()


router.post("/login",[
    check('email', 'Email es requrido').isEmail(),
    check('password', 'Password es requrido').not().isEmpty(),
    validateDocumentos
],login)

module.exports = router;