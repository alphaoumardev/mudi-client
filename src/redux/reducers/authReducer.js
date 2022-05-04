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
    LOGOUT_FAIL, REFRESH_FAIL,
} from '../Types'

export default function authReducer(state = {}, action)
{
    const {type, payload} = action

    switch (type)
    {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return{
                isLoading: true,
            }
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
            }
        case LOGIN_SUCCESS:
        case GOOGLE_AUTH_SUCCESS:
        case FACEBOOK_AUTH_SUCCESS:
            localStorage.setItem('access', payload.access)
            localStorage.setItem('refresh', payload.refresh)
            sessionStorage.setItem('access', payload.access)
            sessionStorage.setItem('refresh', payload.refresh)

            return{
                ...state,
                access: payload.access,
                refresh: payload.refresh,
                isAuthenticated: true,
                isLoading: false,
                user: payload,
            }

        case LOAD_PROFILE_SUCCESS:
            return{
                ...state,
                user:{
                    ...payload,
                    ...state.user
                }
            }
        case REFRESH_TOKEN:
            localStorage.setItem('access', payload.access)
            return{
                ...state,
                access: payload.access,
            }
        case AUTHENTICATED_FAIL:
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
            }
        case LOAD_PROFILE_FAIL:
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
                error: payload
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOGOUT_SUCCESS:
        case FACEBOOK_AUTH_FAIL:
        case GOOGLE_AUTH_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            sessionStorage.removeItem('access')
            sessionStorage.removeItem('refresh')
            localStorage.removeItem('cartItems', )
            localStorage.removeItem('wishlistItem',)
            localStorage.removeItem('cartItem',)


            // localStorage.clear()
            // sessionStorage.clear()

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


