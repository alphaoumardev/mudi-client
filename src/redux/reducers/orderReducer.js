import * as O from '../Types'
import * as T from "../Types";


export const create_addressReducer = (state={address:[]}, action)=>
{
    switch (action.type)
    {
        case O.ADDRESS_ADD_REQUEST:
            return{loading:true}

        case O.ADDRESS_SUCCESS:
            return{
                loading: false,
                address: action.payload
            }
        case O.ADDRESS_FAIL:
            return{
                loading: false,
                error:action.payload
            }
        default:
            return state
    }
}
export const getShippingAddressReducer = (state={address:[]}, action)=>
{
    switch (action.type)
    {
        case O.ADDRESS_GET_REQUEST:
            return{loading:true}

        case O.ADDRESS_GET_SUCCESS:
            return{
                loading: false,
                address: action.payload
            }
        case O.ADDRESS_GET_FAIL:
            return{
                loading: false,
                error:action.payload,
                address: []
            }
        default:
            return state
    }
}

export const orderCreateReducer = (state={}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_CREATE_REQUEST:
            return{
                ...state,
                loading:true
            }

        case O.ORDER_CREATE_SUCCESS:
            return{
                loading: false,
                order: action.payload
            }
        case O.ORDER_CREATE_FAIL:
            return{
                loading: false,
                error:action.payload
            }
        case O.ORDER_CREATE_RESET:
            return{
                order: []
            }

        default:
            return state
    }
}

export const getMyorderReducer = (state={orderItem: []}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_MY_REQUEST:
            return{
                ...state,
                loading:true
            }

        case O.ORDER_MY_SUCCESS:
            return{
                loading: false,
                orderItem: action.payload
            }
        case O.ORDER_MY_FAIL:
            return{
                loading: false,
                orderItem:[],
                error:action.payload
            }

        default:
            return state
    }
}
export const orderItemReducer = (state = {orderItem:[], order_total:0, order_count: 0}, action)=>
{
    switch (action.type)
    {
        case T.ORDER_ITEM_ADD_SUCCESS:
            return{
                ...state,
                orderItem: action.payload
            }

        case T.ORDER_ITEM_SUCCESS:
            return{
                ...state,
                orderItem: action.payload,
                order_total: action.order_total,
                order_count: action.order_count,
            }

        case T.CART_CLEAR_ITEMS:
            return{
                ...state,
                orderItem: []
            }
        default:
            return state
    }
}
