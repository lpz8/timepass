const express = require('express');
const app = express();


const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');


const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');


app.use(horaMiddleware);


app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});