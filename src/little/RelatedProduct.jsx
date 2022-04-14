import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import axios from "axios";
import Modal from "../items/Modal";
const RelatedProduct = ()=>
{
    const [id, setId] = useState(4)
    const [one, setOne] = useState();
    const [variant, setVariant] = useState()
    const [images, setImages] = useState()
    const [onsale, setOnsale] = useState()

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
        const getOnsale = async ()=>
        {
            const res = await axios.get("/onsale")
            const data = res.data
            setOnsale(data)
        }
        getImages(id).then(() =>{} )
        getOne(id).then(()=>{})
        getVariant(id).then(()=>{})
        getOnsale().then(()=>{})

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
            slidesToShow: 6,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 5000,
            accessibility:false,
            easing:'linear',
            focusOnSelect:true,
            cssEase: "linear",
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
        };
    return(
        <div>
            <div className="generic-title text-center pt-4">
                <h2 className="mb-20">Related Product</h2>
            </div>
                <div className="row pr featured-product swiper-arrow arrow-position-center position-relative">
            <Slider {...settings}>
                {onsale?.map((item, index)=>
                    <div key={index} className="col-12 ">
                        <div className="product-box">
                            <div className="product-box-wrapper">
                                <div className="product-img">
                                    <img src={item?.image} style={{width:215, height:255, objectFit:"contain"}} alt="" />
                                    <a href={`/single/${item?.id}`} className="d-block">
                                        <div className="second-img">
                                            <img src={item?.image_hover} alt="" style={{width:215, height:255, objectFit:"contain"}} />
                                        </div></a>
                                    <Link to={item?.id} id="product-popup-1" className="product-img-link quick-view-1">
                                        <p data-bs-toggle="modal" datatype={item?.id} onClick={()=>setId(item?.id)} data-bs-target="#related-modal">Quick  View</p>
                                    </Link>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-desc-top">
                                        <div className="categories">
                                            <a href="/shop" className="product-category"><span>Woman</span></a>
                                        </div>
                                        <a href="wishlist.html" className="wishlist float-right"><span><i className="fal fa-heart" /></span></a>
                                    </div>
                                    <a href={`/single/${item?.id}`} className="product-title">Light green crewneck sweatshir</a>
                                    <div className="price-switcher">
                                        <span className="price switcher-item">$58.00</span>
                                        <a href="cart.html" className="add-cart text-capitalize switcher-item">+add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
                </div>
            {/* Modal */}
            <div className="modal fade" id="related-modal">
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
export default RelatedProduct
