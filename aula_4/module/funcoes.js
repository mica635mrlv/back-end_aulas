/********************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025 
 * Autor: Milla Regina Lopes Vieira
 * Versão: 1.0
 ********************************************************************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500, development: 'Milla Regina Lopes Vieira' }
const dados = require('./estados_cidades.js')

// Retorna todos os estados
const getAllEstados = function () {
    let message = { status: true, status_code: 200, development: 'Milla Regina Lopes Vieira', uf: [] }

    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })
    message.quantidade = message.uf.length

    if (message.uf.length > 0)
        return message //Verdadeira 200
    else
        return MESSAGE_ERRO //False 500
}

// Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function (sigla) {
    //mensagem padrão de retorno (cabeçalho)
    let message = { status: true, status_code: 200, development: 'Milla Regina Lopes Vieira', uf: [] }

    let estado = dados.listaDeEstados.estados.find(function (item) {
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.nome = estado.nome
    message.capital = estado.capital
    message.regiao = estado.regiao

    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
}

// Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function (sigla) {
    //mensagem padrão de retorno (cabeçalho)
    let message = { status: true, status_code: 200, development: 'Milla Regina Lopes Vieira', uf: [] }

    let estado = dados.listaDeEstados.estados.find(function (item) {
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.nome = estado.nome
    message.capital = estado.capital

    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
}

// Retorna os estados referente a uma região pesquisando pela regiao
const getEstadosByRegiao = function (regiao) {
    // //mensagem padrão de retorno (cabeçalho)
    // let message = { status: true, status_code: 200, development: 'Milla Regina Lopes Vieira', uf: [] }

    // let estado = dados.listaDeEstados.estados.find(function (item) {
    //     return item.regiao.toLowerCase() === sigla.toLowerCase()
    // })

    // message.regiao = estado.sigla
    // message.estados = estado.sigla
    // message.estados.uf = estado.sigla
    // message.capital = estado.capital

    // if (message.uf.length > 0)
    //     return message //saída verdadeira (200)
    // else
    //     return MESSAGE_ERRO //saída falsa (500)
}

// Retorna uma lista de estados referente as capitais do país
const getVerifyCapitaisDoPais = function () {

}

// Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {
    //mensagem padrão de retorno (cabeçalho)
    let message = { status: true, status_code: 200, development: 'Milla Regina Lopes Vieira', uf: [] }

    let estado = dados.listaDeEstados.estados.find(function (item) {
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.descricao = estado.nome
    message.quantidade_cidades = estado.cidades.length
    message.cidades = estado.cidades.map(cidade => cidade.nome)

    if (message.uf.length > 0)
        return message //saída verdadeira (200)
    else
        return MESSAGE_ERRO //saída falsa (500)
}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getCidadesBySigla
}
