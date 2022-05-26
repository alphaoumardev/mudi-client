import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS,

    REFRESH_TOKEN,

    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    FACEBOOK_AUTH_SUCCESS,
    FACEBOOK_AUTH_FAIL,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL, REFRESH_FAIL, CART_CLEAR_ITEMS, WISHLIST_CLEAR_ITEMS, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL
} from '../Types'

const accessToken = localStorage.getItem('access') ? localStorage.getItem('access') : null;
const refreshToken = localStorage.getItem('refresh') ? localStorage.getItem('refresh') : null;
const userStorage = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null

export default function authReducer(state = {
    error:null,
    isLoading:false,
    isAuthenticated: false,
    user: userStorage,
    access: accessToken,
    refresh: refreshToken,
}, action)
{
    switch (action.type)
    {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return{
                isLoading: true,
            }

        case AUTHENTICATED_SUCCESS:
        case LOGIN_SUCCESS:
        case GOOGLE_AUTH_SUCCESS:
        case FACEBOOK_AUTH_SUCCESS:
            localStorage.setItem('access', action.payload.access)
            localStorage.setItem('refresh', action.payload.refresh)

            return{
                ...state,
                access: action.payload.access,
                refresh: action.payload.refresh,
                isAuthenticated: true,
                user: action.payload,
                isLoading: false,
            }
        case UPDATE_PROFILE_SUCCESS:
        case LOAD_PROFILE_SUCCESS:
            return{
                ...state,
                user:{
                    ...action.payload,
                    ...state.user
                }
            }
        case REFRESH_TOKEN:
            localStorage.setItem('access', payload.access)
            return{
                ...state,
                access: action.payload.access,
            }
        case AUTHENTICATED_FAIL:
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
            }
        case LOAD_PROFILE_FAIL:
        case UPDATE_PROFILE_FAIL:
            return{
                ...state,
                user: null,
            }
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case REFRESH_FAIL:
        case REGISTER_FAIL:
            return {
                isLoading: false,
                error: action.payload,
                user:null,
                access: null,
                refresh: null,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOGOUT_SUCCESS:
        case FACEBOOK_AUTH_FAIL:
        case GOOGLE_AUTH_FAIL:
        case CART_CLEAR_ITEMS:
        case WISHLIST_CLEAR_ITEMS:
            // localStorage.removeItem('access')
            // localStorage.removeItem('refresh')
            // sessionStorage.removeItem('access')
            // sessionStorage.removeItem('refresh')
            // localStorage.removeItem('cartItems', )
            // localStorage.removeItem('wishlistItem',)
            // localStorage.removeItem('cartItem',)


            localStorage.clear()
            sessionStorage.clear()

            return{
                ...state,
                user: null,
                access: null,
                refresh: null,
                isLoading: false,
                isAuthenticated: false,
            }
        case ACTIVATION_FAIL:
        case ACTIVATION_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
            return{
                ...state
            }
        default:
            return state
    }
}


