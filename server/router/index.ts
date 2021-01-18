const router = require('express').Router()

router.use('/api/v1', require('./api/index.ts'))

module.exports = router
