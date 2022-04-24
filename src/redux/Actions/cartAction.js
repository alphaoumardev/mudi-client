import * as A from '../Actions/Types'
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) =>
{
    const {data} = await axios.get(`/one/`+id)
    dispatch({
        type: A.CART_ADD_ITEM,
        payload: {
            data,
            quantity
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => (dispatch, getState)=>
{
    dispatch({
        type:A.CART_REMOVE_ITEM,
        payload:id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) =>
{
    dispatch({
        type:A.CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data)=> (dispatch)=>
{
    dispatch({
        type:A.CART_PAYMENT,
        payload: data,
    })
    localStorage.setItem('payment', JSON.stringify(data))
}
