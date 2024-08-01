// funciones del callback de auths
//si el intelicense falla:, esta referencia ayuda
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

// req-> nos solicitan; res-> nosotros respondemos
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    // si no encuentra usuario es null
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'un usuario existe con ese correo',
      });
    }

    usuario = new Usuario(req.body);

    // encriptar contraseña
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      msg: 'usuario creado exitosamente :)',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'comuniquese con el administrador de la BD',
    });
  }
};

const loginUsuario = async (req, res = responsees) => {
  const { email, password } = req.body;

  try {
    // si no encuentra usuario es null
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'el usuario no existe con ese correo',
      });
    }

    //confirmar password
    const validaPassword = bcrypt.compareSync(password, usuario.password);

    if (!validaPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'password incorrecto',
      });
    }

    // genero json web token

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      msg: 'token conrrecto!!! :)',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'comuniquese con el administrador de la BD',
    });
  }
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };

// documentacion errores de peticiones:
// https://www.restapitutorial.com/httpstatuscodes

// paquetes para validaciones de express(express validators):
// npm i express-validator
