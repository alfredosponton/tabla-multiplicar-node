const { basename } = require('path');
const {crearArchivoTabla} = require('./helpers/multiplicar.js');
//const { argv } = require('process');
const argv = require('./config/yargs.js')






// console.log( process.argv)
//console.log( argv.l)
//console.log( argv.base)
//console.log(argv.listar)

// const [ , ,arg3 =  'base=5'] = process.argv;
// const [ , base] = arg3.split('=')


//const base = 10;
const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivoTabla(base, listar, hasta)
    .then (nombreArchivo => console.log (nombreArchivo, 'creado'))
    .catch (err => console.log(err));


