import React, {useState} from "react";
import '../css/Navs.css'
import {Link,} from "react-router-dom";
import StarRating from "react-star-rate";
const Modal = ({images, one, variant})=>
{
    const [currentImage, setCurrentImage] = useState(one?.image)

    return(
        <div>
            <div className="">
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
                            <div className="single-product-action mt-35">
                                <ul>
                                    <li><Link to="/wishlist"><i className="bi bi-heart" /> add to wishlist</Link></li>
                                    <li><Link to="single"><i className="bi bi-cpu-fill" /> add to compare</Link></li>
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
                                    <li><Link to="/" className="title">Share this product</Link></li>
                                    <li><Link to="/" data-toggle="tooltip" data-placement="top" title="facebook"><i className="bi bi-facebook" /></Link></li>
                                    <li><Link to="/" data-toggle="tooltip" data-placement="top" title="twitter"><i className="bi bi-twitter" /></Link></li>
                                    <li><Link to="/" data-toggle="tooltip" data-placement="top" title="pinterest"><i className="bi bi-pinterest" /></Link></li>
                                    <li><Link to="/" data-toggle="tooltip" data-placement="top" title="Linkdin"><i className="bi bi-linkedin" /></Link></li>
                                </ul>
                            </div>
                            <form action="" method="POST">
                                <div className="single-product-component mt-15">
                                    <h6>Size</h6>
                                    {variant?.map((item, index) =>
                                        <div key={index} className="size d-inline">
                                        {item?.size?.size_name &&
                                            <>
                                            <label htmlFor="l">{item?.size?.size_name}</label>
                                            <input type="radio" className="d-none" id="l"/>
                                            </>
                                        }
                                        </div>
                                    )}
                                </div>
                                <div className="single-product-component">
                                    <h6>Color</h6>
                                    {variant?.map((item, index)=>(
                                        <div key={index} className="color-input">
                                        {item?.color?.color_name &&
                                            <>
                                            <label htmlFor="yellow" style={{backgroundColor: item?.color?.color_name}} />
                                            <input type="radio" className="d-none" id="yellow" />
                                            </>
                                        }
                                        </div>
                                    ))}
                                </div>
                                <div className="btn-groups">
                                    <button type="submit" className="add-cart-btn"><i className="fas fa-shopping-cart" />add to cart</button>
                                    <button type="submit" className="buy-now-btn"><i className="fas fa-wallet" />buy now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal

