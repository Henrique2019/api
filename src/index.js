const server = require('./config/serve')

require('./config/database')

require('./config/router')(server)