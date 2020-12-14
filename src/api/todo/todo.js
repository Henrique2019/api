const restful = require('node-restful')

const mongoose = require('mongoose')

const Persona = new mongoose.Schema({
    
    nome: { type: String, required: true},
    img: { type: String, required: true },
    Cargo: { type: String, required: true },
    idade: { type: Number, required: true },
    genero: { type: String, required: true },
    midia: { type: String, required: true },
    EmpresaQueTrabalha: { type: String, required: true },
    escolaridade: { type: String, required: true },
    renda: { type: Number, required: true },
    PrincipaisObjtivos: { type: String, required: true },
    ProblemasDesafios: { type: String, required: true },
    AjudaEmpresa: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now}
})

module.exports = restful.model('todo', Persona)