import * as O from '../Actions/Types'

export const orderCreateReducer = (state={}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_CREATE_REQUEST:
            return{loading:true}

        case O.ORDER_CREATE_SUCCESS:
            return{
                loading: false,
                success: true,
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

export const orderDetailsReducer =(state={loading: true, orderItems: [], shippingAddress: {}}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_DETAILS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case O.ORDER_DETAILS_SUCCESS:
            return{
                loading: false,
                success: true,
                order: action.payload
            }
        case O.ORDER_DETAILS_FAIL:
            return{
                loading: false,
                error:action.payload
            }

        default:
            return state
    }
}

export const orderPayReducer = (state={}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_PAY_REQUEST:
            return{loading:true}

        case O.ORDER_PAY_SUCCESS:
            return{
                loading: false,
                success: true,
            }
        case O.ORDER_PAY_FAIL:
            return{
                loading: false,
                error:action.payload
            }
        case O.ORDER_PAY_RESET:
            return{}

        default:
            return state
    }
}

export const orderDeliverReducer = (state={}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_DELIVER_REQUEST:
            return{loading:true}

        case O.ORDER_DELIVER_SUCCESS:
            return{
                loading: false,
                success: true,
            }
        case O.ORDER_DELIVER_FAIL:
            return{
                loading: false,
                error:action.payload
            }
        case O.ORDER_DELIVER_RESET:
            return{}

        default:
            return state
    }
}

export const orderMineReducer = (state={orders: []}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_MINE_REQUEST:
            return{loading:true}

        case O.ORDER_MINE_SUCCESS:
            return{
                loading: false,
                success: true,
                orders: action.payload
            }
        case O.ORDER_MINE_FAIL:
            return{
                loading: false,
                error:action.payload
            }
        case O.ORDER_MINE_RESET:
            return{
                orders: []
            }

        default:
            return state
    }
}

export const orderListReducer = (state={orders: []}, action)=>
{
    switch (action.type)
    {
        case O.ORDER_LIST_REQUEST:
            return{loading:true}

        case O.ORDER_LIST_SUCCESS:
            return{
                loading: false,
                success: true,
                orders: action.payload
            }
        case O.ORDER_LIST_FAIL:
            return{
                loading: false,
                error:action.payload
            }

        default:
            return state
    }
}
