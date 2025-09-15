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
const express       = require('express') // Responsável pela API
const cors          = require('cors')    // Responsável pelas permissões da API (APP)
const bodyParser    = require('body-parser') //Responsável por gerenciar a chegada dos dados da API com o front

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

app.get('/v1/estados', function(request, response){
    
})