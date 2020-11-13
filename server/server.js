// 1- Module dependencies.
const http = require('http');
const app = require('./app');
const debug = require('debug')('augdemo:server');

// 2- Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3030');
app.set('port', port);

// 3- Create HTTP server.
const server = http.createServer(app);

// 4- Listen on provided port, on all network interfaces.
server.listen(port);

// 5- Normalize a port into a number, string, or false.
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

// 6- Event listener for HTTP server "error" event.
const handleError = (error) => {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // 7- Handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// 8- Event listener for HTTP server "listening" event
function handleListen() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

server.on('error', handleError);
server.on('listening', handleListen);
