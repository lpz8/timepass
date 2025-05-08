module.exports = (req, res, next) => {
    const horaActual = parseInt(req.hora.split(':')[0]); 
    if (horaActual >= 12 && horaActual <= 24) {
        next(); 
    } else {
        res.locals.mensaje = 'Aún no es la hora, espera hasta las 12:00';
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
};