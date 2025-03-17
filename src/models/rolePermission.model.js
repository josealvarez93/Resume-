const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RolePermission = sequelize.define('permisos_rol', {

    rol_id: {type: DataTypes.INTEGER,allowNull: false,references: {model: 'roles', key: 'id'}},
    permisos_id: {type: DataTypes.INTEGER,allowNull: false,references: {model: 'permisos', key: 'id'}}
}, {
    timestamps: false, 
    tableName: 'permisos_rol', 
});

module.exports= RolePermission;