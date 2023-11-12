import { Router } from 'express'
import restaurantRoutes from './restaurant.routes'
import productRoutes from './product.routes'
import categoryRoutes from './category.routes'
const router = Router()

router.use('/restaurant', restaurantRoutes)
router.use('/product', productRoutes)
router.use('/category', categoryRoutes)

export default router
