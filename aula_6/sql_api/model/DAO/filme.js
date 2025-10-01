/********************************************************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de dados no MySQL referente ao filme
 * Data: 01/10/2025 
 * Autor: Milla Regina Lopes Vieira
 * Versão: 1.0
 ********************************************************************************************************************************/
/*
 * Exemplos de dependências p/ conexão com o BD
    - RELACIONAIS
        Sequelize  -> Foi utilizado em muitos projetos desde o inicio do Node
        Prisma     -> É uma dependência atual que trabalha com o BD (MySQL, PostgreSQL, SQL Server)/(SQL ou ORM = assistente do prisma p/ implementar os códigos no banco)
        Knex       -> É uma dependência atual que trabalha com MySQL
    - NÃO RELACIONAIS
        Mongoose   -> É uma dependência para o Mongo DB (Não relacional) // Outra estrutura de banco
*/

// Import da dependência do Prisma que permite a execução de script SQL no BD
const { PrismaClient } = require('@prisma/client')

// Cria um novo objeto baseado na classe do PrismaClient
const prisma = new PrismaClient()

// $queryRawUnsafe() -> permite executar um script SQL de uma variável E que retorna valores do BD (SELECT)
// $executeRawUnsafe() -> permite executar um script SQL de uma variável e que não retorna dados do banco (INSERT, UPDATE e DELETE)

// $queryRaw() -> permite executar um script SQL 
// - sem estar em uma variável e que retorna valores do banco (SELECT)
// - faz tratamento de seguração contra SQL Injection
// $executeRaw() -> permite executar um script SQL 
// - sem estar em uma variável e que NÃO retorna valores do banco (INSERT, UPDATE e DELETE)
// - faz tratamento de seguração contra SQL Injection

// Retorna uma lista de todos os filmes do banco de dados
const getSelectAllMovies = async function () {
    try {
        // Script SQL
        let sql = `select * from tbl_filme order by id desc` // desc = decrescente ou asc = ascendente

        // Encaminha para o BD o script SQL
        let result = await prisma.$queryRawUnsafe(sql)

        if (result.length > 0)
            return result
        else
            return false

    } catch (error) {
        return false
    }
}

// Retorna um filme filtrando pelo ID do banco de dados
const getSelectByIdMovies = async function (id) {

}

// Insere um filme novo no banco de dados
const setInsertMovies = async function () {

}

// Altera um filme pelo ID no banco de dados
const setUpdateMovies = async function (id) {

}

// Exclui um filme pelo ID no banco de dados
const setDeleteMovies = async function (id) {

}

module.exports = {
    getSelectAllMovies
}

// Instalação de dependências 
    // npm install express --save
    // npm install cors --save
    // npm install body-parser --save
    // npm install prisma --save
    // npm install @prisma/client --save
    // npx prisma init (comando especifico do Prisma p/ inicializar)