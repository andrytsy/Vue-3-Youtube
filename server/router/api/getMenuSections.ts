const router = require('express').Router()
const AuthController = require('../../controllers/MenuSectionsController.ts')

router.get('/', AuthController.getMenuSections)

module.exports = router
