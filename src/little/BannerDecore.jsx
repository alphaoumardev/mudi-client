import {Link} from "react-router-dom";
import React from "react";

const BannerDecore = ()=>
{
    return(
        <div className="banner-section section-padding-bottom">
            <div className="container">
                <div className="row mb-n4">
                    <div className="col-lg-6 mb-4">
                        <div className="row mb-n4">
                            <div className="col-12 mb-4">
                                <div className="banner">
                                    {/* thumb-nail start */}
                                    <Link to="/home kits/decore" className="thumb-nail">
                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154163/1_ylakjp.jpg" alt="image_not_found" />
                                    </Link>
                                    <span className="label">Seating Chair</span>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="banner">
                                    {/* thumb-nail start */}
                                    <Link to="/home kits/decore" className="thumb-nail">
                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154166/3_b9tjul.jpg" alt="image_not_found" />
                                    </Link>
                                    <span className="label">Lighting</span>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="banner">
                                    {/* thumb-nail start */}
                                    <Link to="/home kits/decore" className="thumb-nail">
                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154164/2_mkkaxo.jpg" alt="image_not_found" />
                                    </Link>
                                    <span className="label">Tables</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="banner">
                            {/* thumb-nail start */}
                            <Link to="/home kits/decore" className="thumb-nail">
                                <img src="https://res.cloudinary.com/diallo/image/upload/v1647154169/4_kqxz4g.jpg" alt="image_not_found" />
                            </Link>
                            <span className="label">Home Decor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export  default BannerDecore
