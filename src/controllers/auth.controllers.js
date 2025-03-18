const authService = require('../services/auth.service');

// inicio sesion
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.loginUser(email, password);
    res.status(200).json({ message: 'inicio de sesión exitoso', token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//Controlador para autenticación