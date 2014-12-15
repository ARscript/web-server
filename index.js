(function(){
  'use strict'
  require('express-namespace')
  var app = require('express')(),
      middleware = require('./lib/middleware'),
      config = require('./lib/config')(),
      sockjs = require('sockjs'),
      http = require('http'),
      sockjs = require('sockjs'),
      redis = require('./lib/db'),
      msgParse = require('msgParse')
  var conns = [];
  var dS = sockjs.createServer();
  app.use(middleware.responseTime())
  app.use(middleware.compression())
  app.namespace(config.app.namespace, function(){
    app.get('/', function(req, res){
      var response = {}
      response.status = "active"
      response.timestamp = Date.now()
      res.send(response)
    })
  })
  var server = http.createServer(app).listen(config.app.port, function(){
    console.log('Listening on %d', config.app.port)
    dS.on('connection', function(conn){
      // Push to Array and redis
      conns.push(conn)
      // Send init msg
      conn.on('data', function(msg){
        console.log('--> ' + msg)
        msgParse.commParse(msg, conn)
      })
      conn.on('close', function(){
        console.log('Socket Closed')
      })
    })
    dS.installHandlers(server, {prefix: '/sock'})
  })
})();
