const { DataTypes } = require('sequelize');
const sequelize = require('./config/db'); 

const Permission = sequelize.define('permisos', {
  permisos_id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true,},
  nombre: {type: DataTypes.STRING(150),allowNull: true, unique: true},
}, {
  timestamps: false,
});

module.exports= Permission;