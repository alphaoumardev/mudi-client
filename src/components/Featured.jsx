import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import axios from "axios";
import Modal from "../items/Modal";

const Featured = () =>
{
  const [onsale, setOnsale] = useState([])
  //For the product modal
  const [id, setId] = useState(6)
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
    const getOnsales = async () =>
    {
      const res = await axios.get("/onsale")
      const data = res.data
      setOnsale(data)
    }
    getImages(id).then(() =>{} )
    getOne(id).then(()=>{})
    getVariant(id).then(()=>{})
    getOnsales().then(()=>{})

  },[id])

  function NextArrow(ne)
  {
    const { className,onClick } = ne;
    return (<div className="swiper-button-next" onClick={onClick}>
      <i className="bi bi-chevron-right"> </i>
    </div> );
  }
  function PrevArrow(ne)
  {
    const {className, onClick } = ne;
    return (<div className="swiper-button-prev" onClick={onClick}>
      <i className="bi bi-chevron-left"> </i>
    </div> );
  }
  const settings =
  {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 6000,
    accessibility:true,
    easing:'linear',
    focusOnSelect:true,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  return (
   <div>
       {/*<h1>You May like</h1>*/}
  {/* featured product start */}
  <div className="featured-product-section section-padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="featured-product swiper-arrow arrow-position-center position-relative">
              <Slider {...settings}>
                {onsale?.map((item, index)=>
                    <div key={index}>
                      <div  className="swiper-slide">
                        <div  className="product-list">
                          <div  className="product-card">
                            <Link to={`/single/${item?.id}`} className="product-thumb">
                              <span className="onsale bg-warning">{item?.onsale}</span>
                              <img src={item?.image} alt="image_not_found" style={{width:250, height:300, objectFit:"contain"}}/>
                            </Link>
                            {/* thumb end */}
                            <div className="product-content">
                              <h4><Link to="shop-grid-left-sidebar.html" className="product-title">{item?.name}</Link></h4>
                              <div className="product-group">
                                <h5 className="product-price"><span className="new-price">{item?.price}</span></h5>
                                <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                              </div>
                            </div>
                            {/* actions  */}
                            <ul className="actions actions-verticale">
                              <li className="action whish-list">
                                <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                              </li>
                              <li className="action quick-view" >
                                <button data-bs-toggle="modal" onClick={()=>setId(item?.id)} data-bs-target="#featured-modal"><i className="bi bi-eye" /></button>
                              </li>
                              <li className="action compare">
                                <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                )}
                </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* featured product end */}

  <div>
  {/* Modal */}
  <div className="modal fade" id="featured-modal">
    <div className="modal-dialog modal-dialog-centered product-modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" />
        <div className="d-flex align-items-center justify-content-center" style={{ marginLeft:-100, marginTop:-50}}>
          <Modal images={images} variant={variant} one={one}/>
        </div>
      </div>
    </div>
  </div>

  {/* Modal */}
  <div className="modal fade" id="product-modal-compare">
    <div className="modal-dialog modal-dialog-centered compare-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> <i className="ion-checkmark" /> Product added to compare.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="product-modal-wishlist">
    <div className="modal-dialog modal-dialog-centered wishlist-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> You must be logged in to manage your wishlist.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="addto-cart-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-dark border-bottom-0 justify-content-center">
          <span className="ion-android-done me-5" />
          <h4 className="modal-title text-center">Product successfully added to your shopping cart</h4>
          <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close">×</button>
        </div>
        <div className="modal-body p-5">
          <div className="row align-items-center align-items-lg-start">
            <div className="col-lg-5">
              <div className="row align-items-center align-items-lg-start">
                <div className="col-md-6">
                  <img className="product-image" src="../assets/images/products/product1.jpg" alt="images_not_found" />
                </div>
                <div className="col-md-6">
                  <h6 className="product-name">Snacking Essentials Walnuts</h6>
                  <ul className="quntity-list">
                    <li>€23.06</li>
                    <li>Color: White</li>
                    <li>Quantity:1</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cart-content">
                <p className="title">There are 3 items in your cart.</p>
                <p><span>Total products:</span>€23.06</p>
                <p><span>Total shipping:</span>Free</p>
                <p><span>Taxes:</span> €0.00</p>
                <p><span>Total:</span> €23.06 (tax excl.)</p>
                <div className="cart-content-btn">
                  <button className="btn btn-sm btn-dark me-1 mt-3 mt-sm-0" data-bs-dismiss="modal">Continue
                    shopping</button>
                  <button className="btn btn-sm btn-dark mt-3 mt-sm-0">Proceed to
                    checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>

</div>

    );
}

export default Featured;

