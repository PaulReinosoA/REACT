const { response } = require('express');
const Events = require('../models/Events');

const getEventos = async (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'getEventos conrrecto!!! :)',
  });
};
const crearEvento = async (req, res = response) => {
  const evento = new Events(req.body);

  try {
    evento.user = req.uid;
    const eventoGuardado = evento.save();

    return res.status(201).json({
      ok: true,
      evento:eventoGuardado,
      msg: 'crearEvento evento creado correctamente! ;)',
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: 'crearEvento INCORRECTO!!! ;)',
    });
  }
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
