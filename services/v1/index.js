var Router = require('koa-router'),
    router = new Router()

require('./users').register(router)
module.exports = router.middleware()
