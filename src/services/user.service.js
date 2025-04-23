const user = require('../models/user.model'); 
const bcrypt = require('bcryptjs'); 


exports.createUser = async (nombre, email, password, rol_id, administrador_id) => {
    try {
        const userExists = await user.findOne({ where: { email } }); 
        if (userExists) throw new Error('El usuario ya existe'); 

        const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser = await user.create({ 
            nombre,
            email,
            password: hashedPassword,
            rol_id,
            administrador_id
        });

        return newUser;
    } catch (err) {
        throw new Error('error al crear usuario'); 
    }
};