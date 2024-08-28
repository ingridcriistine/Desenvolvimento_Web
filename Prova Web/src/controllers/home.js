// Importando as tabelas do DB
const chamado = require('../model/chamado');

module.exports = {
    
    async pagInicialGet(req, res){

        const chamados = await chamado.findAll({
            raw: true,
            attributes: ['IDChamado', 'Cliente', 'Descrição', 'Tipo']
        });

        res.render('../views/index', {chamados});
    }
}