/*************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025 
* Autor: Milla Regina Lopes Vieira
 * Versão: 1.0
 *************************************************/

const dados = require('./estados_cidades.js');

const MESSAGE_ERRO = { status: false, status_code: 500, development: 'Milla Regina Lopes Vieira' }

// const getAllEstados = () => { 
//     return estados;
// }

// Retorna todos os estados
const getAllEstados = function () {
    console.log(dados)
}

// const getEstados = (sigla) => {
//     return listaDeEstados.find(estado => estado.sigla.toLowerCase() === sigla.toLowerCase());
// }

// Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function (sigla) {

}

// Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function (sigla) {

}

// Retorna os estados referente a uma região pesquisando pela regiao
const getEstadosByRegiao = function (regiao) {

}

// Retorna uma lista de estados referente as capitais do país
const getVerifyCapitaisDoPais = function () {

}

// Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {

}

getAllEstados()