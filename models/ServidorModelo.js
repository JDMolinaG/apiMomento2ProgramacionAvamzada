const express = require('express')
var cors = require('cors')
const rutas=require('../routes/rutasHoteles.js')
const {conectarBD} = require('../database/conexion.js')
const { urlencoded } = require('express')

class ServidorModelo {
    constructor() {
        this.app = express()
        this.despertarBD()
        this.crearMiddlewares()
        this.llamarRutasApi()
    }

    despertarServidor() {
        this.app.listen(process.env.PORT, function () {
            console.log(`estoy conectado al puerto ${process.env.PORT} hola`)
        })
    }

    llamarRutasApi(){
        this.app.use('/',rutas)
    }

    despertarBD(){
        conectarBD()
    }

    crearMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
    }
}

module.exports=ServidorModelo