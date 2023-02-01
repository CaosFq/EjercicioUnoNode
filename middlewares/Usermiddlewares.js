//Valido que el usuario exista:


const User = require("../models/user.module");

//Ejecute usuario por su id
User.validIfExistUserById = async (req, res, next) => {//funcion asincrona; promesa a la espera de algo¿que?Ver si cumple que id ingreado por ruta es igual a id de moelo de user
    try {
        const { id } = req.params;//le paso un id por rutas

        const user = await User.findOne({//Busca en User un id; await:esperar¿que? verificar condiciones
            where: {//donde
                id,//me dice: id:id, implica el id del modelo de user es igual al que paso por rutas
                status: 'true',//estatus verdadero
            }//la condicion antes mencionada se cumple o no. Si:
        })

        if (!user) {//Me dice que si el id no esta en mi base datos, pues es distinto a todos
            return res.status(404).json({//El codigo 404 me dice no se encuentra
                status: 'error',
                message: 'En nuestra base de datos no hay un usuario con la siguiente identificación: ' + id
            })

        }
        req.user = user
        next();//continua

    } catch (error) {//Atrapa un error
        return res.statuts(500).json({//Error que ocurre por culpa mia,"programador"
            status: 'fail',
            message: "No sos tu soy yo!!!, contacte con el administrador!"
        })

    }

}