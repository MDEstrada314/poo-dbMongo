const express = require('express');
const cors = require('cors');
const { dbCONNECTION } = require('../database/config.js');


class Server {
    constructor(){
        this.app= express();
        
        this.port=process.env.PORT
        this.usuariosPath="/api/usuarios";
        this.authPath="/api/auth";
        //conetar a la base de dato de mongo
        this.conectionDB()


        //middlewares
        this.middlewares();
        //routers
        this.routes()

    }

    async conectionDB(){
        await dbCONNECTION();
    }
    middlewares(){
        //cors
        this.app.use(cors());
        //leer y parciar un JSON en BODY
        this.app.use(express.json())
        //directorio publico
        this.app.use(express.static('public'));
    }


    routes(){
       this.app.use(this.authPath,require("../routes/auth.routes.js"))
       this.app.use(this.usuariosPath,require("../routes/usuario.routes.js"))

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`FUNCIONA EL PUERTO ${this.port}`);
        });

    }
}







module.exports = Server;