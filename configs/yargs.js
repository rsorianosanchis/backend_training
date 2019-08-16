const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multipicar', opts)
    .command('crear',
        'crea un archivo con la tabla seleccionada en la base e datos', opts)
    .help()
    .argv;

module.exports = { argv };