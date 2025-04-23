const express = require('express'); // Importar Express
const router = express.Router(); // Crear un enrutador
const authController = require('../controllers/auth.controller'); // Importar el controlador

router.post('/auth/login', authController.login); // Ruta de inicio de sesión

module.exports=router;