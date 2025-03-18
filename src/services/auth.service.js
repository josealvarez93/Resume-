const jwt = require('jsonwebtoken'); //permite que las bibliotecas se encripten
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');// cnfigura las varables de entorno
const user = require('../models/user.model');
const RolePermission = require('../models/rolePermission_model');

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;//Obtener la clave secreta desde las varables de entorno

exports.loginUser = async (email, password) => {
    try {
        //verficar s el usuario existe
        const user = await user.findOne({ where: {email}}); // se indica el campo con el que el va a hacer la validacion
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        // verificar s la contrase;a es correcta
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Contrase;a incorrecta');
        }

        //consultar los permisos del rol, valida que atributos tene el rol como tal
        const RolePermission = await RolePermission.findAll({
            where: {rol_id: user.rol_id },
            attributes:['permiso_id']

        }); 

        const permisos = RolePermission.map(rp => rp.permiso_id);

        //generar un token JWT, se frma el token con la variable sign
        const token = jwt.sign(
            {id: user.id, nombre: user.nombre, email: user.email, rol_id: user.rol_id, permisos },
            SELECT_KEY,
            { expiresIn: '1h' } // por seguridad debe tener un tiempo de inactivacion

        );

        return token; 

    } catch (error){
        throw new Errror (error.message || ' Error al iniciar sesion');

    }
};