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
    
        res.render('../views/editarChamado', {chamados});
    },

    async adicionar(req, res){

        const dados = req.body;
        const id = req.params.id;

        if (dados.envio == 'Excluir') {

            await chamado.destroy({ where: { IDChamado: id } });
            res.redirect('/');
            return;
        }

        if (dados.envio == 'CANCELAR') {
            res.redirect('/');
        }

        // Dando upgrade nas novas informações
        await chamado.update({
            Cliente: dados.nome,
            Descrição: dados.descricao,
            Tipo: dados.tipo
        },
        {
            where: { IDChamado: id }
        });

        console.log(dados);

        res.redirect('/');
    }
}