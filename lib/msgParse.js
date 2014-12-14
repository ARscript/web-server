'use strict'
var _ = require('underscore')
var exports = module.exports = {}
/*********************
 * Private Functions *
 ********************/

/**
 * Create a initilization message from the server.
 * Sends the user a session hash that can be used
 * by other devices to pass data
 */
var createServerInit = function(conn){
  conn = (conn || {})
  var msg =
  { dateType:
    { type: 'connection'
    , roomKey: genHash(8)
    , sockId: (conn.id || '')
    }
  }
  return JSON.stringify(msg)
}

var genHash = function(length){
  var word = '';
  var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i in _.range(length)) {
    word += possible[Math.floor((Math.random() * possible.length))].toString()
  }
  return word
}


/********************
 * Public Functions *
 *******************/

exports.initConn = function(initiate, conn) {
  initiate = (initiate || 'SERVER')
  switch(initiate) {
    case 'SERVER':
      return createServerInit(conn)
      break;
    case 'CLIENT':
      return reconnectClient()
      break;
    default:
      return initationFailed()
  }
}


