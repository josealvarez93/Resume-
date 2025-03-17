const sequelize = require('./config/db');
const app = require('/app');
const dotenv = require ('dotenv');
require('./models/associations');

dotenv.config();
const PORT = ProcessingInstruction.ENV.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('conectando a PostgreSQL con Sequelize');
        app.listen(PORT, () =>{
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Error conectando a la base de datos', err));
    sequelize.sync({force: false}).then(() => {
        console.log('Base de datos sincronizada');
    }).catch(err => {
        console.error('Error al sincronizar la base de datos:'. err);
    });

