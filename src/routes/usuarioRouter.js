const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController')


/**
 * @api {POST} /usuarios Cria um novo usuário
 * @apiName post
 * @apiGroup usuarios
 *
 *
 * @apiSuccess {String} _id Id do usuário criado automaticamento pelo mongoDB.
 * @apiSuccess {String} nome Nome do usuário.
 * @apiSuccess {String} email Email do usuário.
 * @apiSuccess {String} senha Senho do usuário criptografada.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *    {
 *     "_id": "5df40264ba96c62b34f99450",
 *      "nome": "Ana",
 *      "email": "ana@email.com",
 *      "senha": "$2a$10$/9N8WLp5PWwnOeXZiXa8cO9qub7ACxuM1bNW7K355.YfY7/9Q95kG"
 *    }
 * 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       message: err
 *     }
 */
router.post('/', controller.post)

/**
 * @api {POST} /usuarios/auth Gera um token de autenticação do usuário
 * @apiName postAuth
 * @apiGroup usuarios
 *
 *
 * @apiSuccess {String} _id Id do usuário criado automaticamento pelo mongoDB.
 * @apiSuccess {String} nome Nome do usuário.
 * @apiSuccess {String} email Email do usuário.
 * @apiSuccess {String} senha Senho do usuário criptografada.
 * @apiSuccess {String} token Token de autenticação do usuário.
 * 
 * @apiSuccessExample Success-Response:
 * 
 *    {
        "usuario": {
            "_id": "5df23c71a3c7de10a4efb779",
            "nome": "Maria",
            "email": "maria@email.com",
            "senha": "$2a$10$8eYHoujVFC.21YhcVK8mO.G1Q38WQSgs3L07TMnhWd/jKn5yA9m.i"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjIzYzcxYTNjN2RlMTBhNGVmYjc3OSIsImlhdCI6MTU3NjI3MzEyMywiZXhwIjoxNTc2MzU5NTIzfQ.olUajrSz2cr9Dmbg8OpAa0tgbRXdDicT4zMXiLz3aUQ"
    }
 * 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       message: err
 *     }
 */
router.post('/auth', controller.postAuth)

/**
 * @api {GET} /usuarios Retorna os usuários cadastrados
 * @apiName get
 * @apiGroup usuarios
 *
 *
 * @apiSuccess {String} _id Id do usuário criado automaticamento pelo mongoDB.
 * @apiSuccess {String} nome Nome do usuário.
 * @apiSuccess {String} email Email do usuário.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *    {
        "usuarios": [
            {
                "_id": "5df23884a1c64527b49664a6",
                "nome": "Henrique",
                "email": "henrique@email.com"
            },
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       message: err
 *     }
 */
router.get('/', controller.get)

module.exports = router;