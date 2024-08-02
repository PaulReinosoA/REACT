/*
RUTES DE USURIOS /mAuth  :
host +  /api/events
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');

const router = Router();

//* linea que DEFINE: TODAS LAS RUTAS bajo esta linea validaran JWT
router.use(validarJWT);

router.get('/' /*, validarJWT*/, getEventos);
router.post('/' /*, validarJWT*/, crearEvento);
router.post('/:id' /*, validarJWT*/, actualizarEvento);
router.delete('/:id' /*, validarJWT*/, eliminarEvento);

module.exports = router;
