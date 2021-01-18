const router = require('express').Router()

router.use('/getMenuSections', require('./getMenuSections.ts'))

module.exports = router
