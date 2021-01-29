import express from 'express'
const router = express.Router()
import QuickOptionsController from 'server/controllers/QuickOptionsController'

router.get('/', QuickOptionsController.getQuickOptions)

module.exports = router
