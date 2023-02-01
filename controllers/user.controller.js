const User = require("../models/user.module")


exports.findUserById = (req, res) =>{ //exporta un usuario que cumple con la identificacion enviada por ruta
    
    const { user } = req;//indica el usuario cumple con el requerimiento


    res.status(200).json({ //La respuesta a mi peticion es correcta, existe el usuario 
        msg: 'El usuario es: ' + user
    })
}


exports.findUsers = async (req, res) =>{ //la fucion es asincrona
    
    const{users} = await User.findAll({//Es un lista de todos los usuario de la base de datos, await implica esperar
        where:{//donde
            status: true//la lista exista "sea verdadera"
        }
    })
    
    res.status(200).json({ 
       msg: 'la lista de todos los usuarios de la base de datos es: '+users

    })
}

exports.createUser = async(req, res) =>{ //Vamos a crear un usuario

    const {name, email, password, role} = req.body//para crear el user necesito de la caracteristicas que lo identifican name, email, password, role, estos requerimientos los traigo del body
    await User.create({name, email, password, role}) 

    res.status(201).json({ // el esto 201 me indica que se creo correctamente
        msg:'El usuario se creo satisfactoriamente '

    })
}
exports.updateUser = async (req, res) =>{ //Para actualizar el nombrey correo electrónico de un usuario
    
    const {User} = req;
    const{name, email}=req.body
    await User.update({name, email})
    
    res.status(200).json({ 
        msg:'Los datos de nombre y correo electronico se actualizaron correctamente'

    })
}
exports.deleteUser = async(req, res) =>{ 
    const{User}= req;
    await User.update({status: false})

    res.status(200).json({ 
        msg:'El usuario fue eliminado correctamente'

    })
}






















































































