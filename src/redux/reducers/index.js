import { combineReducers } from 'redux';
import auth from './auth';
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
        auth: auth,
        cart: cartReducer,

        orderCreate: orderCreateReducer,
        orderDetails: orderDetailsReducer,
        orderDeliver: orderDeliverReducer,
        orderPay: orderPayReducer,
        orderMine: orderMineReducer,
        orderList: orderListReducer,
    });
