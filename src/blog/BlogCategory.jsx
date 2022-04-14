import {Link} from "react-router-dom";
// import '../css/blogpost.css'

const BlogCategory = ()=>
{
    return(
        <div>
            <div>
                {/* categorie*/}
                <section className="categorie-section mt-90 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="categorie-title">
                                    <small>
                                        <Link to="index">Home</Link>
                                        <span className="arrow_carrot-right" />Blog
                                    </small>
                                    <h3>Category :
                                        <span> Interior</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Posts*/}
                <section className="mb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/*Post-1*/}
                                        <div className="post-list ">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/blog/1.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <Link to="blogrid" className="categorie">
                                                    <i className="icon_circle-slelected" />Interior
                                                </Link>
                                                <h5>
                                                    <Link to="post-default">06 secret interior design tips from the experts</Link>
                                                </h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                                                </p>
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
                                        {/*/*/}
                                    </div>
                                    <div className="col-lg-12">
                                        {/*Post-2*/}
                                        <div className="post-list">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/blog/9.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <Link to="blogrid" className="categorie">
                                                    <i className="icon_circle-slelected" />Interior
                                                </Link>
                                                <h5>
                                                    <Link to="post-default">12 rules an interior decorator never forgets</Link>
                                                </h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                                                </p>
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
                                        {/*/*/}
                                    </div>
                                    <div className="col-lg-12">
                                        {/*Post-3*/}
                                        <div className="post-list">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/blog/11.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <Link to="blogrid" className="categorie">
                                                    <i className="icon_circle-slelected" />Interior
                                                </Link>
                                                <h5>
                                                    <Link to="post-default">6 Decorating and Remodeling Tips From a Top Interior Designer</Link>
                                                </h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                                                </p>
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
                                        {/*/*/}
                                    </div>
                                    <div className="col-lg-12">
                                        {/*Post-4*/}
                                        <div className="post-list ">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/blog/31.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <Link to="blogrid" className="categorie">
                                                    <i className="icon_circle-slelected" />Interior
                                                </Link>
                                                <h5>
                                                    <Link to="post-default">How to Design Modern Spaces That Don't Feel Cold</Link>
                                                </h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                                                </p>
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
                                        {/*/*/}
                                    </div>
                                    <div className="col-lg-12">
                                        {/*Post-5*/}
                                        <div className="post-list">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/blog/3.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <Link to="blogrid" className="categorie">
                                                    <i className="icon_circle-slelected" />Interior
                                                </Link>
                                                <h5>
                                                    <Link to="post-default">Lighting tips for every room in the house </Link>
                                                </h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                                                </p>
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
                                        {/*/*/}
                                    </div>
                                    <div className="col-lg-12">
                                        {/*Post-6*/}
                                        <div className="post-list">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/blog/15.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <Link to="blogrid" className="categorie">
                                                    <i className="icon_circle-slelected" />Interior
                                                </Link>
                                                <h5>
                                                    <Link to="post-default">8 Creative Office Decor Tips to Maximize Your Productivity</Link>
                                                </h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                                                </p>
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
                                        {/*/*/}
                                    </div>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-lg-12">
                                        <div className="load-posts">
                                            <Link to="#" className="btn-custom">More posts</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 sidebar">
                                {/*categories*/}
                                <div className="box bg-light ">
                                    <div className="section-title">
                                        <h5>Categories</h5>
                                    </div>
                                    <div className="row ">
                                        <div className=" col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/1.jpg" alt="" />
                                                </div>
                                                <p>pants</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/2.jpg" alt="" />
                                                </div>
                                                <p>livestyle</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/3.jpg" alt="" />
                                                </div>
                                                <p>Food</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/4.jpg" alt="" />
                                                </div>
                                                <p>Interior</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/5.jpg" alt="" />
                                                </div>
                                                <p>Fashion</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/6.jpg" alt="" />
                                                </div>
                                                <p>Peaple</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/7.jpg" alt="" />
                                                </div>
                                                <p>Travel</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/8.jpg" alt="" />
                                                </div>
                                                <p>Design </p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/1.jpg" alt="" />
                                                </div>
                                                <p>Forest</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*Tags*/}
                                <div className="box bg-light">
                                    <div className="section-title">
                                        <h5>Tags</h5>
                                    </div>
                                    <div className="tags">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="blogrid">Travel</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">Nature</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">tips</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">forest</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">beach</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">fashion</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">livestyle</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">healty"</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">food</Link>
                                            </li>
                                            <li>
                                                <Link to="blogrid">breakfast</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*top-posts*/}
                                <div className="box bg-light">
                                    <div className="section-title">
                                        <h5>Top Posts</h5>
                                    </div>
                                    <ul className="top-posts">
                                        <li className="small-post">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/top/1.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default">It’s easier to ask forgiveness than it is to get permission.</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 1 months Ago</small>
                                            </div>
                                        </li>
                                        <li className="small-post">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/top/2.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default">10 best Casual hijab outfit trendy for new year</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 2 months Ago</small>
                                            </div>
                                        </li>
                                        <li className="small-post">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/top/3.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default">How to Cook Chicken Perfectly Every Time</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 3 months Ago</small>
                                            </div>
                                        </li>
                                        <li className="small-post">
                                            <div className="image">
                                                <Link to="post-default">
                                                    <img src="../assets/img/top/4.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default">20+ Cute Girly Outfits to Buy for the First Day of Winter</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 4 months Ago</small>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/*Ads*/}
                                <div className="ads">
                                    <img src="../assets/img/ads/ads2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
export default BlogCategory
