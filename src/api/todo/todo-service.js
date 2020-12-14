const persona = require("./todo")

persona.methods(['get', 'post', 'put', 'delete'])
persona.updateOptions({ new: true, runValidators: true})

module.exports = persona