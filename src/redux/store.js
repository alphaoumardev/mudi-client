import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './Reducers';

const accessToken = localStorage.getItem('access') ? localStorage.getItem('access') : null;
const refreshToken = localStorage.getItem('refresh') ? localStorage.getItem('refresh') : null;

let authState = {
    access: accessToken,
    refresh: refreshToken,
    isAuthenticated: false,
    user: null,
};

const initialState = {}
const middleware = [thunk]
const store = createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))
export default store
