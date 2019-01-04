const { deepEqual, ok } = require('assert')
const database = require('./service')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () =>{

    it('Deve pesquisar um heroi' , async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        // para evitar ter que fazer resultado[0] poderia receber o retorno do array desta maneira
        // const [resultado] = await database.listar(expected.id)
        const resultado = await database.listar(expected.id)
        const posicaoUm = resultado[0]

        deepEqual( posicaoUm , expected )
    })

    // it('Deve casdastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR
    //     //
    //     ok( null , expected )
    // })
})
