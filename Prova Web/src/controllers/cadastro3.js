// Importando as tabelas do DB
const chamado = require('../model/chamado');

module.exports = {
    async chamado(req, res) {

        const chamados = await chamado.findAll({
            raw: true,
            attributes: ['IDChamado', 'Cliente', 'Descrição', 'Tipo']
        });

        res.render('../views/forms3', {chamados});
    },

    async chamadoInsert(req, res) {

        const dados = req.body;

        console.log(req.body);

        await chamado.create({
            Cliente: dados.nome,
            Descrição: dados.descricao,
            Tipo: dados.tipo
        });

        res.redirect('/');
    }
    
}