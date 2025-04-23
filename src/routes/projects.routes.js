const express = require('express'); // Importar Express
const router = express.Router(); // Crear un enrutador
const projectController = require('../controllers/project.controller'); // Importatr el controlador
const { authenticateToken, checkRole } = require('../middlewares/auth.middleware'); // Importar middlewares
const ROLES = require('../utils/constants'); // Importar roles

router.post('/projects/create', authenticateToken, checkRole([ROLES.ADMIN]), projectController.createProject); // Ruta para crear un nuevo proyecto
router.put('/projects/update', authenticateToken, checkRole([ROLES.ADMIN]), projectController.updateProject); // Ruta para actualizar un proyecto
router.delete('/projects/delete/:id', authenticateToken, checkRole([ROLES.ADMIN]), projectController.deleteProject); // Ruta para eliminar un proyecto
router.get('/projects', authenticateToken, checkRole([ROLES.ADMIN, ROLES.USER]), projectController.getAllProjects); // Ruta para obtener todos los proyectos
router.get('/projects/:id', authenticateToken, checkRole([ROLES.ADMIN, ROLES.USER]), projectController.getProjectById); // Ruta para obtener un proyecto por ID
router.get('/projects/user/:id', authenticateToken, checkRole([ROLES.ADMIN, ROLES.USER]), projectController.getProjectByUserId); // Ruta para obtener los proyectos de un usuario

router.post('/projects/associate', authenticateToken, checkRole([ROLES.ADMIN]), projectController.assingUsersToProject); // Ruta para asociar usuarios a un proyecto
router.delete('/projects/disassociate', authenticateToken, checkRole([ROLES.ADMIN]), projectController.removeUserFromProject); // Ruta para eliminar un usuario de un proyecto

module.exports = router;
