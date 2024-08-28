// Importando as tabelas do DB
const chamado = require('../model/chamado');
const fs = require('fs');

module.exports = {

    async chamados(req, res){
    
        // Recebendo o id da URL
        const parametro = req.params.id;

        console.log(parametro);
    
        const chamados = await chamado.findByPk(parametro, {
            raw: true, 
            attributes: ['IDChamado', 'Cliente', 'Descrição', 'Tipo']
        });
    
        res.render('../views/index', {chamados});
    },

    async adicionar(req, res){

        const dados = req.body;
        const id = req.params.id;

        // Excluindo aluno
        if (dados.envio == 'Excluir') {

            await chamado.destroy({ where: { IDChamado: id } });
            res.redirect('/');
            return;
        }

        console.log(dados);
        res.redirect('/');
    }
}