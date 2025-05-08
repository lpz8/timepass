module.exports = (req, res, next) => {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    req.hora = `${hora}:${minutos < 10 ? '0' + minutos : minutos}`;
    next();
};