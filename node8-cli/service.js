const cli = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(cli.readFile)

class Database {

    constructor(){
        this.NOME_ARQUIVO = 'heros.json'
    }

    async obterDadosArquivo(){
        //outro metodo de requisitar o arquivo json
        // const arquivo = require('./heros.json')
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    escreverArquivo(){

    }

    async listar( id ){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter( elemento => (id ? elemento.id === id : true))
        return dadosFiltrados
    }

}

module.exports = new Database()
