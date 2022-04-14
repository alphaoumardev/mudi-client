import {Link} from "react-router-dom";
// import '../css/blogpost.css'

const Contact = ()=>
{
    return(
        <div>
            <div>
                {/*title*/}
                <section className="categorie-section-big">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className=" text-center">
                                    <h3>Contact Us</h3>
                                    <small>
                                        <Link to="/">Home > </Link>
                                        <span className="arrow_carrot-right" /> contact
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*contact*/}
                <section className="contact mb-70 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <h5>Let's Talk about Everything</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla voluptates dignissimos repudiandae velit,
                                        porro cupiditate libero.
                                    </p>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="bi bi-geo-alt"/>
                                        </div>
                                        <p>New York City, USA</p>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="bi bi-envelope"/>
                                        </div>
                                        <p>
                                            <Link to="mailto:alphaoumardev@outlook.com">alphaoumardev@outlook.com</Link>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="bi bi-phone" />
                                        </div>
                                        <p>
                                            <Link to="to:13222702117">+86 (123)-456-78-91</Link>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="bi bi-share" />
                                            <ul className="d-flex m-3">
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-facebook in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-instagram in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-twitter in " />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-youtube in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="bi bi-behance in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="in">
                                                        <i className="bi bi-dribbble in" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form action="/" className="form contact_form " method="POST" id="main_contact_form">
                                    <div className="alert alert-success contact_msg" style={{display: 'none'}} role="alert">
                                        Your message was sent successfully.
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Name*" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email*" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject*" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Message*" required="required" defaultValue={""} />
                                    </div>
                                    <button type="submit" name="submit" className="btn-custom">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Contact
