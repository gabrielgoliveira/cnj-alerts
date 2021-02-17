const connectDB = require('../../knexfile');

var listAlertas = [];
module.exports = {

    insertAlertaLocal(alerta){
        connectDB.insert(alerta).into('alertas')
        .then(data => {
            //retorna a posição onde o dado foi colocado
        })
        .catch (err => {
            console.log(err);
        });
    },
    listAlerts(req, res){
        connectDB.select('*').table('alertas').then(data => {
            return res.json(data);
        })  .catch (err => {
            console.log(err);
        });
    },
    quantidadeAlertas(req, res){
        connectDB.select('*').table('alertas').then(data => {
            return res.json(data.length);
        })  .catch (err => {
            console.log(err);
        });
    },
    async AlertasDetalhados(req, res){
        const alertas = await connectDB.select('*').table('alertas');
        const listAlertas = [];


        for(var i = 0; i<alertas.length; i++){  
            const alerta = alertas[i];
            const unidade = await connectDB.where({id: alertas[i].cod_unidade}).table('unidades');
            const unidade_superior =  await connectDB.where({id: unidade[0].id_pai}).table('tribunais');

            listAlertas.push({alerta, unidade, unidade_superior});
            
        }
        //console.log(listAlertas)
        return res.json(listAlertas);
    }

}