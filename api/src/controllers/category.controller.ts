import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Category } from '../models'

const listCategoryByRestaurantId = async (req: Request, res: Response): Promise<Response> => {
    try {
        const restaurantId = req.params?.restaurantId
        if (restaurantId) {
            const restaurantCategories = await Category.query().where('restaurant_id', restaurantId)
            return res.status(StatusCodes.OK).json(restaurantCategories)
        }
        return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: 'Restaurant id must be sent' })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: 'Failed to retrive the categories of this restaurant' })
    }
}

export const CategoryController = {
    listCategoryByRestaurantId,
}