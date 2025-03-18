const User = require('./user.model');
const Project = require('./project.model');
const UserProject = require('./userProject.model');

User.belongsToMany(Project, {through: UserProject, foreingkey: 'usuario_id', as: 'proyectos'});
Project.belongsToMany(User, {through: UserProject, foreingkey: 'proyecto_id', as: 'usuarios'});

Project.belongsTo(User, { foreingKey: 'administrador_id', as: 'administrador'});

module.exports= {User, Project, UserProject}; 
