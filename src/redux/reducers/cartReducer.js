import * as T from '../Actions/Types'

export const cartReducer = (state = {cartItems:[], shippingAddress:{}}, action)=>
{
    switch (action.type)
    {
        case T.CART_ADD_ITEM:
            const item = action.payload
            const exitItem = state.cartItems.find(index => index.product === item.product)
            if(exitItem)
            {
                return{
                    ...state,
                    cartItems: state.cartItems.map(index =>index.product===exitItem.product ? item : index)
                }
            }else
            {
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case T.CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(index => index.product !== action.payload)
            }
        case T.CART_SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress: action.payload
            }
        case T.CART_PAYMENT:
            return{
                ...state,
                payment:action.payload
            }
        case T.CART_CLEAR_ITEMS:
            return{
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}

