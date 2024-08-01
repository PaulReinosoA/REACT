const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {
  const token = req.header('x-token');

  if (!token) {
    res.status(401).json({
      ok: false,
      msg: 'No se pudo obtener el token en l apeticion',
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);
    console.log(payload);
    
    req.uid = payload.uid;
    req.name = payload.name;

  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido!',
    });
  }
  next();
};

module.exports = {
  validarJWT,
};