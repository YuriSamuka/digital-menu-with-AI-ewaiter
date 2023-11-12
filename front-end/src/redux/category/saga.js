import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchJSON } from '../../helpers'

import {
    FETCH_CATEGORY
} from './constants'

import {
    fetchCategorySuccess,
    fetchCategoryFailed
} from './actions'

function* fetchCategorySaga({ payload: restaurantId }) {
    try {
        const options = { method: 'GET' }
        const endpoint = `category/${restaurantId}`
        const category = yield call(fetchJSON, endpoint, options)
        yield put(fetchCategorySuccess(category))
    } catch (error) {
        yield put(fetchCategoryFailed(error))
    }
}

export default function* categorySaga() {
    yield all([
        takeLatest(FETCH_CATEGORY, fetchCategorySaga),
    ])
}