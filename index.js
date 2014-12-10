(function(){
  'use strict'
  var app = require('koa')(),
      middleware = require('./lib/middleware'),
      config = require('./lib/config')(),
      db = require('./platform/db'),
      services = require('./services'),
      co = require('co')

  app.use(middleware.favicon())
  app.use(middleware.logger())
  app.use(middleware.responseTime())
  app.use(middleware.compress())

  app.use(middleware.mount('/api/v1', services.v1))
  co(function *(){
    app.listen(config.app.port)
    console.log('Listening on %d', config.app.port)
  })

})();
