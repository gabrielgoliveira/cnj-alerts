var fs = require('fs');

const file = './processos-em-alerta.csv';

var alertas = [];

var data = fs.readFileSync(file)
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map((e) => {
        return e.split(',');
    }); // split each line to array


function extrairAlertas(){
    data.map(alerta => {
        const alert = {
            grau: parseInt(alerta[1]),
            siglaTribunal: alerta[2],
            numero: alerta[5],
            cod_unidade: parseInt(alerta[6]),
            //data_ultima_mov: alerta[20],
            tempo_medio_movimentos: parseFloat(alerta[28])
        };

        alertas.push(alert)
        
    })
    alertas.shift();
    alertas.pop();
    console.log('[')
    alertas.map(alerta => {
        console.log(alerta, ',');
    })
    console.log(']')
}

extrairAlertas();