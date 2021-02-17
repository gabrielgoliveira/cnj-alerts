var fs = require('fs');

const file = './orgaos-julgadores-clusterizados.csv';
const tribunais = require('./dados_prontos/tribunais');

var orgaosJulgadores = [];

var data = fs.readFileSync(file)
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map((e) => {
        return e.split(',');
    }); // split each line to array

function extrairUnidades(){
    data.map(orgao => {
        if(orgao[11] == ''){
            orgao[11] = 0;
        }
        if(orgao[12] == ''){
            orgao[12] = 0;
        }
    
        if(orgao[3] != 'TRIBT' && orgao[3] != 'CONST' && orgao[3] != 'TRIBS'){
            var unidade = {
                id: parseInt(orgao[0]),
                id_pai: parseInt(orgao[2]),
                nome_unidade: orgao[1],
                tipo: orgao[8],
                grau: orgao[3],
                esfera: orgao[9],
                cidade: orgao[5],
                uf: orgao[6],
                latitude: orgao[11],
                longitude: orgao[12],
                capital: orgao[13],
                quant_processos: orgao[14],
                tempo_medio: orgao[15],
                tempo_entre_mov: orgao[16],
                processos_alerta: orgao[19]
            }
            if(!isNaN(unidade.id_pai)){
                orgaosJulgadores.push(unidade)
            }
            
        }
    
    })
     
    //imprimir tudo
    console.log('[')
    orgaosJulgadores.map(orgao => {
        console.log(orgao, ',')
    })
    console.log(']')
}

extrairUnidades()