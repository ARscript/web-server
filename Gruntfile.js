'use strict'
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)
  var pkgCfg = require('./package.json')
  grunt.initConfig
  ( { 'node-inspector':
      { dev:
        { options:
          { 'web-port': process.env.INSPECTOR_WEB_PORT || 1337
          , 'web-host': 'localhost'
          , 'debug-port': 5858
          , 'save-live-edit': true
          , 'hidden':
            [ 'node-modules'
            ]
          }
        }
      }
    , nodemon:
      { dev:
        { script: pkgCfg.main
        , options:
          { nodeArgs:
            [ '--harmony'
            , '--debug'
            ]
          }
        , env:
          { PORT: process.env.NODEMON_PORT || 5455
          }
        , watch:
          [ 'js'
          , 'json'
          ]
        , callback: function(nodemon) {
            nodemon.on(log, function(event){
              console.log(event.color)
            })
          }
        }
      }
    , concurrent:
      { server:
        { tasks:
          [ 'nodemon:dev'
          , 'node-inspector:dev'
          ]
        , options:
          { logConcurrentOutput: true
          }
        }
      }
    }
  )
  grunt.registerTask('serve', function(target){
    grunt.task.run
    ( [ 'concurrent:server'
      ]
    )
  })

}
