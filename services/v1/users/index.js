'use strict'
var platform = require('../../../platform'),
    parser = ('co-body')

var show = exports.show = function *show(){
  this.body = 'Hello World'
}


exports.register = function(router) {
  router.get('/users', show)
}
