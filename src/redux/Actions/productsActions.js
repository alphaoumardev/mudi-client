import * as P from '../Actions/Types'
import axios from "axios";

export const addToCart = (id, color, size) => async (dispatch, getState) =>
{
    const {data} = await axios.get(`/one/`+id)
    dispatch({
        type: P.CART_ADD_ITEM,
        payload: {
            data,
            color,
            size
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => (dispatch, getState)=>
{
    dispatch({
        type:P.CART_REMOVE_ITEM,
        payload:id,
    })
    localStorage.removeItem('cartItems', )
}

export const saveShippingAddress = (data) => (dispatch) =>
{
    dispatch({
        type:P.CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data)=> (dispatch)=>
{
    dispatch({
        type:P.CART_PAYMENT,
        payload: data,
    })
    localStorage.setItem('payment', JSON.stringify(data))
}
