const Usuario = require('../models/Usuarios.js')
const  bcryptjs = require('bcryptjs')


const getUsuarios = (req,res)=>{
    res.json({"mesaje":"home page"})
}


const postUsurios = async (req,res)=>{


    const {nombre, email, password, rol}= req.body;
    const usuario = new Usuario({nombre, email, password, rol})
    
    
    //verificar si el coreo ya existe (duplicado)
    const existenteEmail = await Usuario.findOne({email})
    if(existenteEmail){
        return res.status(400).json({
            msg: "Email ya esta registrado"
        })
    }
    
    
    
    //incritar nuestra contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)




    await usuario.save();

    res.json({"mesaje":"post Api",usuario})
}

const deleteUsuarios = (req,res)=>{
    res.json({"mesaje":"delete Api"}) 
}

const putUsuarios = (req,res)=>{
    res.json({"mesaje":"put Api"})
}


const patchUsuarios = (req,res)=>{
    res.json({"mesaje":"patch Api"})
}



module.exports= {
    getUsuarios,
    postUsurios,
    deleteUsuarios,
    putUsuarios,
    patchUsuarios
}