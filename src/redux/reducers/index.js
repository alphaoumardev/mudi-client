import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {cartReducer} from "./cartReducer";
import {wishlistReducer} from './wishlistReducer'
import {create_addressReducer, getShippingAddressReducer, orderCreateReducer, getMyorderReducer} from "./orderReducer";
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
        wishlistReducer,

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

        create_addressReducer,
        getShippingAddressReducer,

        orderCreateReducer,
        getMyorderReducer,

    });
