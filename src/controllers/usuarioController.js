const Usuarios = require('../models/usuarios');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')

function geraToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    }); // expira em um dia - 86400seg.
}

exports.post = (req, res) => {
    const usuario = new Usuarios(req.body);
    usuario.save()
        .then(() => {
            return res.status(201).send(usuario)
        })
        .catch((err) => {
            return res.status(400).send({ message: err })
        })
}

exports.postAuth = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuarios.findOne({ email }).select('+senha'); // .select() - devido ao select:false informado no model usuarios.js;

        if (!usuario)
            return res.status(400).send({ message: 'User not found!' }); // comparando se a senha informada é a mesma do DB

        if (!await bcryptjs.compare(senha, usuario.senha))
            return res.status(400).send({ message: 'User not found!' }); // comparando se as senhas são iguais

        // criando o token
        res.send({
            usuario,
            token: geraToken({ id: usuario.id }),
        })
    } catch (err) {
        return res.status(400).send({ message: err });
    }
}

exports.get = (req, res) => {
    Usuarios.find()
        .then((usuarios) => {
            return res.status(200).send({ usuarios });
        })
        .catch((err) => {
            return res.status(400).send({ message: err });
        })
}