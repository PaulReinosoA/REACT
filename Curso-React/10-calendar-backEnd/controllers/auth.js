// funciones del callback de auths
//si el intelicense falla:, esta referencia ayuda
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

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

    // genero json web token
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
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
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
      msg: 'singin conrrecto!!! :)',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'comuniquese con el administrador de la BD',
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const uid = req.uid;
  const name = req.name;

  // generar nuevo jwt y retornarlo en la peticion
  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
    token,
    msg: 'renew',
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };

// documentacion errores de peticiones:
// https://www.restapitutorial.com/httpstatuscodes

// paquetes para validaciones de express(express validators):
// npm i express-validator