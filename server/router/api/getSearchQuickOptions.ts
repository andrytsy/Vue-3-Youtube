import express from 'express'
import QuickOptionsController from 'server/controllers/QuickOptionsController.ts'

const router = express.Router()

router.get('/', QuickOptionsController.getQuickOptions)

export default router
