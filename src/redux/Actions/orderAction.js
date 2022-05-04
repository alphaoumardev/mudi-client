import * as O from '../Types'
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
    }
}

export const createOrder = (order) => async (dispatch, getState) =>
{
    try
    {
        dispatch({type: O.ORDER_CREATE_REQUEST})
        const {user: {user},} = getState()
        const {data} = await axios.post(`/orders/add`, order, config)
        dispatch({
            type:O.ORDER_CREATE_SUCCESS,
            payload: data,
        })
        dispatch({
            type:O.CART_CLEAR_ITEMS,
            payload: data
        })
        localStorage.removeItem('cartItems')
    } catch (error)
    {
        dispatch({
            type: O.ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const getOrderDetail = (id) => async (dispatch, getState) =>
{
    try
    {
        dispatch({type: O.ORDER_DETAILS_REQUEST})
        const {user: {user},} = getState()
        const {data} = await axios.get(`/orders/${id}/`,config)
        dispatch(
        {
            type:O.ORDER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const orderPayment = (id, payment) => async (dispatch, getState) =>
{
    try
    {
        dispatch({type: O.ORDER_PAY_REQUEST})
        const {user: {user},} = getState()
        const {data} = await axios.put(`/orders/${id}/pay`,payment, config)
        dispatch(
            {
                type:O.ORDER_PAY_SUCCESS,
                payload: data,
            })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_PAY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const deliverOrder = (order) => async (dispatch,) =>
{
    try
    {
        dispatch({type: O.ORDER_DELIVER_REQUEST})
        const {data} = await axios.put(`/orders/${order.id}/deliver`, {}, config)
        dispatch(
            {
                type:O.ORDER_DELIVER_SUCCESS,
                payload: data,
            })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_DELIVER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const myOrdersLists = () => async (dispatch) =>
{
    try
    {
        dispatch({type: O.ORDER_MINE_REQUEST})
        const {data} = await axios.put(`/orders/myorder`, config)
        dispatch(
            {
                type:O.ORDER_MINE_SUCCESS,
                payload: data,
            })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_MINE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const ordersList = () => async (dispatch) =>
{
    try
    {
        dispatch({type: O.ORDER_LIST_REQUEST})
        const {data} = await axios.get(`/orders/`, config)
        dispatch(
            {
                type:O.ORDER_LIST_SUCCESS,
                payload: data,
            })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}
