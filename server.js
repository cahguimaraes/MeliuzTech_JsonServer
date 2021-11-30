const JsonServer = require('json-server');
const server = JsonServer.create();
const routes = JsonServer.router('db.json');
const middleware = JsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(routes);
server.listen(port);
