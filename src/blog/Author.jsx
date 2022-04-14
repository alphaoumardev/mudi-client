import {Link} from "react-router-dom";
import MyWork from "./MyWork";
// import '../css/blogpost.css'

const Author = ()=>
{
    return(
        <div>
            {/*author*/}
            <section className="mt-90 mb-50 pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="author">
                                <div className="image">
                                    <Link to="/" className="image">
                                        <img  src="../assets/img/author/diallo.png" alt="sd" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5>
                                        Hi, I'm Alpha
                                    </h5>
                                    <div className="link">8 Articles</div>
                                    <p>
                                        Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit.
                                        Quis sem justo nisi varius.
                                    </p>
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

            {/*The work i have done so far*/}
            <MyWork/>

        </div>
    )
}
export default Author
