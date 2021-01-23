const router = require('express').Router()

router.use('/getMenuSections', require('./getMenuSections.ts'))
router.use('/getSearchQuickOptions', require('./getSearchQuickOptions.ts'))

module.exports = router
