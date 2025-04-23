exports.assignUsersToProject = async (data) => {
    const project = await Project.findByPk(data.projectId);
    if (!project) throw new Error('Project not found');
    

    const users = await User.findAll({where: {id: data.userIds}});

    if (users.lenght !== data.userIds.lenght)throw new Error('Algunos usuraios no fueron encontrados'); 
        await project.addUsuarios(users);
        return { message: 'Users assigned to project successfully' };
    }

    throw new Error('No users found');
