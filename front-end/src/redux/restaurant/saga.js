import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchJSON } from '../../helpers'

import {
    FETCH_RESTAURANT
} from './constants';

import {
    fetchRestaurantSuccess,
    fetchRestaurantFailed
} from './actions'

function* fetchRestaurantSaga({ payload: restaurantId }) {
    try {
        const options = { method: 'GET' }
        const endpoint = `restaurant/${restaurantId}`
        const restaurantData = yield call(fetchJSON, endpoint, options);
        yield put(fetchRestaurantSuccess(restaurantData));
    } catch (error) {
        yield put(fetchRestaurantFailed(error));
    }
}

export default function* restaurantSaga() {
    yield all([
        takeLatest(FETCH_RESTAURANT, fetchRestaurantSaga)
    ])
}