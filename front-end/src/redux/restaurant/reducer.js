import {
    FETCH_RESTAURANT,
    FETCH_RESTAURANT_FAILED,
    FETCH_RESTAURANT_SUCCESS
} from './constants';

const INITIAL_STATE = {
    restaurant: {},
    loading: false,
    error: null,
};

const restaurant = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANT:
            return { ...state, loading: true };
        case FETCH_RESTAURANT_SUCCESS:
            const  restaurant  = action.payload
            return {
                ...state,
                restaurant: restaurant,
                loading: false,
                error: null,
            };
        case FETCH_RESTAURANT_FAILED:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default restaurant;