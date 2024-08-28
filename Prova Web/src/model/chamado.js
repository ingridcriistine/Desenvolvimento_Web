const Sequelize = require('sequelize');
const database = require('../config/bd');

const chamado = database.define('Chamado', {
    IDChamado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },

    Cliente: {
        type: Sequelize.STRING(100),
        allowNull: true
    },

    Descrição: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    
    Tipo: {
        type: Sequelize.STRING(100),
        allowNull: true
    }  
});

module.exports =  chamado;