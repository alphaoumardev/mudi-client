import React, {useEffect, useState} from "react";
import '../css/Navs.css'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../redux/Actions/orderAction";
import {addToCart} from "../redux/Actions/cartAction";

import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Rating} from '@mui/material/';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {color: '#f44d57',},
    '& .MuiRating-iconHover': {color: '#bf020c',}});


const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Not Bad',
    4: 'Good',
    5: 'Excellent',
};
const txt ={
    1: 'text-danger',
    2: 'text-warning',
    3: 'text-primary',
    4: 'text-info',
    5: 'text-success',
};
const Singles = ({images, one, variant})=>
{
    const [currentImage, setCurrentImage] = useState(one?.image)
    const [selectedColor, setSelectedColor] = useState(0);
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')

    const [rating, setRating] = useState(3);
    const [hoverRating, setHoverRating] = useState(-1);

    let {id} = useParams()
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state) =>state.cartReducer)

    useEffect(()=>
    {
        if(cartItems)
        {
            dispatch(createOrder(cartItems))
        }
    },[dispatch, cartItems])

    const addItemToCart = (e)=>
    {
        e.preventDefault()
        dispatch(addToCart(id, color, size))
        // console.log(color, size, cartItems)
    }
        console.log(rating)
    return(
    <div>
        <div className="">
            <div className="pro">
                    <div className="pro-left">
                        <div className="cover-img">
                            {currentImage?<img  src={currentImage} alt=""/>:<img src={one?.image} alt="watch"/>}
                        </div>
                        <div className="hover-container">
                            <div>
                                <img className="hover" src={one?.image} onClick={(event => setCurrentImage(event.target.src))} alt="watch"/>
                                {images?.map((item, index) => <img className="hover"  onClick={(event => setCurrentImage(event.target.src))} key={index} src={item?.image_url} alt=""/>)}
                            </div>
                        </div>
                    </div>
                    <div className="pro-right">

                        <h2>{one?.name}
                            <div className="btn-groups">
                                {/*<button type="submit" className="add-cart-btn"><i className="fas fa-shopping-cart" />add to cart</button>*/}
                                {/*<button type="submit" className="buy-now-btn"><i className="fas fa-wallet" />buy now</button>*/}
                            </div>
                        </h2>
                        {/*<span className="product-name"></span>*/}
                        <div className="single-product-price">${one?.price}</div>
                        {/*<HoverRating/>*/}

                        <div className="d-flex align-items-center text-capitalize ">
                            <span>(26) </span>
                            <StyledRating
                                name="customized-color"
                                value={rating}
                                size={'large'}
                                sx={{fontSize:16, paddingRight:2, }}
                                onChange={(event, newValue) => {setRating(newValue);}}
                                onChangeActive={(event, newHover) => {setHoverRating(newHover);}}
                                precision={1}
                                icon={<FavoriteIcon fontSize="small" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="small" />}
                            />
                            {rating && (
                                <span className={txt[hoverRating!== -1 ? hoverRating : rating]}>{labels[hoverRating !== -1 ? hoverRating : rating]}</span>
                            )}
                        </div>

                        <p className="product-description">{one?.description}</p>
                        <div className="single-product-action mt-35">
                            <ul>
                                <li><Link to="/wishlist"><i className="bi bi-heart" /> add to wishlist</Link></li>
                                <li><Link to="/single"><i className="bi bi-cpu-fill" /> add to compare</Link></li>
                            </ul>
                        </div>
                        <span>Sku: <strong>{one?.sku.slice(1,12)}</strong></span>
                        <div className="single-product-category">
                            <ul>
                                <li className="mb-0"><Link to="/" className="title">Categories: </Link></li>
                                <li className="mb-0"><Link to="single">Chair &amp; Table</Link></li>
                                <li className="mb-0"><Link to="single">Chairs</Link></li>
                                <li className="mb-0"><Link to="single">Handbeg</Link></li>
                            </ul>
                        </div>
                        <div className="share-product mt-20">
                            <ul>
                                <li><Link to=" " className="title">Share this product</Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="facebook"><i className="bi bi-facebook text-primary" /></Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="twitter"><i className="bi bi-twitter" /></Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="pinterest"><i className="bi bi-pinterest text-danger" /></Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="Linkdin"><i className="bi bi-linkedin" /></Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="Instagram"><i className="bi bi-instagram text-danger" /></Link></li>

                            </ul>
                        </div>
                        <form onSubmit={addItemToCart} >
                            <div className="single-product-component mt-15 ">
                                    <h6>Available Sizes</h6>
                                <select onChange={(e=>setSize(e.target.value))} required={true}  data-testid="size" className="size form-select  text-uppercase" >
                                    <option  value="default">Size</option>
                                    {variant?.map((item, index) =>
                                        <option   className='' key={index} value={item?.size?.size_name}>
                                            {item?.size?.size_name}
                                        </option>
                                    )}
                                </select>
                                <h6>Colors</h6>
                                {/*<input type="radio"  style={{accentColor: one?.color_name}} className="yellow color-input color_style" onClick={(event => setCurrentImage(event.target.src))}/>*/}

                                {images?.map((item, index)=>
                                    <fieldset key={index} className="color-input color_style" style={{backgroundColor: item?.color_name?.color_name}}>
                                    {item?.color_name?.color_name &&
                                        <>
                                            <input
                                                className='yellow'
                                                type="radio"
                                                key={index}
                                                id={index}
                                                value={index}
                                                src={item?.image_url}
                                                name={item?.color_name?.color_name}
                                                onClick={(event => setCurrentImage(event.target.src))}
                                                checked={selectedColor===index}
                                                style={{accentColor: item?.color_name?.color_name}}
                                                onChange={(e)=>
                                                {
                                                    setSelectedColor(index)
                                                    setColor(e.target.name)
                                                }}
                                            />
                                        </>
                                    }
                                    </fieldset>
                                )}
                            </div>

                            <div className="btn-groups  ">
                                <button type="submit" className="add-cart-btn" disabled={one?.stock === 0}>add to cart</button>
                                <button type="submit" className="buy-now-btn " disabled={one?.stock === 0}>buy now</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default Singles
