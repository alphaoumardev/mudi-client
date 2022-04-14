import {Link} from "react-router-dom";
// import '../css/blogpost.css'

const MyWork = ()=>
{
    return(
        <div>
            {/*Posts*/}
            <section className="mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            {/*Post-1*/}
                            <div className="post-round">
                                <div className="image">
                                    <Link to="post">
                                        <img src="../assets/img/blog/5.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="blogrid" className="categorie">
                                        <i className="icon_circle-slelected" />Art &amp; Design
                                    </Link>
                                    <h5>
                                        <Link to="post">How to Choose Outfits for Work for woman and men </Link>
                                    </h5>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="author">Emma Dalia</Link>
                                            </li>
                                            <li className="dot" />
                                            <li>2 Months Ago</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/*Post-2*/}
                            <div className="post-round">
                                <div className="image">
                                    <Link to="post">
                                        <img src="../assets/img/blog/3.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="blogrid" className="categorie">
                                        <i className="icon_circle-slelected" />Interior
                                    </Link>
                                    <h5>
                                        <Link to="post">Prepare easy brekfast for a weekend at home</Link>
                                    </h5>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="author">Emma Dalia</Link>
                                            </li>
                                            <li className="dot" />
                                            <li>2 Months Ago</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/*Post-3*/}
                            <div className="post-round">
                                <div className="image">
                                    <Link to="post">
                                        <img src="../assets/img/blog/30.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="blogrid" className="categorie">
                                        <i className="icon_circle-slelected" />Pants
                                    </Link>
                                    <h5>
                                        <Link to="post">How to make cokies with Chocolate for your kids?</Link>
                                    </h5>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="author">Emma Dalia</Link>
                                            </li>
                                            <li className="dot" />
                                            <li>2 Months Ago</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/*Post-4*/}
                            <div className="post-round">
                                <div className="image">
                                    <Link to="post">
                                        <img src="../assets/img/blog/25.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="blogrid" className="categorie">
                                        <i className="icon_circle-slelected" />Interior
                                    </Link>
                                    <h5>
                                        <Link to="post">Discovering the Natural history of trinidad</Link>
                                    </h5>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="author">Emma Dalia</Link>
                                            </li>
                                            <li className="dot" />
                                            <li>2 Months Ago</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/*Post-5*/}
                            <div className="post-round">
                                <div className="image">
                                    <Link to="post">
                                        <img src="../assets/img/blog/20.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="blogrid" className="categorie">
                                        <i className="icon_circle-slelected" />Art &amp; Design
                                    </Link>
                                    <h5>
                                        <Link to="post">the best dressed men in the world</Link>
                                    </h5>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="author">Emma Dalia</Link>
                                            </li>
                                            <li className="dot" />
                                            <li>2 Months Ago</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/*Post-6*/}
                            <div className="post-round">
                                <div className="image">
                                    <Link to="post">
                                        <img src="../assets/img/blog/29.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="blogrid" className="categorie">
                                        <i className="icon_circle-slelected" />Pants
                                    </Link>
                                    <h5>
                                        <Link to="post">Enjoy my favourite molten chocolate cake</Link>
                                    </h5>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="author">Emma Dalia</Link>
                                            </li>
                                            <li className="dot" />
                                            <li>2 Months Ago</li>
                                        </ul>
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
export default MyWork
