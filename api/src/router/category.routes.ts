import { Router } from 'express'
import { CategoryController } from '../controllers/category.controller'

const router = Router()

router.get('/:restaurantId', CategoryController.listCategoryByRestaurantId)

export default router