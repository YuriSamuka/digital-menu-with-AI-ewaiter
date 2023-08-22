import { combineReducers } from 'redux'
import products from './products/reducer'
import restaurant from './restaurant/reducer';
import category from './category/reducer';

export default combineReducers({ products, restaurant, category })