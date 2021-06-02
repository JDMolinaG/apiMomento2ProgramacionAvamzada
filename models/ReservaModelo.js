const {model,Schema} = require('mongoose')

const Reservas = Schema({
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    telefono:{
        type:Number,
        required:true,
    },
    fechaInicio:{
        type:String,
        required:true,
    },
    fechaFinal:{
        type:String,
        required:true,
    },
    numeroPersonas:{
        type:Number,
        required:true,
    },
    tipoPaquete:{
        type:String,
        required:true,
    },
    
})

module.exports=model('Reservas',Reservas)