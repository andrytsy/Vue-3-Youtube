import express from 'express'
const router = express.Router()

router.use('/getMenuSections', require('./getMenuSections.ts'))
router.use('/getSearchQuickOptions', require('./getSearchQuickOptions.ts'))

module.exports = router
