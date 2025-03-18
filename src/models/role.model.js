const { DataTypes } = require('sequelize');
const sequelize = require('./config/db');

const Roles = sequelize.define('roles', {
  id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true,},
  nombre: {type: DataTypes.INTEGER,allowNull: false,},
}, {
  timestamps: false,
});

module.exports= Roles;