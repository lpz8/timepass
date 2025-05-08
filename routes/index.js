const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || ''; 
    res.send(`
        <h1>Bienvenido</h1>
        <p>La hora actual es: ${req.hora}</p>
        <p>${mensaje}</p>
        <a href="/endroute"><button>Entrar</button></a>
    `);
});

module.exports = router;