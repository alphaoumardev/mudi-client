import {Link} from "react-router-dom";
// import StarRating from "react-star-rate";


const Category = ()=>
{
    return(
        <div>
            {/* category section start */}
            <section className="category mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 left-category">
                            <div className="category-box">
                                <div className="category-wrapper">
                                    <div className="category-img">
                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154166/slider3_fhf9dt.jpg" className="cate-clothing" alt="" />
                                    </div>
                                    <div className="category-content">
                                        <Link to="/women/clothing" className="title">Clothing</Link>
                                        <p className="category-item">(<span>8</span> items)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="row">
                                        <div className="col-12 mb-27">
                                            <div className="category-box">
                                                <div className="category-wrapper">
                                                    <div className="category-img">
                                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154146/14_tuq1wl.jpg" style={{width:355, height:335, objectFit:"cover"}} alt="" />
                                                    </div>
                                                    <div className="category-content">
                                                        <Link to="/men/hand bags" className="title">Handbag</Link>
                                                        <p className="category-item">(<span>20</span> items)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="category-box">
                                                <div className="category-wrapper">
                                                    <div className="category-img">
                                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1647154116/categorie_3_zupylo.jpg" className="w-100" style={{width:355, height:327}} alt="" />
                                                    </div>
                                                    <div className="category-content">
                                                        <Link to="/men/shoes" className="title">Sneaker</Link>
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
                                                <img src="https://res.cloudinary.com/diallo/image/upload/v1647154117/categorie_4_vunyul.jpg" className="w-100" style={{width:355, height:685}} alt="" />
                                            </div>
                                            <div className="category-content">
                                                <Link to="/men/clothing" className="title">Men</Link>
                                                <p className="category-item">(<span>17</span> items)</p>
                                            </div>
                                        </div>
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
export default Category
