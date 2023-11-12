import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchJSON } from '../../helpers'

import {
    FETCH_PRODUCTS
} from './constants'

import {
    fetchProductsSuccess,
    fetchProductsFailed
} from './actions'

function* fetchProductsSaga({ payload: restaurantId }) {
    try {
        const options = { method: 'GET' }
        const endpoint = `product/restaurant/${restaurantId}`
        const products = yield call(fetchJSON, endpoint, options)
        yield put(fetchProductsSuccess(products))
    } catch (error) {
        yield put(fetchProductsFailed(error))
    }
}

export default function* productsSaga() {
    yield all([
        takeLatest(FETCH_PRODUCTS, fetchProductsSaga),
    ])
}