import * as A from '../Types'
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
    }
}
export const addToWishlist = (id, username) => async (dispatch) =>
{
    const product = id
    const user = username.id
    dispatch({type: A.WISHLIST_ADD_REQUEST})
    const body = JSON.stringify({product, user})

    await axios.post('/wishlist/', body, config).then((res)=>
    {
        dispatch({
            type: A.WISHLIST_ADD_ITEM,
            payload: res.data
        })
        console.log(res.data.product)
        localStorage.setItem('wish', JSON.stringify(res.data.product))
    })

}

export const getWishlistItems = () => async (dispatch) =>
{
    await axios.get('/wishlist/', config).then((res)=>
    {
        dispatch({
            type: A.WISHLIST_GET_ITEMS,
            payload: res.data.result,
            wishlist_count: res.data.wishlist_count,
        })
        localStorage.setItem('wishlistItem', JSON.stringify(res.data))
    })
}
export const removeItemFromWishlist = (id) => async (dispatch) =>
{
    await axios.delete('/wishlist/' + id, config).then((res)=>
    {
        dispatch({
            type: A.WISHLIST_REMOVE_ITEM,
            payload: res,
        })
        // console.log(res)
        // localStorage.removeItem('wishlistItem',)
    })
    // console.log(id)
}

export const updateWishlistItem = (id, product) => async (dispatch) =>
{
    const body = JSON.stringify({product})
    await axios.put('/wishlist/' + id, body, config).then((res)=>
    {
        dispatch({
            type: A.WISHLIST_UPDATE_ITEM,
            payload: res.data,
        })
        // localStorage.getItem('wishlistItem', JSON.stringify(res.data))
        dispatch(getWishlistItems())
    })
}
// export const saveShippingAddress = (data) => (dispatch) =>
// {
//     dispatch({
//         type:A.WISHLIST_SAVE_SHIPPING_ADDRESS,
//         payload: data,
//     })
//     localStorage.setItem('shippingAddress', JSON.stringify(data))
// }
//
// export const savePaymentMethod = (data)=> (dispatch)=>
// {
//     dispatch({
//         type:A.WISHLIST_PAYMENT,
//         payload: data,
//     })
//     localStorage.setItem('payment', JSON.stringify(data))
// }
