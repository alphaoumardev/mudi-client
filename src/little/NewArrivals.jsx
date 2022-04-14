import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import axios from "axios";
import Modal from "../items/Modal";
const NewArrivals = ()=>
{
    const [newproduct, setNewproduct] = useState([])
    //For the product modal
    const [id, setId] = useState(7)
    const [one, setOne] = useState();
    const [variant, setVariant] = useState()
    const [images, setImages] = useState()
    useEffect(()=>
    {
        const getOne = async ()=>
        {
            const res = await axios.get(`/one/`+id)
            setOne(res.data)
        }
        const getVariant = async ()=>
        {
            const res = await axios.get(`/byvariant/`+id)
            setVariant(res.data)
            // console.log(res.data)
        }
        const getImages = async ()=>
        {
            await axios.get(`/images/`+id).then((res)=>{setImages(res.data);})
        }
        const getNewProducts = async ()=>
        {
            const res = await axios.get("/newproducts")
            const data = res.data
            setNewproduct(data)
        }
        getImages(id).then(() =>{} )
        getOne(id).then(()=>{})
        getVariant(id).then(()=>{})
        getNewProducts().then(()=>{})

    },[id])

    function NextArrow(props)
    {
        const { className, onClick } = props;
        return (<div className="swiper-button-next" onClick={onClick}>
            <i className="bi bi-caret-right-fill"> </i>
        </div> );
    }
    function PrevArrow(props)
    {
        const {className, onClick } = props;
        return (<div className="swiper-button-prev" onClick={onClick}>
            <i className="bi bi-caret-left-fill"> </i>
        </div> );
    }
    const settings =
        {
            className: "center",
            infinite: true,
            slidesToShow: 4,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 5000,
            easing:'linear',
            focusOnSelect:true,
            cssEase: "linear",
            centerMode: true,
            centerPadding: "60px",
            rows: 2,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
        };

    return(
        <div>
            <div className="product-tab-section section-padding-bottom">
                <div className="container">
                    <div className="row">
                        {/* tabs liks start */}
                        <div className="col-12">
                            <ul className="nav nav-pills product-tab-nav" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-arrivals">New Arrivals</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-seller">Best Sellers</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-onsale">On Sale</button>
                                </li>
                            </ul>
                        </div>
                        {/* tabs liks end */}

                    </div>
                </div>
            </div>

            <div className="row pr">
                <Slider {...settings}>
                    {newproduct?.map((items, index)=>
                        <div key={index} className="col-12">
                            <div className="product-box">
                                <div className="product-box-wrapper">
                                    <div className="product-img">
                                        <img src={items?.image} style={{width:415, height:490, objectFit:"contain"}} alt="" />
                                        <a href={`/single/${items?.id}`} className="d-block">
                                            <div className="second-img">
                                                <img src={items?.image_hover} alt="" style={{width:415, height:490, objectFit:"contain"}} />
                                            </div></a>
                                        <Link to={items?.id} id="product-popup-1" className="product-img-link quick-view-1">
                                            <p data-bs-toggle="modal" datatype={items?.id} onClick={()=>setId(items?.id)} data-bs-target="#newproduct-modal">Quick  View</p>
                                        </Link>
                                    </div>
                                    <div className="product-desc ">
                                        <div className="product-desc-top">
                                            <div className="categories">
                                                <a href="/shop" className="product-category"><span>{items?.category?.type?.type_name}</span></a>
                                            </div>
                                            <a href="/wishlist" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                        </div>
                                        <a href={`/single/${items?.id}`} className="product-title">{items?.name}</a>
                                        <div className="price-switcher">
                                            <span className="price switcher-item">${items?.price}</span>
                                            <a href="/cart" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>

            {/* Modal */}
            <div className="modal fade" id="newproduct-modal">
                <div className="modal-dialog modal-dialog-centered product-modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        <div className="d-flex align-items-center justify-content-center" style={{ marginLeft:-100, marginTop:-50}}>
                            <Modal images={images} variant={variant} one={one} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrivals
