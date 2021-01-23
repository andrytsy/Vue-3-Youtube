const router = require('express').Router()
const QuickOptionsController = require('../../controllers/QuickOptionsController.ts')

router.get('/', QuickOptionsController.getQuickOptions)

module.exports = router
