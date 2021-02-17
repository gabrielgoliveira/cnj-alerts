const connectDB = require('../../knexfile');

module.exports = {
    insertUnidadeLocal(unidade){
        connectDB.insert(unidade).into('unidades')
        .then(data => {
            //retorna a posição onde o dado foi colocado
            console.log(data);
        })
        .catch (err => {
            console.log(err);
        });
    },
    listUnidades(req, res){
        connectDB.select('*').table('unidades').then(data => {
            return res.json(data);
        }).catch(err => {
            console.log(err)
        })
    },
    getUnidade(req, res){
        const {id} = req.params;
        connectDB.where({id: id}).table('unidades').then(data => {
            return res.json(data);
        }).catch(err => {
            console.log(err)
        })
    },
    paiUnidade(req, res){
        const {id_pai} = req.params;
        connectDB.where({id: id_pai}).table('tribunais').then(data => {
            return res.json(data);
        }).catch(err => {
            console.log(err);
        })
    }
}