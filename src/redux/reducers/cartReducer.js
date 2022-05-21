import * as T from '../Types'

export const cartReducer = (state =
                                {cartItem:[], order_total:0, cart_count: 0}, action)=>
{
    switch (action.type)
    {

        case T.CART_ADD_ITEM:
            // const newItem = action.payload
            // const exitItem = state.cartItem.find(index=> index.product === newItem.product)
            // if(exitItem)
            // {
            return{
                ...state,
                cartItem: action.payload
                        // state.cartItem.map(index =>index.product===exitItem.product ? newItem : index)
                }
            // }else
            // {
            //     return{
            //         ...state,
            //         cartItem: [...state.cartItem, newItem]
            //     }
            // }
        case T.CART_ADD_FAIL:
            return{
                ...state,
                cartItem: []
            }
        case T.CART_GET_ITEMS:
            return{
                ...state,
                cartItem: action.payload,
                order_total: action.order_total,
                cart_count: action.cart_count,
            }

        case T.CART_UPDATE_ITEM:
            return{
                ...state,
                cartItem: action.payload
            }
        case T.CART_REMOVE_ITEM:
            return{
                ...state,
                cartItem: action.payload
                    // state.cartItem.filter(index => index.product !== action.payload)
            }
        case T.CART_CLEAR_ITEMS:
            return{
                ...state,
                cartItem: []
            }
        default:
            return state
    }
}

