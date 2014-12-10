'use strict'
var configure = function(){
  try {
    var cfg = require('../config.json')
  } catch(err) {
    var cfg = {}
  }

  return {
    app:
    { port: ((process.env.APP_PORT || (cfg.app.port || undefined)) || 8000)
    , namespace: ((process.env.APP_NAMESPACE || (cfg.app.namespace || undefined)) || '/api')
    , host: ((process.env.APP_HOST || (cfg.app.host || undefined)) || 'localhost')
    }
  , database:
    { host: ((process.env.DATABASE_HOST || (cfg.database.host || undefined)) || 'localhost' )
    , user: ((process.env.DATABASE_USER || (cfg.database.user || undefined)) || 'root')
    , pass: ((process.env.DATABASE_PASS || (cfg.database.pass || undefined)) || '')
    , port: ((process.env.DATABASE_PORT || (cfg.database.port || undefined)) || 3336)
    , database: ((process.env.DATABASE_DATABASE || (cfg.database.database || undefined)) || '')
    }
  }
}

module.exports = configure
