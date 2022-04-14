import {Link} from "react-router-dom";
// import '../css/blogpost.css'

const BlogList = ()=>
{
    return(
        <div>
            <div>
                <section className="categorie-section mt-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="categorie-title">
                                    <small>
                                        <Link to="index">Home</Link>
                                        <span className="arrow_carrot-right" /> Blog
                                    </small>
                                    <h3>Category :
                                        <span> Plants</span>
                                    </h3>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus
                                        eum aut enim modi saepe perspiciatis fugit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/27.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">How to Bring Your Plants Indoors for the Fall and Winter</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/7.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">15 Brilliant and Easy Plant Care Tips</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/12.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">How to Grow and Care for Aloe Vera Plants</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/30.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">45 Summer Flowers for a Stunning Home Garden</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/29.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">30 Perfect Flowers for a Fall Garden</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/21.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">Indoor Plants that are Almost Impossible to Kill</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/32.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">How To Make Your Orchid Rebloom</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post">
                                            <img src="../assets/img/blog/19.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blog-grid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post">How to Reuse Coffee Grounds for Your Plants</Link>
                                        </h5>
                                        <div className="meta">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="author">Emma Dalia</Link>
                                                </li>
                                                <li className="dot" />
                                                <li>5 Months Ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-lg-12">
                                <div className="load-posts text-center">
                                    <Link to="#" className="btn-custom"> More posts</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
export default BlogList
