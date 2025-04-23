//Middleware para autenticación y roles
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const token = req.headers('authorization')?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};
const checkRole = (roles) =>{
    return(req,res,next) => {
        if (!roles.Includes(rol_id)){
            return res.status(403).json({message: 'Acceso denegado, no tienes permiso para realizar esta accion'});
        }
        next(); 
    }
}

module.exports = { authenticateToken};