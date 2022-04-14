import {Link} from "react-router-dom";

const Footer = ()=>
{
    return(
        <div>
            {/* footer section start */}
            <section className="footer">
                <div className="footer-top  pb-120 pt-30" style={{backgroundColor: '#f5f5f5'}}>
                    <div className="footer-top-wrapper">
                        <div className="newsletter ">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <h2 className="title m-0">Sign Up For Our Newsletter</h2>
                                    <p>Subscribe our newsletter and get discount 20% Off</p>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="newsletter-form">
                                        <form action="#" method="POST">
                                            <input type="text" style={{padding:29}} placeholder="Search for our newsletter..." />
                                            <button type="submit" className="generic-btn red-hover-btn text-uppercase float-right">Subscribe
                                                Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.newsletter */}
                        <div className="service pt-57 mt-40 gray-border-top">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6 service-item">
                                    <div className="service-box service-box-2">
                                        <div className="service-box-content">
                                            <h4> Worldwide Shipping</h4>
                                            <p className="service-desc">Duis autem vel eum iriure dolor in hendrerit velit esse
                                                molestie consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 service-item">
                                    <div className="service-box service-box-2">
                                        <div className="service-box-content">
                                            <h4 className="">Online Support 24/7</h4>
                                            <p className="service-desc">Duis autem vel eum iriure dolor in hendrerit velit esse
                                                molestie consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 hidden-md service-item">
                                    <div className="service-box service-box-2">
                                        <div className="service-box-content">
                                            <h4 className="">Money Return Guarantee</h4>
                                            <p className="service-desc">Duis autem vel eum iriure dolor in hendrerit velit esse
                                                molestie consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /. service */}
                        {/* /. footer bottom */}
                    </div>
                </div>
                {/* footer top */}
                <div className="footer-bottom pt-70" style={{backgroundColor: '#292929'}}>
                    <div className="container-1180">
                        <div className="footer-bottom-wrapper">
                            <div className="footer-bottom-primary pb-60">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5  col-md-9">
                                        <div className="footer-item has-desc">
                                            <section className="footer-logo mb-25">
                                                <img src="../assets/img/logo/logo2.png" width={120} height={31} alt="" />
                                            </section>
                                            <div className="footer-desc">
                                                <p className="mb-10">Mazia store is a premium theme with advanced admin module. It’s
                                                    extremely customizable, easy to use and fully responsive and retina ready.
                                                </p>
                                            </div>
                                            <div className="footer-img mt-65">
                                                <img src="../assets/img/logo/paypal.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li><Link to="#" className="title">MY ACCOUNT</Link></li>
                                                        <li><Link to="login">My account</Link></li>
                                                        <li><Link to="checkout">Checkout</Link></li>
                                                        <li><Link to="shop">Shop</Link></li>
                                                        <li><Link to="wishlist">Wishlist</Link></li>
                                                        <li><Link to="question">Frequently</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li><Link to="#" className="title">Quick Links</Link></li>
                                                        <li><Link to="shop">Special Offers</Link></li>
                                                        <li><Link to="shop">Gift Cards</Link></li>
                                                        <li><Link to="shop">F21 Red</Link></li>
                                                        <li><Link to="about">Privacy Policy</Link></li>
                                                        <li><Link to="about">Teams of Use</Link></li>
                                                        <li><Link to="portfolio">Portfolio</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 hidden-sm">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li><Link to="#" className="title">Company Info</Link></li>
                                                        <li><Link to="about">About us</Link></li>
                                                        <li><Link to="blog">Careers</Link></li>
                                                        <li><Link to="portfolio">Business With Us</Link></li>
                                                        <li><Link to="shop">Find a Store</Link></li>
                                                        <li><Link to="question">Teams of Use</Link></li>
                                                        <li><Link to="portfolio">Press &amp; Talent</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Footer
