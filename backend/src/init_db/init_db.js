const tribunais = require('./dados/tribunais');
const unidades = require('./dados/unidades');
const alertas = require('./dados/alertas');

const TribunalController = require('../controllers/TribunalController');
const UnidadeController = require('../controllers/UnidadeController');
const AlertaController = require('../controllers/AlertaController');



function parseUnidade(unidade){
    const {
        id,
        id_pai,
        nome_unidade,
        tipo,
        grau,
        esfera,
        cidade,
        uf,
        latitude,
        longitude,
        capital,
        quant_processos,
        tempo_medio,
        tempo_entre_mov,
        processos_alerta,
      } = unidade;
    
    return {
        id: id,
        id_pai: id_pai,
        nome_unidade: nome_unidade,
        tipo: tipo,
        grau: grau,
        esfera: esfera,
        cidade: cidade,
        uf: uf,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        capital: parseInt(capital),
        quant_processos: parseInt(quant_processos),
        tempo_medio: parseFloat(tempo_medio),
        tempo_entre_mov: parseFloat(tempo_entre_mov),
        processos_alerta: parseInt(processos_alerta)
    }
}

function initTableTribunais(){
    tribunais.map((data) => {
        var tribunal = parseUnidade(data)
        TribunalController.insertTribunalLocal(tribunal);
    });
    
}


function initTableUnidades(){
    unidades.map((data) => {
        var unidade = parseUnidade(data);
        UnidadeController.insertUnidadeLocal(unidade)
    })
}

function initTableAlertas(){
    alertas.map(alerta => {
        if(isNaN(alerta.tempo_medio_movimentos)){
            alerta.tempo_medio_movimentos = 0;
        }
        const alert = {
            grau: alerta.grau,
            sigla_tribunal: alerta.siglaTribunal,
            numero: alerta.numero,
            cod_unidade: alerta.cod_unidade,
            tempo_medio_movimentos: alerta.tempo_medio_movimentos,
        };
        AlertaController.insertAlertaLocal(alert);
    })
}

initTableAlertas();

//initTableTribunais();
//initTableUnidades()