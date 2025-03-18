const { DataTypes } = require('sequelize');
const sequelize = require('./config/db');

const Proyect = sequelize.define('proyects', {
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    nombre: {type: DataTypes.STRING(50),allowNull: false},
    desc: {type: DataTypes.TEXT,allowNull: false},
    fecha_creacion: {type: DataTypes.DATE,allowNull: false, defaultValue: DataTypes.NOW},
    administrador_id: {type: DataTypes.INTEGER,allowNull: false,references: { model: User, key: 'id'},onDelete: 'CASCADE' }
},
{
    timestamps: false, 
    tableName: 'proyects',
    hooks: {
        afterCreate : (project, options) =>{
            if (project.fecha_creation){
                project.fecha_creacion.setHours(project.fecha_creacion.getHours() -5);
            }
        }
    }
});

module.exports= Proyect;