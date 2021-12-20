define({ "api": [
  {
    "type": "DELETE",
    "url": "/estoque/:id",
    "title": "Deleta o item filtrado por seu id",
    "name": "delete",
    "group": "estoque",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Produto removido!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estoqueRoute.js",
    "groupTitle": "estoque"
  },
  {
    "type": "GET",
    "url": "/estoque",
    "title": "Retorna os produtos cadastrados",
    "name": "get",
    "group": "estoque",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do produto, criado automaticamente pelo mongoDB.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do produto.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unidMedida",
            "description": "<p>Unidade de medida do produto.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dataVencimento",
            "description": "<p>Data de vencimento do produto.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"_id\": \"5df3f107d84dd116307f9971\",\n    \"descricao\": \"Tapioca\",\n    \"unidMedida\": \"gr\",\n    \"dataVencimento\": \"2019-12-15T03:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estoqueRoute.js",
    "groupTitle": "estoque"
  },
  {
    "type": "GET",
    "url": "/estoque/dias/:id",
    "title": "Retorna os dias para o vencimento de um item filtrado pelo id",
    "name": "getDias",
    "group": "estoque",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensagem",
            "description": "<p>A mensagem é retornada dependendo da condição de validade do produto.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    \n      O produto Tapioca vence em 9 dias.\nou\n\n    HTTP/1.1 200 OK\n    \n      O produto Tapioca vence hoje ou já está vencido!.",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estoqueRoute.js",
    "groupTitle": "estoque"
  },
  {
    "type": "GET",
    "url": "/estoque/VencendoProximosSeteDias",
    "title": "Retorna um array com os produtos que irão vencer nos próximos 7 dias",
    "name": "getVencendo",
    "group": "estoque",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "retorno",
            "description": "<p>Descrição do produto retornado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    \"Cookie\",\n    \"Tapioca\"\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estoqueRoute.js",
    "groupTitle": "estoque"
  },
  {
    "type": "POST",
    "url": "/estoque",
    "title": "Cria um novo produto",
    "name": "post",
    "group": "estoque",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do produto, criado automaticamente pelo mongoDB.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do produto.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unidMedida",
            "description": "<p>Unidade de medida do produto.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dataVencimento",
            "description": "<p>Data de vencimento do produto.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"_id\": \"5df3f107d84dd116307f9971\",\n    \"descricao\": \"Tapioca\",\n    \"unidMedida\": \"gr\",\n    \"dataVencimento\": \"2019-12-15T03:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": 'Registration Failed: ' + err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estoqueRoute.js",
    "groupTitle": "estoque"
  },
  {
    "type": "PUT",
    "url": "/estoque/:id",
    "title": "Atualiza um item filtrado por seu id utilizando os dados passados no corpo da requisição",
    "name": "put",
    "group": "estoque",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Produto atualizado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estoqueRoute.js",
    "groupTitle": "estoque"
  },
  {
    "type": "get",
    "url": "/produtos",
    "title": "Retorna uma página HTML com os produtos cadastrados",
    "name": "get",
    "group": "produtos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   http://localhost:8080/produtos\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "produtos"
  },
  {
    "type": "GET",
    "url": "/usuarios",
    "title": "Retorna os usuários cadastrados",
    "name": "get",
    "group": "usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do usuário criado automaticamento pelo mongoDB.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 OK\n{\n     \"usuarios\": [\n         {\n             \"_id\": \"5df23884a1c64527b49664a6\",\n             \"nome\": \"Henrique\",\n             \"email\": \"henrique@email.com\"\n         },\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  message: err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuarioRouter.js",
    "groupTitle": "usuarios"
  },
  {
    "type": "POST",
    "url": "/usuarios",
    "title": "Cria um novo usuário",
    "name": "post",
    "group": "usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do usuário criado automaticamento pelo mongoDB.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senho do usuário criptografada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 OK\n{\n \"_id\": \"5df40264ba96c62b34f99450\",\n  \"nome\": \"Ana\",\n  \"email\": \"ana@email.com\",\n  \"senha\": \"$2a$10$/9N8WLp5PWwnOeXZiXa8cO9qub7ACxuM1bNW7K355.YfY7/9Q95kG\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  message: err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuarioRouter.js",
    "groupTitle": "usuarios"
  },
  {
    "type": "POST",
    "url": "/usuarios/auth",
    "title": "Gera um token de autenticação do usuário",
    "name": "postAuth",
    "group": "usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do usuário criado automaticamento pelo mongoDB.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senho do usuário criptografada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticação do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"usuario\": {\n         \"_id\": \"5df23c71a3c7de10a4efb779\",\n         \"nome\": \"Maria\",\n         \"email\": \"maria@email.com\",\n         \"senha\": \"$2a$10$8eYHoujVFC.21YhcVK8mO.G1Q38WQSgs3L07TMnhWd/jKn5yA9m.i\"\n     },\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjIzYzcxYTNjN2RlMTBhNGVmYjc3OSIsImlhdCI6MTU3NjI3MzEyMywiZXhwIjoxNTc2MzU5NTIzfQ.olUajrSz2cr9Dmbg8OpAa0tgbRXdDicT4zMXiLz3aUQ\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  message: err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuarioRouter.js",
    "groupTitle": "usuarios"
  }
] });
