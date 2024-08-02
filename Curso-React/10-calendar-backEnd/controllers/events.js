const { response } = require('express');

const getEventos = async (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'getEventos conrrecto!!! :)',
  });
};
const crearEvento = async (req, res = response) => {
  console.log(req.body);

  res.status(201).json({
    ok: true,
    msg: 'crearEvento conrrecto!!! :)',
  });
};
const actualizarEvento = async (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'actualizarEvento conrrecto!!! :)',
  });
};
const eliminarEvento = async (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'eliminarEvento conrrecto!!! :)',
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
