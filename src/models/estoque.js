const mongoose = require('mongoose');

const ProdutosSchema = new mongoose.Schema({
    Cidade: { type: String },
    Quadricula: { type: String },
    Finalizada: { type: String },
    Produçao: { type: Number },
}, {
    versionKey: false
})

const Produçao = mongoose.model('Produçao', ProdutosSchema);

module.exports = Produçao;