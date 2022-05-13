import * as P from '../Types'
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
    }
}
export const getAllProductAction = (genre, type) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_ALL_PRODUCTS_REQUEST})
        if(type)
        {
           await axios.get(`/catename/${genre}/${type}`, config).then((res)=>
           {
               dispatch(
                   {
                       type:P.GET_ALL_PRODUCTS_SUCCESS,
                       payload: res.data
                   })
           })
        }
        else
        {

            await axios.get('/all/', config).then((res)=>
            {
                dispatch(
                    {
                        type:P.GET_ALL_PRODUCTS_SUCCESS,
                        payload: res.data,
                })
                // console.log(res.data)
            })
        }
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_ALL_PRODUCTS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getProductsBySubcatesAction = (genre, type) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_SUBCATES_REQUEST})
        if(type)
        {
            await axios.get(`/catename/${genre}/${type}`, config).then((res)=>
            {
                dispatch(
                    {
                        type: P.GET_SUBCATES_SUCCESS,
                        payload: res.data,
                    }
                )
            })
        }
        else
        {
            dispatch({type:P.GET_SUBCATES_REQUEST})
            await axios.get(`/catename/${genre}`, config).then((res)=>
            {
                dispatch(
                    {
                        type: P.GET_SUBCATES_SUCCESS,
                        payload: res.data,
                    }
                )
            })

        }
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_SUBCATES_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getProductByPageAction = (genre, type, page) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_BY_PAGES_REQUEST})
        if(type)
        {
            await axios.get(`/catename/${genre}/${type}`, config).then((res)=>
            {
                dispatch(
                    {
                        type: P.GET_BY_PAGES_SUCCESS,
                        payload: res.data,
                    }
                )
            })
        }
        else
        {
            await axios.get(`/products/?page=${page}`, config).then((res)=>
            {
                dispatch({
                    type: P.GET_BY_PAGES_SUCCESS,
                    payload: res.data.results,
                    numberOfPages: res.data.total_pages
                })
            })

        }
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_BY_PAGES_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getOneProduct = (id) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_ONE_PRODUCT_REQUEST})
        await axios.get('/one/' +id, config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_ONE_PRODUCT_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_ONE_PRODUCT_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getProductsByVariant = (id) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_BY_VARIANT_REQUEST})
        await axios.get('/byvariant/' +id, config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_BY_VARIANT_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_BY_VARIANT_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getImages = (id) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_IMAGES_REQUEST})
        await axios.get('/images/' +id, config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_IMAGES_SUCCESS,
                    payload: res.data
                })

        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_IMAGES_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getColors = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_COLORS_REQUEST})
        await axios.get('/colors/', config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_COLORS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_COLORS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getSizes = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_SIZES_REQUEST})
        await axios.get('/sizes/', config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_SIZES_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_SIZES_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getTags = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_TAGS_REQUEST})
        await axios.get('/tags/', config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_TAGS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_TAGS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getNewProducts = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_NEWPRODUCTS_REQUEST})
        await axios.get('/newproducts/', config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_NEWPRODUCTS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_NEWPRODUCTS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getOnsales = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_ONSALE_REQUEST})
        await axios.get('/onsale/', config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_ONSALE_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_ONSALE_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getSlides = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_SLIDERS_REQUEST})
        await axios.get('/sliders/', config).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_SLIDERS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_SLIDERS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}
