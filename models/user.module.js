const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const User = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: available,
        enum:['client', 'employee']
    },
    status: {//El estado de la reparacion tiene que ser pending, completed, cancelled. ¡¡¡No veo en este momen como expresarlo!!!.
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: available
    }
})

module.exports = User