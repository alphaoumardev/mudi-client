import * as P from '../Actions/Types'

export const productAllReducer = (state = {product: []}, action)=>
{
    switch (action.type)
    {
        case P.CART_ADD_ITEM:
            const item = action.payload

        case P.CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(index => index.product !== action.payload)
            }
        case P.CART_SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress: action.payload
            }
        case P.CART_PAYMENT:
            return{
                ...state,
                payment:action.payload
            }
        case P.CART_CLEAR_ITEMS:
            return{
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}

