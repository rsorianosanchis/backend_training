//
const fs = require('fs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const { argv } = require('./configs/yargs.js');
//


console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        // console.log(listarTabla(argv.base, argv.limite))
        console.log('========================================'.red);
        console.log(`   ========Tabla del ${argv.base}==========`.green);
        console.log('========================================'.red);

        listarTabla(argv.base, argv.limite).then(resp => console.log(resp)).catch(err => console.log(err))
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(resp => console.log(resp)).catch(err => console.log(err))
        break;
    case 'borrar':
        console.log('borrar');
        break;
    default:
        console.log('comando no reconocido');

        break;
}