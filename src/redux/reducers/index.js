import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {cartReducer} from "./cartReducer";
import {
    orderCreateReducer,
    orderDeliverReducer,
    orderDetailsReducer, orderListReducer,
    orderMineReducer,
    orderPayReducer
} from "./orderReducer";

export default combineReducers(
    {
        authReducer: authReducer,
        cartReducer: cartReducer ,

        orderCreateReducer: orderCreateReducer,
        orderDetailsReducer: orderDetailsReducer,
        orderDeliverReducer: orderDeliverReducer,
        orderPayReducer: orderPayReducer,
        orderMineReducer: orderMineReducer,
        orderListReducer: orderListReducer,
    });
