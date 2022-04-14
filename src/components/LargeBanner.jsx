import {Link} from "react-router-dom";

const LargeBanner =()=>
{
    return(
        <div>
            {/* category section start */}
            <section className="category mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="row">
                                        <div className="col-12 mb-27">
                                            <div className="category-box">
                                                <div className="category-wrapper">
                                                    <div className="category-img">
                                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154170/3_w7bdri.jpg" style={{width:355, height:335, objectFit:"cover"}} alt="" />
                                                    </div>
                                                    <div className="category-content">
                                                        <Link to="/home kits/bedroom" className="title">Bedroom</Link>
                                                        <p className="category-item">(<span>20</span> items)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="category-box">
                                                <div className="category-wrapper">
                                                    <div className="category-img">
                                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154169/4_kqxz4g.jpg" className="w-100" style={{width:355, height:327, objectFit:"contain"}} alt="" />
                                                    </div>
                                                    <div className="category-content">
                                                        <Link to="/home kits/decore" className="title">Decore</Link>
                                                        <p className="category-item">(<span>11</span> items)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 category-right">
                                    <div className="category-box">
                                        <div className="category-wrapper">
                                            <div className="category-img">
                                                <img src="https://res.cloudinary.com/diallo/image/upload/v1647154139/6_ov2dwa.jpg" className="w-100" style={{width:355, height:685, objectFit:"cover"}} alt="" />
                                            </div>
                                            <div className="category-content">
                                                <Link to="/home kits/bathroom" className="title">Bathroom</Link>
                                                <p className="category-item">(<span>17</span> items)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 left-category">
                            <div className="category-box">
                                <div className="category-wrapper">
                                    <div className="category-img">
                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154135/3_po467t.jpg" className="cate-clothing" alt=""  style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="category-content">
                                        <Link to="/home kits/living room" className="title">Living Room</Link>
                                        <p className="category-item">(<span>8</span> items)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* category section end */}
        </div>
    )
}
export default LargeBanner
