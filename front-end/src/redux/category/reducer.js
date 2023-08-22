import {
    FETCH_CATEGORY,
    FETCH_CATEGORY_FAILED,
    FETCH_CATEGORY_SUCCESS
} from "./constants"

const INIT_STATE = {
    category: [],
    loading: false,
    error: null
}

const category = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORY:
            return { ...state, loading: true }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload,
                loading: false,
                error: null
            }
        case FETCH_CATEGORY_FAILED:
            return { ...state, error: action.payload, loading: false }
        default:
            return { ...state }
    }
}

export default category