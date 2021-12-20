const Produçao = require('../models/estoque')

exports.post = (req, res) => {
    const produto = new Produçao(req.body);
    produto.save()
        .then(() => {
            return res.status(201).send(produto);
        })
        .catch((err) => {
            return res.status(400).send({ message: 'Registration Failed: ' + err });
        })
}

exports.get = (req, res) => {
    Produçao.find()
        .then((produtos) => {
            return res.status(200).send(produtos);
        })
        .catch((err) => {
            return res.status(400).send({ message: err });
        })
}

function diferencaHojeVencimento(dtVence) {
    const hoje = new Date()
    const dtVencimento = dtVence
    const venc = new Date(dtVencimento)
    const diff = Math.abs(venc.getTime() - hoje.getTime()) // subtrai uma data pela outra (abs - valor absoluto/ getTime - converte em milissegundos)
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)) // divide o total pelo total de minutos

    if (venc.getTime() <= hoje.getTime()) {
        return days * (-1)
    } else {
        return days
    }
}

exports.getDias = (req, res) => {
    const idProduto = req.params._id
    Produçao.findById(idProduto)
        .then((produto) => {
            if (!produto) {
                return res.status(200).send({ message: 'Produto não encontrado!' })
            }
            const diasParaVencimeno = diferencaHojeVencimento(produto.dataVencimento)

            if (diasParaVencimeno <= 0) {
                return res.status(200).send(`O produto ${produto.descricao} vence hoje ou já está vencido!`)
            } else {
                res.status(200).send(`O produto ${produto.descricao} vence em ` + diasParaVencimeno + ' dias')
            }
        })
        .catch((err) => {
            res.status(400).send({ message: err })
        })
}


function adicionarDiasAData(dias) {
    var hoje = new Date();
    var dataVenc = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
    return dataVenc;
}

// produto vencendo nos próximos 7 dias
exports.getVencendo = (req, res) => {
    Produçao.find()
        .then((produtos) => {
            const hoje = new Date();
            const hojeMaisSeteDias = adicionarDiasAData(7);
            const venceEmSeteDias = produtos.filter(item => item.dataVencimento > hoje & item.dataVencimento <= hojeMaisSeteDias)
            const prodVencendoEmSeteDias = venceEmSeteDias.map(item => item.descricao)
            res.status(200).send(prodVencendoEmSeteDias)
        })
        .catch((err) => {
            res.status(400).send({ message: err })
        })
}

exports.put = (req, res) => {
    Produçao.updateOne(
        { _id: req.params._id },
        { $set: req.body },
        { upsert: false },
    )
        .then(() => {
            return res.status(200).send({ message: 'Produto atualizado com sucesso' });
        })
        .catch((err) => {
            return res.status(400).send({ message: err });
        })
}

exports.delete = (req, res) => {
    const idProduto = req.params._id;

    Produçao.findByIdAndRemove(idProduto)
    .then((produto) => {
        if (!produto) {
            return res.status(200).send({ message: 'Produto não encontrado!' });
        }
        res.status(200).send({ message: 'Produto removido!' });
    })
    .catch((err) => {
        return res.status(400).send({ message: err });
    })
}