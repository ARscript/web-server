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
  , mongo:
    { host: ((process.env.MONGO_HOST || (cfg.mongo.host || undefined)) || 'localhost' )
    , user: ((process.env.MONGO_USER || (cfg.mongo.user || undefined)) || 'root')
    , pass: ((process.env.MONGO_PASS || (cfg.mongo.pass || undefined)) || '')
    , port: ((process.env.MONGO_PORT || (cfg.mongo.port || undefined)) || 3336)
    , database: ((process.env.MONGO_DATABASE || (cfg.mongo.database || undefined)) || '')
    }
  , redis:
    { host: ((process.env.REDIS_HOST || (cfg.redis.host || undefined)) || 'localhost' )
    }
  }
}

module.exports = configure
