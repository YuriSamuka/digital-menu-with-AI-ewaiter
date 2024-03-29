import {
    FETCH_CATEGORY,
    FETCH_CATEGORY_FAILED,
    FETCH_CATEGORY_SUCCESS,
} from "./constants"

export const fetchCategory = (restaurantId) => ({
    type: FETCH_CATEGORY,
    payload: restaurantId,
})

export const fetchCategorySuccess = (category) => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: category,
});

export const fetchCategoryFailed = (error) => ({
    type: FETCH_CATEGORY_FAILED,
    payload: error,
})