import {Link} from "react-router-dom";
import React from "react";

const BannerTab2 = ()=>
{
    return(
        <div className="banner-section section-padding-bottom section-padding-top">
            <div className="container">
                <div className="row mb-n4">
                    <div className="col-lg-6 mb-4">
                        <div className="banner">
                            {/* thumb-nail start */}
                            <Link to="/home kits/living room" className="thumb-nail">
                                <img src="https://res.cloudinary.com/diallo/image/upload/v1647154130/banner6_vllxak.jpg" alt="image_not_found" />
                            </Link>
                            {/* thumb-nail end */}
                            <div className="banner-content home-style2 banner-position-top-center">
                                <span className="banner-sub-title">Accent Chair</span>
                                <h3 className="banner-title text-danger">Up To 50% Off</h3>
                                <Link to="/home kits/living room" className="btn btn-light">Shop Now</Link>
                            </div>
                            {/* banner-content end */}
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="banner">
                            {/* thumb-nail start */}
                            <Link to="/home kits/living room" className="thumb-nail">
                                <img src="https://res.cloudinary.com/diallo/image/upload/v1647154129/banner7_la2z49.jpg" alt="image_not_found" />
                            </Link>
                            {/* thumb-nail end */}
                            <div className="banner-content banner-position-top-center">
                                <span className="banner-sub-title text-danger">New Arrvials</span>
                                <h3 className="banner-title">Style &amp; Comfort</h3>
                                <Link to="/home kits/living room" className="btn btn-light">Shop Now</Link>
                            </div>
                            {/* banner-content end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerTab2
