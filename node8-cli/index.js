const commander = require('commander')
const database = require('./service')
const Heroi = require('./heroi')

async function main() {
    commander
        .version('v1')

        .option( '-n, --nome [value]', 'Nome do Heroi')
        .option( '-p, --poder [value]', 'Poder do heroi' )
        .option( '-c, --cadastrar' , 'Cadastrar um heroi')

        .parse(process.argv)

    const heroi = new Heroi(commander)

    try {
        if (commander.cadastrar) {
            const resultado = await database.casdastrar(heroi)
            if (!resultado) {
                console.error( 'Heroi não foi cadastrado!' )
                return
            }
            console.log('Heroi cadastrado!')
        }

    } catch (error) {
        console.error( 'Ocorreu um erro: ', error )
    }
}

main()
