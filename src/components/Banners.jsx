import {Link} from "react-router-dom";

const Banners = ()=>
{
    return(
        <div>
            {/*/!*<!-- Banner section Start -->*!/*/}
            <section className="banner-section section-padding-bottom section-padding-top">
                <div className="container">
                    <div className="row mb-n4">
                        <div className="col-lg-8 mb-4">
                            <div className="banner">
                                {/*/!*<!-- thumb-nail start -->*!/*/}
                                <Link to="#" className="thumb-nail">
                                    <img src="https://res.cloudinary.com/diallo/image/upload/v1647154164/2_x9a7j3.jpg" alt="image_not_found" style={{width:960, height:565, objectFit:"cover"}}/>
                                </Link>
                                {/*/!*<!-- thumb-nail end -->*!/*/}
                                <div className="banner-content banner-position-top-left">
                                    <span className="banner-sub-title text-dark">Suit </span>
                                    <h3 className="banner-title text-danger" >For Sale</h3>
                                    <Link to="/shop" className="btn btn-outline-dark">Shop Now</Link>
                                </div>
                                {/* <!-- banner-content end -->*/}
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="banner">
                                {/* <!-- thumb-nail start -->*/}
                                <Link to="#" className="thumb-nail">
                                    <img src="https://res.cloudinary.com/diallo/image/upload/v1647154151/3_oc2jko.jpg" alt="image_not_found" style={{width:455, height:565, objectFit:"cover"}}/>
                                </Link>
                                {/*// <!-- thumb-nail end -->*/}
                                <div className="banner-content banner-position-bottom-left">
                                    <span className="banner-sub-title text-danger">Jeans </span>
                                    <h3 className="banner-title text-light-50">Uniform</h3>
                                    <Link to="/shop" className="btn btn-outline-dark">Shop Now</Link>
                                </div>
                                {/*// <!-- banner-content end -->*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Banner section End -->*/}
        </div>
    )
}
export default Banners
