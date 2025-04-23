const projectService = require('../services/project.service'); // Importar el servicio de proyectos

// Controlador para crear un nuevo proyecto
exports.createProject = async (req, res) => {
    try {
        const { nombre, descripcion, fecha_creacion, administrador_id } = req.body;

        const newProject = await projectService.createProject(nombre, descripcion, fecha_creacion, administrador_id);
        res.status(201).json({ message: 'Proyecto creado con éxito', project: newProject });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para obtener todos los proyectos
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json({ message: 'Proyectos obtenidos con éxito', projects });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para obtener un proyecto por ID
exports.getProjectById = async (req, res) => {
    try {
        const { id } = req.params; // Extraer el ID de los demás parámetros
        const project = await projectService.getProjectById(id);

        if (!project) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        // Si la validación es correcta, se devuelve el proyecto con estado HTTP 200
        res.status(200).json({ message: 'Proyecto obtenido con éxito', project });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProjectByUserId = async (req, res) => {
    try {
        const { id } = req.params; // Extraer el ID de los demás parámetros
        const projects = await projectService.getProjectByUserId(id);

        if (!projects) {
            return res.status(404).json({ message: 'Proyectos no encontrados' });
        }

        // Si la validación es correcta, se devuelve el proyecto con estado HTTP 200
        res.status(200).json({ message: 'Proyectos obtenidos con éxito', projects });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para actualizar un proyecto existente
exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params; // Extraer el ID de los demás parámetros
        const { nombre, descripcion, fecha_creacion, administrador_id } = req.body; // Extraer los atributos del cuerpo de la solicitud
        const updatedProject = await projectService.updateProject(id, nombre, descripcion, fecha_creacion, administrador_id);

        if (!updatedProject) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        // Si la validación es correcta, se devuelve el proyecto con estado HTTP 200
        res.status(200).json({ message: 'Proyecto actualizado con éxito', project: updatedProject });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para eliminar un proyecto por ID
exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params; // Extraer el ID de los demás parámetros
        const deleted = await projectService.deleteProject(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        // Si la validación es correcta, se responde con el estado HTTP 200
        res.status(200).json({ message: 'Proyecto eliminado con éxito' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para asignar usuarios a un proyecto
exports.assignUsersToProject = async (req, res) => {
    try {
        const { projectId, userIds } = req.body; // Extraer los atributos del cuerpo de la solicitud
        const result = await projectService.assignUsersToProject({ projectId, userIds }); // Llamar al servicio

        res.status(200).json({ message: 'Usuarios asignados con éxito', project: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para eliminar un usuario de un proyecto
exports.removeUserFromProject = async (req, res) => {
    try {
        const { projectId, userId } = req.body; // Extraer los atributos del cuerpo de la solicitud
        await projectService.removeUserFromProject({ projectId, userId }); // Llamar al servicio

        res.status(200).json({ message: 'Usuario eliminado del proyecto con éxito' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};