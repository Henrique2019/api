const express = require('express');
const request = require('request-promise-native');

const router = express.Router();


/**
 * @api {get} /produtos Retorna uma página HTML com os produtos cadastrados
 * @apiName get
 * @apiGroup produtos
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       http://localhost:8080/produtos
    }
 *
 */
router.get('/', async (req, res) => {
    const result = await request.get('http://localhost:8080/estoque');
    const produtos = JSON.parse(result);
    
    res.render('produtos', { produtos });
})

module.exports = router;