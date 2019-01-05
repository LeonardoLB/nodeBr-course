const cli = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(cli.readFile)
const writeFileAsync = promisify(cli.writeFile)

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
    async escreverArquivo( dados ){
        await writeFileAsync( this.NOME_ARQUIVO, JSON.stringify( dados ))
        return true
    }

    async casdastrar(heroi) {
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now()
        const heroicomid = {
            id,
            ...heroi
        }
        const dadosFinal = [
            ...dados,
            heroicomid
        ]
        const resultado = await this.escreverArquivo( dadosFinal )
        return resultado
    }

    async listar( id ){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter( elemento => (id ? elemento.id === id : true))
        return dadosFiltrados
    }

}

module.exports = new Database()
