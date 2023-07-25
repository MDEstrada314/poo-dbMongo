const {Router} = require ('express')
const {check} = require ('express-validator')
const { validateDocumentos } = require('../middlewares/validate.documents');

const Role = require('../models/Role')
const {getUsuarios,postUsurios,deleteUsuarios,putUsuarios,patchUsuarios}=require("../controllers/usuarios.controllers");



const routers= Router()
routers.get("/",getUsuarios);
routers.post("/",[
    check('nombre', 'el nombre no es valido').not().isEmpty(),
    check('password', 'debe ser min de 6 letras').isLength({min:6}), 
    check('email', 'el correo no es valido').isEmail(), 
    /* check('rol', 'no es un rol valido').isIn(['ADMIN','USER']),  */
    check('rol').custom(async(rol='')=>{
        const existeRol = await Role.findOne({rol})
        if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
        }
    }),
    validateDocumentos   


] ,postUsurios );
routers.delete("/",deleteUsuarios );
routers.put("/",putUsuarios );
routers.patch("/",patchUsuarios);


module.exports= routers