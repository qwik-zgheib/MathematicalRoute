import User from '../models/user.model.js';

export const fn_get_all_users = async (req, res) => {
  try {
    let query = {}; // Objeto de consulta inicial

    // Si se proporciona el parámetro 'name' en req.query, agregarlo a la consulta
    if (req.query.name) {
      query.name = { $regex: new RegExp(req.query.name, 'i') }; // Búsqueda insensible a mayúsculas y minúsculas
    }

    // Obtener todos los usuarios que coincidan con la consulta
    const usuarios = await User.find(query);

    res.status(200).json({ usuarios });
  } catch (error) {
    console.error('Error al obtener la lista de usuarios:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

export const fn_get_user_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res.status(400).json({ mensaje: 'No se proporcionó el ID del usuario' });
    }

    const usuario = await User.findById(id);

    res.status(200).json({ usuario });
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

export const fn_post_user = async (req, res) => {
  try {
    const { name, username, email, password, profile_picture, role } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await User.findOne({ $or: [{ username }, { email }] });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El nombre de usuario o correo electrónico ya está en uso.' });
    }

    // Crear un nuevo usuario
    const newUser = new User({
      name,
      username,
      email,
      password,
      profile_picture,
      role,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();

    res.status(201).json({ mensaje: 'Usuario creado exitosamente', usuario: newUser });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
