import express from 'express'
import AuthController from 'server/controllers/MenuSectionsController.ts'

const router = express.Router()

router.get('/', AuthController.getMenuSections)

export default router
