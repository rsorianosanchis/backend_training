const fs = require('fs');
const colors = require('colors');

let listarTabla = async(base, limite) => {
    if (!Number(base) || (!Number(limite))) {
        throw new Error(`La base "${base}" o el limite "${limite}" no es un numero`)
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    };
    if (data === '') {
        throw new Error('multiplicacion fallida')
    } else {
        return data;
    }
}

let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`La base "${base}" o el limite "${limite}" no es un numero`)
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    };
    if (data === '') {
        throw new Error('multiplicacion fallida')
    } else {
        fs.writeFile(
            `./bd/tabla-${base}.txt`,
            data,
            (err) => {
                if (err) { throw new Error(err) } else {
                    console.log('Archivo creado: ', colors.green(`tabla-${base}.txt`));
                    return data;
                }
            })

    }

}

module.exports = { crearArchivo, listarTabla };