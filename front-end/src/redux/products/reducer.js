import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCTS_SUCCESS,
} from "./constants"

const INIT_STATE = {
    products: [],
    highlights: [],
    total: 0,
    loading: false,
    error: null
}

const products = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, loading: true }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            }
        case FETCH_PRODUCTS_FAILED:
            return { ...state, error: action.payload, loading: false }
        default:
            return { ...state }
    }
}

export default products