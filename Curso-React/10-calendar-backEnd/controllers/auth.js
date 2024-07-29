// funciones del callback de auths
//si el intelicense falla:, esta referencia ayuda
const { response } = require('express');

// req-> nos solicitan; res-> nosotros respondemos
const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;  

  res.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = responsees) => {
  const { email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
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
