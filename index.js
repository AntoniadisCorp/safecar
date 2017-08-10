#!/usr/bin/env node

/**
 * Module dependencies.
 */

var fs = require('fs');

var app   = require('./app');
var debug = require('debug')('safecar:server');
var https  = require('https');

var key = fs.readFileSync('hacksparrow-key.pem')
, cert = fs.readFileSync('hacksparrow-cert.pem')
, options = {
    key: key,
    cert: cert
};


//http.globalAgent.maxSockets = 100;

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


/**
 * Create HTTPS server.
 */
var server = https.createServer(options, app);




/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


// This is for socket.io
// var appio = require('socket.io').listen(server)

// , io = require('../ServerJavascript/socket.io')('')

// io.setSock(appio)

// console.log('io='+JSON.stringify(io));

/*
var io = require('../ServerJavascript/sockets_io');
io = require('socket.io').listen(server);

*/


var io = app.io
io.attach( server );




/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {return val;}	// named pipe
  if (port >= 0)   {return port;}	// port number
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
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
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
console.log('HTTPS Server listening on %s'/* , HOST */, port)
