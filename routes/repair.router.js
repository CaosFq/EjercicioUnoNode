const  { Router } = require('express')
const  { check } = require('express-validator')
const { RepairById, findRepairs, updateRepair, deleteRepair  } = require('../controllers/repair.controller')



router.get('/:id', RepairById)//Obtener un solo usuario dado un id

router.get('/', findRepairs)//Obtener una lista de usuarios



router.patch('/:id', updateRepair)//Actualizar los datos de un usuario dado un id, solo puede actualizar su name email

router.delete('/:id', deleteRepair)//deshabilitar la cuenta de un usuario

module.exports =  { 
    repairRout: router
}

