const { option, boolean } = require('yargs');
const argv =require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check ((argv,option )=>{
      if (isNaN(argv.b))  {
        throw 'La base tiene que ser un número';
      }
      return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    }) 
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es hasta que numero va a multiplicar'
    })
    .argv;

    module.exports = argv;