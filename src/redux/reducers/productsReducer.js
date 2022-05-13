import * as P from '../Types'

export const getAllProductsReducer = (state = {products: [],  isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_ALL_PRODUCTS_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_ALL_PRODUCTS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                products: action.payload,
            }
        case P.GET_ALL_PRODUCTS_FAIL:
            return{
                ...state,
                isLoading: false,
                products: [],
            }
        default:
            return state
    }
}

export const getProductsByPagegReducer = (state = {article: [], num_pages:10, isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_BY_PAGES_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_BY_PAGES_SUCCESS:
            return{
                isLoading: false,
                article: action.payload,
                num_pages: action.numberOfPages
            }
        case P.GET_BY_PAGES_FAIL:
            return{
                ...state,
                isLoading: false,
                article: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getProductBySubcategoriesReducer = (state = {subcates: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_SUBCATES_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_SUBCATES_SUCCESS:
            return{
                isLoading: false,
                subcates: action.payload,
            }
        case P.GET_SUBCATES_FAIL:
            return{
                // ...state,
                isLoading: false,
                subcates: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getOneProductReducer = (state = {one: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_ONE_PRODUCT_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_ONE_PRODUCT_SUCCESS:
            return{
                one: action.payload,
            }
        case P.GET_ONE_PRODUCT_FAIL:
            return{
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}

export const getproductByVariantReducer = (state = {variant: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_BY_VARIANT_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_BY_VARIANT_SUCCESS:
            return{
                isLoading: false,
                variant: action.payload,
            }
        case P.GET_BY_VARIANT_FAIL:
            return{
                ...state,
                isLoading: false,
                variant: [],
                error: action.payload,
            }
        default:
            return state
    }
}

export const getImagesReducer = (state = {images: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_IMAGES_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_IMAGES_SUCCESS:
            return{
                images: action.payload,
            }
        case P.GET_IMAGES_FAIL:
            return{
                ...state,
                isLoading: false,
                images: {},
            }
        default:
            return state
    }
}

export const getProductsByCatNameReducer = (state = {products: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_BY_CATNAME_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_BY_CATNAME_SUCCESS:
            return{
                isLoading: false,
                products: action.payload,
            }
        case P.GET_BY_CATNAME_FAIL:
            return{
                ...state,
                isLoading: false,
                products: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getColorsReducer = (state = {colors: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_COLORS_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_COLORS_SUCCESS:
            return{
                isLoading: false,
                colors: action.payload,
            }
        case P.GET_COLORS_FAIL:
            return{
                ...state,
                isLoading: false,
                colors: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getSizesReducer = (state = {sizes: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_SIZES_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_SIZES_SUCCESS:
            return{
                isLoading: false,
                sizes: action.payload,
            }
        case P.GET_SIZES_FAIL:
            return{
                ...state,
                isLoading: false,
                sizes: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getTagsReducer = (state = {tags: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_TAGS_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_TAGS_SUCCESS:
            return{
                isLoading: false,
                tags: action.payload,
            }
        case P.GET_TAGS_FAIL:
            return{
                ...state,
                isLoading: false,
                tags: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getNewProductsReducer = (state = {newproducts: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_NEWPRODUCTS_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_NEWPRODUCTS_SUCCESS:
            return{
                isLoading: false,
                newproducts: action.payload,
            }
        case P.GET_NEWPRODUCTS_FAIL:
            return{
                ...state,
                isLoading: false,
                newproducts: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getOnsaleProductsReducer = (state = {onsale: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_ONSALE_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_ONSALE_SUCCESS:
            return{
                isLoading: false,
                onsale: action.payload,
            }
        case P.GET_ONSALE_FAIL:
            return{
                ...state,
                isLoading: false,
                onsale: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const getSlidersReducer = (state = {sliders: [], isLoading:false,}, action)=>
{
    switch (action.type)
    {
        case P.GET_SLIDERS_REQUEST:
            return{
                isLoading: true,
            }

        case P.GET_SLIDERS_SUCCESS:
            return{
                isLoading: false,
                sliders: action.payload,
            }
        case P.GET_SLIDERS_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
