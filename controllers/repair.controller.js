const Repair = require("../models/repair.module")


exports.findRepairById = (req, res) =>{ 
    const { Repair } = req;

    res.status(200).json({ 
        msg: 'El usuario con  : ' + id +'tiene su moto pendiente de reparacion'
    })
}

/********************Requiere todas validacion con middlewares************************ */




exports.findRepairs = async (req, res) =>{ //la fucion es asincrona
    
    const{Repair} = await User.findAll({//Es un lista de todos los usuario de la base de datos, await implica esperar
        where:{//donde
            status: true//la lista exista "sea verdadera"
        }
    })
    
    res.status(200).json({ 
       msg: 'la siguiente lista es de los usuarios presnetan motos pendientes de reparacion : '+ id

    })
}



exports.updaRepair = async (req, res) =>{ 
    const {User} = req;
    const{date, userId}=req.body
    await Repair.update({date, userId})
    
    res.status(200).json({ 
        msg:'date y correo userId se actualizaron correctamente'

    })
}
exports.deleteUser = async(req, res) =>{ 
    const{Repair}= req;
    await Repair.update({status: completed})

    res.status(200).json({ 
        msg:'La moto ya fue reparada su status es completado'

    })
}