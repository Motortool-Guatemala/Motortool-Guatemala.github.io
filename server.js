const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/compra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'compra.html'));
});

app.post('/enviar-correo', (req, res) => {
    const { nombre, apellido, nombreFactura, email, phone, nit, tipo, marca, linea, modelo } = req.body;

    const destinatarios = [
        email,
        'destinatario2@gmail.com',
        'destinatario3@gmail.com'
    ];

    const msg = {
        to: destinatarios,
        from: 'tu_email_verificado@ejemplo.com',
        subject: 'Nueva Compra Realizada',
        text: `
            Nombre: ${nombre}
            Apellido: ${apellido}
            Nombre de Factura: ${nombreFactura}
            Correo Electrónico: ${email}
            Teléfono: ${phone}
            NIT: ${nit || 'No proporcionado'}
            Tipo de Vehículo: ${tipo}
            Marca: ${marca}
            Línea: ${linea}
            Modelo: ${modelo}
        `,
    };

    sgMail
        .send(msg)
        .then(() => {
            res.json({ success: true });
        })
        .catch((error) => {
            console.error(error);
            res.json({ success: false, error });
        });
});

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
