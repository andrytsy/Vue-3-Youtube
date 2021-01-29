import express from 'express'
import getMenuSections from './getMenuSections'
import getSearchQuickOptions from './getSearchQuickOptions'

const router = express.Router()

router.use('/getMenuSections', getMenuSections)
router.use('/getSearchQuickOptions', getSearchQuickOptions)

export default router
