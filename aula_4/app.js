/********************************************************************************************************************************
 * Objetivo: endPoints referente a API de estados e cidades
 * Data: 15/09/2025 
 * Autor: Milla Regina Lopes Vieira
 * Versão: 1.0
 * 
 * Observações: Instalação do Express, Cors, Body-Parser
 * npm install express      --save
 * npm install cors         --save
 * npm install body-parser  --save
 * npm i
 ********************************************************************************************************************************/

// Import das dependências da API
const express = require('express') // Responsável pela API
const cors = require('cors')    // Responsável pelas permissões da API (APP)
const bodyParser = require('body-parser') //Responsável por gerenciar a chegada dos dados da API com o front

// Import do arquivo de funções
const dados = require('./module/funcoes.js')

// Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

// Criando uma instância de uma classe do express
const app = express()

// Configuração de permissões
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*') // Servidor de origem
    response.header('Access_Control-Allow-Methods', 'GET') // Verbos(métodos) permitidos na API
    // Carrega as configurações no Cors da API
    app.use(cors())
    next() // Próximo, carregar os proximos endPoints
})

// ENDPOINTS
app.get('/v1/estados', function (request, response) {
    //Pesquisa na função de estados
    let estados = dados.getAllEstados()

    //retorna o status code
    response.status(estados.status_code)
    //retorna o JSON
    response.json(estados)
})

// Endpoint com o parâmetro de UF para a função 2
app.get('/v1/estado/:uf', function (request, response) {
    let sigla = request.params.uf

    let estado = dados.getEstadoBySigla(sigla)

    //retorna o status code
    response.status(estado.status_code)
    //retorna o JSON
    response.json(estado)
})

// Endpoint com o parâmetro de UF para a função 3
app.get('/v1/capital/:uf', function (request, response) {
    let sigla = request.params.uf

    let capital = dados.getCapitalBySigla(sigla)

    //retorna o status code
    response.status(capital.status_code)
    //retorna o JSON
    response.json(capital)
})

// Endpoint com o parâmetro de UF para a função 6
app.get('/v1/cidades/:uf', function (request, response) {
    let sigla = request.params.uf

    let cidades = dados.getCidadesBySigla(sigla)

    //retorna o status code
    response.status(cidades.status_code)
    //retorna o JSON
    response.json(cidades)
})

// Start na API
app.listen(PORT, function () {
    console.log('API aguardando requisições...')
})