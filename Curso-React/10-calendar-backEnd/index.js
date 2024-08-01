const exprees = require('express');
//! npm i dotenv --> configurar variables de entorino en el proyecto:
require('dotenv').config();

const { dbConnection } = require('./database/config');
// console.log(process.env)

//! crear el servidor de express;
const app = exprees();

//! Base de datos:
dbConnection();

//! directorio publico:
// middlewre : funcion q se ejecuta siempre al hacer la peticion al servidor
app.use(exprees.static('public')); // path del directorio!!!

//!Lectura y parceo del body:
app.use(exprees.json());

//! Rutas:
//* todo AUTH : crear, login , renew
app.use('/api/auth', require('./routes/auth'));
// app.get('/', (req, res) => {
//   // console.log('se requiere el /');
//   res.json({
//     ok: true,
//   });
// });

//* todo CRUD: eventps

//! escucha peticiones:
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto : ${process.env.PORT}`);
});