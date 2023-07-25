const {Schema,model} = require ('mongoose')


const usuariosSchema = Schema({
    nombre:{
        type:String,
        requiered:[true, "name is require "]
    },

    email:{
        type:String,
        requiered:[true, "email is require "],
        unique:true
    },
    password:{
        type:String,
        requiered:[true, "password is require "],
    
    },
    imagen:{
        type:String,
        
    },
    rol:{
        type:String,
        requiered:true,
        default:"USER",
       /*  enum :['ADMIN','USER'] */
    
    },
    estado:{
        type:Boolean,
        default:true,
       
    },
    googleSignIn:{
        type:Boolean,
        default:false
    }
});


module.exports= model('Usuario',usuariosSchema);