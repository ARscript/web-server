'use strict'
var redis = require('redis'),
    client = redis.createClient()

client.on('connect', function(){
  console.log('Redis connected')
})

client.on('error', function(e){
  console.error('Error: %s', e)
})

client.on('end', function(){
  console.log('Redis connection lost....reconnecting')
  client = redis.createClient()
})

exports.redis = client
