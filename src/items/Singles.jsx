import React, {useState} from "react";
import '../css/Navs.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/Actions/cartAction";

import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Rating} from '@mui/material/';
import {addToWishlist} from "../redux/Actions/wishlistAction";

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
const Singles = ({images, one, variant, count})=>
{
    let {id} = useParams()
    const [currentImage, setCurrentImage] = useState(one?.image)
    const [selectedColor, setSelectedColor] = useState(0);

    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [quantity, setQuantity] = useState(1)

    const [rating, setRating] = useState(3);
    const [hoverRating, setHoverRating] = useState(-1);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) =>state.authReducer)
    const addItemToCart = (e)=>
    {
        e.preventDefault()
        dispatch(addToCart(id, color, size, quantity, user))
        navigate('/cart')
    }
    return(
    <div>
        <div className="">
            <div className="pro">
                    <div className="pro-left">
                        <div className="cover-img">
                            {currentImage?<img src={currentImage} alt=""/>:<img src={one?.image} alt="watch"/>}
                        </div>
                        <div className="hover-container">
                            <div>
                                <img className="hover" src={one?.image} onClick={(event => setCurrentImage(event.target.src))} alt="watch"/>
                                {images?.map((item, index) =>
                                    <img className="hover"
                                       key={index} src={item?.image_url} alt=""
                                       onClick={(event)=>
                                        {
                                           setCurrentImage(event.target.src)
                                           setSelectedColor(index)
                                        } }
                                />)}
                            </div>
                        </div>
                    </div>
                    <div className="pro-right">

                        <h2>{one?.name}
                        </h2>
                        <div className="single-product-price">${one?.price}</div>
                        <div className="d-flex align-items-center text-capitalize ">
                            {count > 0 &&<>
                            <span>({count}) </span>
                                <StyledRating
                                    name="customized-color"
                                    value={4}
                                    size={'large'}
                                    sx={{fontSize: 16, paddingRight: 2,}}
                                    // onChange={(event, newRating) => {setRating(newRating);}}
                                    // onChangeActive={(event, newRating) => {setHoverRating(newRating);}}
                                    precision={1}
                                    icon={<FavoriteIcon fontSize="small"/>}
                                    emptyIcon={<FavoriteBorderIcon fontSize="small"/>}
                                />
                            {rating && (
                                <span className={txt[hoverRating!== -1 ? hoverRating : rating]}>{labels[hoverRating !== -1 ? hoverRating : rating]}</span>
                                )}</>}

                        </div>
                        <p className="product-description">{one?.description}</p>
                        <div className="single-product-action mt-35">
                            <ul>
                                <li><Link to="/wishlist" onClick={()=>dispatch(addToWishlist(one?.id, user))}><i className="bi bi-heart" /> add to wishlist</Link></li>
                                {/*<li><Link to="/single"><i className="bi bi-cpu-fill" /> add to compare</Link></li>*/}
                            </ul>
                        </div>
                        {/*<span>Sku: <strong>{one?.sku?.slice(0,12)}</strong></span>*/}
                        <div className="single-product-category">
                            <ul>
                                <li className="mb-0"><Link to="/" className="title">Categories: </Link></li>
                                <li className="mb-0"><Link to="/single">Chair &amp; Table</Link></li>
                                <li className="mb-0"><Link to="/single">Chairs</Link></li>
                                <li className="mb-0"><Link to="/single">Handbeg</Link></li>
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
                                <div className="d-flex ">
                                    <select onChange={(e=>setSize(e.target.value))} required={true}  data-testid="size" className="size   text-uppercase " >
                                        <option  value="default">Size</option>
                                        {variant?.map((item, index) =>
                                            <option   className='' key={index} value={item?.size?.size_name}>
                                                {item?.size?.size_name}
                                            </option>
                                        )}
                                    </select>
                                    <input className="rounded-3 d-flex justify-content-center size" type="number" defaultValue={1} min={1} style={{marginLeft: 20, width: 50}} onChange={(e)=>setQuantity(e.target.value)}/>
                                </div>
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

                            <div className="btn-groups">
                                {user?<>
                                    <button type="submit" className="add-cart-btn"
                                            disabled={id === null || size ==='' || color === '' || quantity>one.stock }>add to cart</button>
                                    <button type="submit" className="buy-now-btn " disabled={true}>buy now</button>
                                    </>:<>
                                    <button type="submit" className="add-cart-btn" onClick={()=>navigate("/login")}>add to cart</button>
                                    <button type="submit" className="buy-now-btn " onClick={()=>navigate("/login")}>buy now</button>
                                    </>
                                }
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default Singles
