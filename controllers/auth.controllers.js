const {response} = require('express');
const Usuarios = require('../models/Usuarios');
const bcryptjs = require('bcryptjs')


const login = async (req,res=response)=>{
    const {email, password} = req.body
    try {
        //verificacion si existe el Email en la base de datos
        const existenteEmail = await Usuarios.findOne({email})
        if(!existenteEmail){
            return res.status(400).json({
                msg: "Email no existe"
            })
        }
        
        //verificar si el usuario esta activo 
        if(existenteEmail.estado===false){
            return res.status(400).json({
                msg: "el usuario no esta activo"
            })


        }

        //verifique si el passaword es correcto y concede con la llave
        const passwordValido = bcryptjs.compareSync(password,existenteEmail.password);

        if(!passwordValido){
            return res.status(400).json({
                msg: "Pasword no es correcto"
            })
    
    
        }
    
     


            res.json({
                msg:"datos cargados"
            })
    } catch (error) {
        res.json({
            msg:"datos  insuficientes "
        })
        
    }




}
    


module.exports = {
    login
}