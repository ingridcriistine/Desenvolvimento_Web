const sequelize = require('sequelize');

//configurações da base de dados
const database = new sequelize('ProvaWeb', 'ProvaWeb', 'etsps2024401',
{
    dialect: 'mssql', host:'localhost', port: 57136
});

database.sync();

module.exports = database;