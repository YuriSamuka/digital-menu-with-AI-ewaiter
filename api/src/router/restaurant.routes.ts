import { Router } from 'express'
import { RestaurantController } from '../controllers/restaurant.controller'

const router = Router()

router.get('/:id', RestaurantController.findById)

export default router