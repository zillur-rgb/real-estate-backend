import express from 'express'
import { PropertyController } from '../controllers/property.controller'
import verifyJwt from '../middlewares/verifyToken'

const router = express.Router()
router.get('/get/num-of-property', PropertyController.propertyTypeNum)
router.get('/get-all', PropertyController.getAll)
router.get('/:id', PropertyController.findSingleProperty)
router.get('/get/:type', PropertyController.getAllFromType)
router.put('/:id', verifyJwt, PropertyController.updateProperty)
router.put('/:id', verifyJwt, PropertyController.deleteSingleProperty)
router.get('/get/featured', PropertyController.getFeatured)
router.get('/get/my-properties', verifyJwt, PropertyController.getMyProperties)
router.post('/create-property', verifyJwt, PropertyController.createProperty)

export const PropertyRouter = router
