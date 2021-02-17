const connectDB = require('../../knexfile');

module.exports = {
    insertTribunal(req, res){
    },
    insertTribunalLocal(tribunal){
        connectDB.insert(tribunal).into('tribunais')
        .then(data => {
            //retorna a posição onde o dado foi colocado
            console.log(data);
        })
        .catch (err => {
            console.log(err);
        });
    },
    listTribunais(req, res){
        connectDB.select('*').table('tribunais').then(data => {
            return res.json(data);
        }).catch(err => {
            console.log(err)
        });
    },

    getTribunal(req, res){

        const {id} = req.params;

        connectDB.where({id: id}).table('tribunais').then(data => {
            return res.json(data);
        }).catch(err => {
            console.log(err);
        })
    },
    unidadesTribunal(req, res){
        const {id} = req.params;
        connectDB.where({id_pai: id}).table('unidades').then(data => {
            return res.json(data);
        }).catch(err => {
            console.log(err);
        })
    }
}