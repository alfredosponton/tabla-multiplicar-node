const { error } = require('console');
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base, listar, hasta) => {
    
    try{
        
        let salida = '';

        
        for (let i = 1; i < hasta + 1; i++) {
            salida += (`${base} X ${i} = ${base*i}\n`);
        }
        
        if (listar) {
        console.log("=====================");
        console.log('Tabla del: '.green, base);
        console.log("=====================");
     
        console.log(salida.rainbow);}
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
        return(`Archivo 'tabla-${base}.txt'`.blue.underline)
    }catch (error){
        throw error
    }

}



module.exports = {
    crearArchivoTabla
}