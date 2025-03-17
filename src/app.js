const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); //cors es para que el server reciba cosas de varios doms 

const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const projectRoutes = require('./routes/project.routes');

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/', projectRoutes);
// estamos asociando todas las rutas definidas con el mismo prefijo de apiv1
module.exports = app;
//se usa el xpress .json para leer las solicitudes dentro del body
