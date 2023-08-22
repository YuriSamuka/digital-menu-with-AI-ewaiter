import { all } from 'redux-saga/effects'
import productsSaga from './products/saga'
import restaurantSaga from './restaurant/saga';
import categorySaga from './category/saga';

export default function* rootSaga(getState: any): any {
    yield all([
        productsSaga(),
        restaurantSaga(),
        categorySaga()
    ])
}