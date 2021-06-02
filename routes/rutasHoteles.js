const {Router} = require('express')

// importar los controladores
const {buscarReservaciones} = require('../controllers/controladorReservas.js')
const {buscarReservacionId} = require('../controllers/controladorReservas.js')
const {agregarReservacion} = require('../controllers/controladorReservas.js')
const {editarReservacion} = require('../controllers/controladorReservas.js')
const {eliminarReservacion} = require('../controllers/controladorReservas.js')

// importar las validaciones
const {validarPeticion} = require('../validations/validaciones.js')

// importar metodo check
const {check}= require('express-validator')

// creo lista de validaciones
let validaciones = Array(
    check('nombre',"Todos los campos son obligatorios").not().isEmpty(),
    check('apellido',"Todos los campos son obligatorios").not().isEmpty(),
    check('telefono',"Todos los campos son obligatorios").not().isEmpty(),
    check('fechaInicio',"Todos los campos son obligatorios").not().isEmpty(),
    check('fechaFinal',"Todos los campos son obligatorios").not().isEmpty(),
    check('numeroPersonas',"Todos los campos son obligatorios").not().isEmpty(),
    check('tipoPaquete',"Todos los campos son obligatorios").not().isEmpty(),
    validarPeticion
)



// personalizo las rutas
const rutas = Router()

// listado rutas
rutas.get('/reservaciones',buscarReservaciones)
rutas.get('/reservaciones/:id',buscarReservacionId)
rutas.post('/reservacion/nuevo',validaciones,agregarReservacion)
rutas.put('/reservacion/editar/:id',editarReservacion)
rutas.delete('/reservacion/eliminar/:id',eliminarReservacion)

// exporto rutas
module.exports = rutas


