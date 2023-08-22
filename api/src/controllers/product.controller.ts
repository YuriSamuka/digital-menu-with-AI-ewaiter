import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Product } from '../models'

const listProductsByRestaurantId = async (req: Request, res: Response): Promise<Response> => {
    try {
        const restaurantId = req.params?.restaurantId
        if (restaurantId) {
            const restaurantProducts = await Product.query().where('restaurant_id', restaurantId)
            return res.status(StatusCodes.OK).json(restaurantProducts)
        }
        return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: 'Restaurant id must be sent' })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: 'Failed to retrive the products of this restaurant' })
    }
}

export const ProductController = {
    listProductsByRestaurantId,
}