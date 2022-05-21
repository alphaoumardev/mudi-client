import {createStore, applyMiddleware,} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import jwt_decode from 'jwt-decode';

const accessToken = localStorage.getItem('access') ? localStorage.getItem('access') : null;
const refreshToken = localStorage.getItem('refresh') ? localStorage.getItem('refresh') : null;

const userStorage = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null
const cartItemStorage = localStorage.getItem('cartItem')? JSON.parse(localStorage.getItem('cartItem')):[]
// const shippingAddressStorage = localStorage.getItem('shippingAddress')? JSON.parse(localStorage.getItem('shippingAddress')): {}

let authenticationState = {
    error:null,
    isLoading:false,
    isAuthenticated: false,
    user: userStorage,
    access: accessToken,
    refresh: refreshToken,
};
if (accessToken)
{
    try
    {
        //Decode Token Here
        authenticationState['user'] = jwt_decode(accessToken);
        authenticationState['isAuthenticated'] = true;
    } catch (error)
    {
        authenticationState['access'] = null;
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    }
}

const initialState = {
    authReducer: authenticationState,
    //cartReducer: {cartItem: cartItemStorage,}
};
const middleware = [thunk];

const store = createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;
