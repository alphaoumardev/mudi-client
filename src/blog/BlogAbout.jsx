import {Link} from "react-router-dom";
// import '../css/blogpost.css'

const BlogAbout = () =>
{
    return(
        <div>
            <div>
                {/* Categories*/}
                <section className="categorie-section-big">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="categorie-title text-center">
                                    <h3>About Us</h3>
                                    <small>
                                        <Link to="index">Home</Link>
                                        <span className="arrow_carrot-right" /> About Us
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*about-us*/}
                <section className="about-us mb-70">
                    <div className="container">
                        <div className="row  d-flex align-items-center">
                            <div className="col-lg-5 ">
                                <div className="image">
                                    <img src="../assets/img/about-us.jpg" alt />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="description">
                                    <h5>Thank you for checking out our blog website.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere, nemo dignissimos, in labore nostrum provident
                                        perferendis minima accusamus aliquam reprehenderit autem
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor
                                        quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus
                                        interdum. Interdum malesuada fames ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt.
                                        cursus leo ultricies magna faucibus id.
                                    </p>
                                    <div className="links mt-30 d-flex align-items-center">
                                        <Link to="contact" className="btn-custom"> Get In Touch</Link>
                                        <div className="social-icones">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-youtube" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-behance" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-dribbble" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default BlogAbout
