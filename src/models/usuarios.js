const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')

const usuariosSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    }
},
    {
        versionKey: false,
    }
)

// pre - indica que quer que faça algo antes de salvar
// this - refere-se ao objeto que está sendo salvo
// 10 - parâmentro que indica quantas vezes o hash será gerado - rounds
usuariosSchema.pre('save', async function(next) {
    const hash = await bcryptjs.hash(this.senha, 10);
    this.senha = hash;

    next();
})

const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;