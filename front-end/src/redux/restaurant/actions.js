import {
    FETCH_RESTAURANT,
    FETCH_RESTAURANT_FAILED,
    FETCH_RESTAURANT_SUCCESS
} from './constants';

export const fetchRestaurant = (restaurantId) => ({
    type: FETCH_RESTAURANT,
    payload: restaurantId
});

export const fetchRestaurantSuccess = (restaurant) => ({
    type: FETCH_RESTAURANT_SUCCESS,
    payload: restaurant,
});

export const fetchRestaurantFailed = (error) => ({
    type: FETCH_RESTAURANT_FAILED,
    payload: error,
});
