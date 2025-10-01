/********************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API do Whatsapp
 * Data: 30/09/2025 
 * Autor: Milla Regina Lopes Vieira
 * Versão: 1.0
 ********************************************************************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500, development: 'Milla Regina Lopes Vieira' }
const dados = require('./contatos.js')

// Retorna todos os estados
const getAllUsers = function () {
    // estrutura padrão de resposta
    let message = {
        status: true,
        status_code: 200,
        development: 'Milla Regina Lopes Vieira',
        usuarios: []
    }

    // pega o array "whats-users" do objeto importado e coloca em message.usuarios
    // atenção: isso funciona se contatos.js exporta diretamente o objeto com a chave "whats-users"
    message.usuarios = dados.contatos['whats-users']

    return message
}

module.exports = {
    getAllUsers
}