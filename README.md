Funcionalidades
El proyecto incluye las siguientes funcionalidades:

Autenticación:

Registro de usuarios.

Inicio de sesión con generación de token JWT.

Gestión de Usuarios:

Crear, editar, eliminar y listar usuarios.

Asignar roles a los usuarios.

Gestión de Proyectos:

Crear, editar, eliminar y listar proyectos.

Asignar usuarios a proyectos.

Roles y Permisos:

Definir roles (ej: administrador, usuario).

Asignar permisos a roles.

Tareas:

Crear, editar, eliminar y marcar tareas como completadas.

Sincronizar la base de datos:
Ejecuta el siguiente comando para crear las tablas en la base de datos:npm run sync-db
Ejecutar el servidor:npm start
Clonar el repositorio:git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instalar dependencias:npm install
Configurar la base de datos:

Crea una base de datos en PostgreSQL.

Configura las credenciales en el archivo .env (debes crearlo basado en .env.example):DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_la_base_de_datos


Requisitos del Sistema
Para ejecutar este proyecto, necesitarás lo siguiente:

Node.js: Versión 14.x o superior.

npm: Gestor de paquetes de Node.js (viene incluido con Node.js).

PostgreSQL: Base de datos SQL para almacenar la información.

Postman (opcional): Para probar las APIs.

Git: Para clonar el repositorio.
