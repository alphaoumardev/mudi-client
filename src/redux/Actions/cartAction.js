import * as A from '../Types'
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
    }
}
export const addToCart = (id, color, size, quantity, username) => async (dispatch) =>
{
    const product = id
    const user = username.id
    dispatch({type: A.CART_ADD_REQUEST})
    const body = JSON.stringify({product, color, size, quantity, user})

    await axios.post('/cart/', body, config).then((res)=>
    {
        dispatch({
            type: A.CART_ADD_ITEM,
            payload: res.data
        })
    })
}

export const getCartItems = () => async (dispatch) =>
{
    await axios.get('/cart/', config).then((res)=>
    {
        dispatch({
            type: A.CART_GET_ITEMS,
            payload: res.data.result,
            order_total: res.data.order_total,
            cart_count: res.data.cart_count,
        })
        // console.log(res.data)
        localStorage.setItem('cartItem', JSON.stringify(res.data))
    })
}

export const removeItemFromCart = (id) => async (dispatch) =>
{
    await axios.delete('/cart/' + id, config).then((res)=>
    {
        dispatch({
            type: A.CART_REMOVE_ITEM,
            payload: id,
        })
        // localStorage.removeItem('cartItem',)
    })
}

export const updateCartItem = (id, quantity, product) => async (dispatch) =>
{
    const body = JSON.stringify({quantity, product})
    await axios.put('/cart/' + id, body, config).then((res)=>
    {
        dispatch({
            type: A.CART_UPDATE_ITEM,
            payload: res.data,
        })
        // localStorage.getItem('cartItem', JSON.stringify(res.data))
        dispatch(getCartItems())
    })
}
// export const saveShippingAddress = (data) => (dispatch) =>
// {
//     dispatch({
//         type:A.CART_SAVE_SHIPPING_ADDRESS,
//         payload: data,
//     })
//     // localStorage.setItem('shippingAddress', JSON.stringify(data))
// }

export const savePaymentMethod = (data)=> (dispatch)=>
{
    dispatch({
        type:A.CART_PAYMENT,
        payload: data,
    })
    // localStorage.setItem('payment', JSON.stringify(data))
}
