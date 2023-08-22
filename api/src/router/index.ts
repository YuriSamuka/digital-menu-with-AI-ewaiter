import { Router } from 'express'
import restaurantRoutes from './restaurant.routes'
import productRoutes from './product.routes'
const router = Router()

router.use('/restaurant', restaurantRoutes)
router.use('/product', productRoutes)

export default router
