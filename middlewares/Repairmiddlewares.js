//Valido que tenga una moto pendiente de reparar:


const Repair = require("../models/repair.module");

//Ejecute usuario por su id
User.validIfExistUserById = async (req, res, next) => {
    try {
        const { id } = req.params;//le paso un id por rutas

        const repair = await Repair.findOne({
            where: {
                id:userId,// tien que presentarse id===userId para que este pendiente de reparacion"Esta mal expresado"
                status: 'pending',
            }
        })

        if (!repair) {
            return res.status(404).json({
                status: 'error',
                message: 'En nuestra base de datos no hay una moto pendiente de reparacion con: ' + id
            })

        }
        req.repair = repair
        next();//continua

    } catch (error) {//Atrapa un error
        return res.statuts(500).json({//Error que ocurre por culpa mia,"programador"
            status: 'fail',
            message: "No sos tu soy yo!!!, contacte con el administrador!"
        })

    }

}