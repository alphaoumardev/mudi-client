import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS,

    REFRESH_TOKEN,
    REFRESH_FAIL,

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
    LOGOUT_FAIL,
    ORDER_MINE_RESET, CART_CLEAR_ITEMS, ORDER_MY_FAIL
} from '../Types'
import axios from "axios";

export const postActionPayloadError = (type, error) => ({
        type: type,
        payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
});

export const checkAuthenticated = () => async dispatch =>
{
    if(localStorage.getItem('access'))
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const body = JSON.stringify(localStorage.getItem('access'))
        try
        {
            const res = await axios.post('/auth/jwt/verify/',body, config)

            if(res.data.code !== 'token_not_valid')
            {
                dispatch({type:AUTHENTICATED_SUCCESS})
            }
            else
            {
                dispatch({type:AUTHENTICATED_FAIL})
            }
        }
        catch (error)
        {
            dispatch({type: AUTHENTICATED_FAIL,})
        }
    }else
    {
        dispatch({type: AUTHENTICATED_FAIL,})
    }
}

export const load_user = () => async dispatch =>
{
    if(localStorage.getItem('access'))
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        try
        {
            const res = await axios.get('/auth/users/me/', config)
            dispatch({type: LOAD_PROFILE_SUCCESS, payload: res.data,})
        }
        catch (error)
        {
            dispatch({type: LOAD_PROFILE_FAIL, payload: error})
        }
    }else
    {
        dispatch({type: LOAD_PROFILE_SUCCESS,})
    }
}

export const login = (email, password) => async dispatch =>
{

    const config ={ headers:{'Content-Type': 'application/json'} }
    const body = JSON.stringify({email, password})
    try
    {
        dispatch({ type: LOGIN_REQUEST });

        const res = await axios.post('/auth/jwt/create', body, config)

        dispatch({type:LOGIN_SUCCESS, payload: res.data,})
        dispatch(load_user())
        localStorage.setItem('user', JSON.stringify(res.data))

    }
    catch (error)
    {
        dispatch(postActionPayloadError(LOGIN_FAIL, error))
    }
}

export const signup = (first_name, last_name, email, password, re_password)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({first_name, last_name, email, password, re_password})
    try
    {
        dispatch({type:REGISTER_REQUEST})

        const res = await axios.post('/auth/users/', body, config)
        dispatch({type:REGISTER_SUCCESS, payload: res.data,})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(REGISTER_FAIL, error))
    }
}

export const logout = () => dispatch =>
{
    try
    {
        localStorage.removeItem('user')
        dispatch({type:LOGOUT_REQUEST})
        dispatch({type:LOGOUT_SUCCESS})
        dispatch({type:ORDER_MY_FAIL})
        dispatch({type:CART_CLEAR_ITEMS})
        dispatch({type:WISHLIST_CLEAR_ITEMS})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(LOGOUT_FAIL, error))
    }
}

export const refreshToken = (refresh)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({refresh})
    try
    {
        await axios.post('/auth/jwt/refresh/', body, config)
        dispatch({type:REFRESH_TOKEN,})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(REFRESH_FAIL, error))
    }
}

export const verify = (uid, token)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({uid, token})
    try
    {
        await axios.post('/auth/users/activation/', body, config)
        dispatch({type:ACTIVATION_SUCCESS,})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(ACTIVATION_FAIL, error))
    }
}

export const reset_password = (email,)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({email,})
    try
    {
        await axios.post('/auth/users/reset_password/', body, config)
        dispatch({type:PASSWORD_RESET_SUCCESS,})
    }
    catch (error)
    {
        dispatch({type: PASSWORD_RESET_FAIL,})
    }
}

export const reset_password_confirm = (uid, token, new_password, re_password) => async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({uid, token, new_password, re_password})
    try
    {
        await axios.post('/auth/users/reset_password_confirm/', body, config)
        dispatch({type:PASSWORD_RESET_CONFIRM_SUCCESS,})
    }
    catch (error)
    {
        dispatch({type: PASSWORD_RESET_CONFIRM_FAIL,})
    }
}

export const googleAuthenticate = (state, code) => async dispatch =>
{
    if(state && code && !localStorage.getItem('access'))
    {
        const config ={ headers: {'Content-Type': 'application/x-form-urlencoded'}}
    }
    const details = {'state': state, 'code': code}
    const formBody = Object.keys(details).map(key =>
        encodeURIComponent(key) + '=' +
        encodeURIComponent(details[key])).join('&')
    try
    {
        const res = await axios.post(`/auth/o/google-oauth2/?${formBody}`, config)
        dispatch({type:GOOGLE_AUTH_SUCCESS, payload: res.data})
        dispatch(load_user())
    }
    catch (error)
    {
        dispatch({type: GOOGLE_AUTH_FAIL,})
    }
}

export const facebookAuthenticate = (state, code) => async dispatch =>
{
    if(state && code && !localStorage.getItem('access'))
    {
        const config ={ headers: {'Content-Type': 'application/x-form-urlencoded'}}
    }
    const details = {'state': state, 'code': code}
    const formBody = Object.keys(details).map(key =>
        encodeURIComponent(key) + '=' +
        encodeURIComponent(details[key])).join('&')
    try
    {
        const res = await axios.post(`/auth/o/facebook/?${formBody}`, config)
        dispatch({type:FACEBOOK_AUTH_SUCCESS, payload: res.data})
        dispatch(load_user())
    }
    catch (error)
    {
        dispatch({type: FACEBOOK_AUTH_FAIL,})
    }
}

