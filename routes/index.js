var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;
  var ciudad = req.body.ciudad;

  var obj = {
    to: 'franco_burgoa1@hotmail.com',
    subject: `Se ha contactado con usted ${nombre} ${apellido}`,
    html: `${nombre} ${apellido} Se contacto para trabajar con usted, se puede comunicar a este mail ${email}, 
    <br> además, hizo el siguiente comentario: ${mensaje}
    <br> Su tel es ${telefono} y vive en la ciudad de ${ciudad}`,
  };

  // Configuración del transportador
  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT, // Cambiado de 'host' a 'port'
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS // Cambiado de 'user' a 'pass'
    }
  });

    var info = await transporter.sendMail(obj);

    res.render('index', {
    message: 'Enviado Correctamente',
  });
});


module.exports = router;
