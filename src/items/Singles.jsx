import React, {useEffect, useRef, useState} from "react";
import '../css/Navs.css'
import {Link} from "react-router-dom";
import StarRating from "react-star-rate";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../redux/Actions/orderAction";


const Singles = ({images, one, variant})=>
{
    const [currentImage, setCurrentImage] = useState(one?.image)
    const [selectedColor, setSelectedColor] = useState();
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')

    const dispatch = useDispatch()
    const {cartItems} = useSelector((state) =>state.cart)

    useEffect(()=>
    {
        if(cartItems)
        {
            // e.preventDefault()
            dispatch(createOrder(cartItems))
        }
    },[dispatch, cartItems])
    const handleChange = (index)=>
    {
        setSelectedColor(index)
        // setColor(index =>index?.target?.name)
        console.log(size,color)

    }
    const addItemToCart = (e)=>
    {
        e.preventDefault()
    }
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
                        <StarRating count={5} symbol="★" color={'#ffd700'} size="small"/>
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
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="facebook"><i className="bi bi-facebook" /></Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="twitter"><i className="bi bi-twitter" /></Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="pinterest"><i className="bi bi-pinterest" /></Link></li>
                                <li><Link to=" " data-toggle="tooltip" data-placement="top" title="Linkdin"><i className="bi bi-linkedin" /></Link></li>
                            </ul>
                        </div>
                        <form onSubmit={addItemToCart} >
                            <div className="single-product-component mt-15">
                                    <h6>Available Sizes</h6>
                                <select onChange={(e=>setSize(e.target.value))} required={true}  data-testid="size" className="size form-select  text-uppercase" >
                                    <option  value="default">Size</option>
                                    {variant?.map((item, index) =>
                                        <option   className='' key={index} value={item?.size?.size_name}>
                                            {item?.size?.size_name}
                                        </option>
                                    )}
                                </select>
                                <h6>Color</h6>
                                {/*<input type="checkbox"  style={{accentColor: one?.color_name}} className="yellow color-input color_style" onClick={(event => setCurrentImage(event.target.src))}/>*/}

                                {images?.map((item, index)=>
                                    <fieldset key={index} className="color-input color_style" style={{backgroundColor: item?.color_name?.color_name}}>
                                    {item?.color_name?.color_name &&
                                        <>

                                            <input
                                                name={item?.color_name?.color_name}
                                                type="radio"
                                                onClick={(event => setCurrentImage(event.target.src))}
                                                key={index}
                                                id={index}
                                                src={item?.image_url}
                                                className='yellow'
                                                value={index}
                                                // onInput={() =>setSelectedColor(index)}
                                                checked={selectedColor===index}
                                                onChange={handleChange}
                                                // onChange={(e) =>setColor(e.target.name)}

                                                style={{accentColor: item?.color_name?.color_name}}
                                            />

                                        </>
                                    }
                                    </fieldset>
                                )}
                            </div>

                            <div className="btn-groups">
                                <button type="submit" className="add-cart-btn" disabled={one?.stock === 0}>add to cart</button>
                                <button type="submit" className="buy-now-btn" disabled={one?.stock === 0}>buy now</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default Singles
