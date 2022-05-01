import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {cartReducer} from "./cartReducer";
import {
    orderCreateReducer,
    orderDeliverReducer,
    orderDetailsReducer,
    orderListReducer,
    orderMineReducer,
    orderPayReducer
} from "./orderReducer";
import {
    getAllProductsReducer,
    getColorsReducer,
    getImagesReducer,
    getNewProductsReducer,
    getOneProductReducer,
    getOnsaleProductsReducer,
    getProductBySubcategoriesReducer,
    getproductByVariantReducer,
    getProductsByCatNameReducer,
    getProductsByPagegReducer,
    getSizesReducer,
    getSlidersReducer,
    getTagsReducer
} from "./productsReducer";

export default combineReducers(
    {
        authReducer,

        cartReducer ,

        getAllProductsReducer,
        getProductsByPagegReducer,
        getOneProductReducer,
        getProductBySubcategoriesReducer,
        getproductByVariantReducer,
        getImagesReducer,
        getProductsByCatNameReducer,
        getColorsReducer,
        getSizesReducer,
        getTagsReducer,
        getNewProductsReducer,
        getOnsaleProductsReducer,
        getSlidersReducer,

        // orderCreateReducer,
        // orderDetailsReducer,
        // orderDeliverReducer,
        // orderPayReducer,
        // orderMineReducer,
        // orderListReducer,
    });
