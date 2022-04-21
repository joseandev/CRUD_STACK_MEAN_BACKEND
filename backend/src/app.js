const express = require('express');
const morgan = require('morgan');
//Morgan es un middleware
const cors = require('cors')

const app = express();
//Iniciamos el server

app.set('port', process.env.PORT || 4000)
//Si no hay una variable de entorno definida para el puerto donde escuchara el servidor, entonces sera el 4000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //Para que express pueda entender archivos json
app.use(express.urlencoded({ extended: false })) //Para que express pueda entender los valores que vienen desde formularios en html

app.use('/api/employees', require('./routes/employees.route'))

module.exports = app;