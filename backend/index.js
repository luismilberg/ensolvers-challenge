const express = require('express');
bodyParser = require('body-parser');
const cors = require("cors");

// Archivo de rutas
const routes = require('./routes');

// Configuracion de la DB
require('./config/db');

// Creacion del servidor
const app = express();

const whitelist = [
    'https://localhost:3000'
]

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// app.use(cors(corsOptions));
app.use(cors());


// Habilitar JSON
app.use(express.json());

// Habilitar el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

app.listen(4000, console.log('Corriendo en el puerto: ', 4000));