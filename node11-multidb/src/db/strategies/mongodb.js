const Icrud = require('./interfaces/icrud')

class Mongodb extends Icrud {
    constructor() {
        super()
        this._herois = null
        this._drive = null
    }

    isConnected() {

    }

    defineModel() {
        this._herois = new Mongoose.Schema({
            nome: {
                type: String,
                required: true,
            },
            poder: {
                type: String,
                required: true
            }
        })

        const model = Mongoose.model('herois', heroiSchema)

    }

    Connect() {
        Mongoose.connect('mongodb://leo:minhasenhasecreta@localhost:27017/herois',
            { useNewUrlParser: true },
            function (error) {
                if (!error) {
                    return
                }
                console.log('Falha na Conexão: ', error)
            })

        const connection = Mongoose.connection

        connection.once('open', function () {
            console.log('database rodando')
        })

    }

    create(item) {
        const resultCadastrar = await model.create({ nome: 'Fumikage Tokoyami', poder: 'Dark Shadown' })

        console.log('ResultCadastrar: ', resultCadastrar)
    }

}

module.exports = Mongodb
