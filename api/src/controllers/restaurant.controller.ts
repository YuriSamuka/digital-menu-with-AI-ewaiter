import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Restaurant } from '../models'

const findById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const restaurantId = req.params?.id
        const restaurant = await Restaurant.query().findById(restaurantId)

        if (!restaurant) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: 'Restaurant not found' })
        }

        return res.status(StatusCodes.OK).json(restaurant)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: 'Failed to retrive restaurant' })
    }
}

export const RestaurantController = {
    findById,
}