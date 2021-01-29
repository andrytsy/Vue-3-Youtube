import express from 'express'
const router = express.Router()
const AuthController = require('../../controllers/MenuSectionsController.ts')

router.get('/', AuthController.getMenuSections)

module.exports = router
