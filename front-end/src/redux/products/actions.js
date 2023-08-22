import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCTS_SUCCESS,
} from "./constants"

export const fetchProducts = (restaurantId) => ({
    type: FETCH_PRODUCTS,
    payload: restaurantId,
})

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailed = (error) => ({
    type: FETCH_PRODUCTS_FAILED,
    payload: error,
})