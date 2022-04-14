import {Link} from "react-router-dom";
import BlogSliders from "./BlogSliders";
// import '../css/blogpost.css'
const AllBlogPosts = ()=>
{
    return(
        <div>
            <BlogSliders/>
            <div>
                {/*categories*/}
                <div className="categorie-section pt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="cat-list">
                                    <li>
                                        <Link className="item" to="blog-list">
                                            <div className="image">
                                                <img src="../assets/img/cat/1.jpg" alt="" />
                                            </div>
                                            <p>Plants</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="item" to="blogrid">
                                            <div className="image">
                                                <img src="../assets/img/cat/2.jpg" alt="" />
                                            </div>
                                            <p> Livestyle</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="item" to="blog-list">
                                            <div className="image">
                                                <img src="../assets/img/cat/3.jpg" alt="" />
                                            </div>
                                            <p>Food</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="item" to="blog-list-2">
                                            <div className="image">
                                                <img src="../assets/img/cat/4.jpg" alt="" />
                                            </div>
                                            <p>Interior</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="item" to="blogrid">
                                            <div className="image">
                                                <img src="../assets/img/cat/5.jpg" alt="" />
                                            </div>
                                            <p>Fashion</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="item" to="blogrid-2">
                                            <div className="image">
                                                <img src="../assets/img/cat/6.jpg" alt="" />
                                            </div>
                                            <p>Peaple</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="item" to="blog-list-2">
                                            <div className="image">
                                                <img src="../assets/img/cat/7.jpg" alt="" />
                                            </div>
                                            <p>Travel</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="item" to="blogrid-2">
                                            <div className="image">
                                                <img src="../assets/img/cat/8.jpg" alt="" />
                                            </div>
                                            <p>Art &amp; Design</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Posts*/}
                <section className="section mt-50 mb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="post-box">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/15.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />livestyle
                                        </Link>
                                        <h5>
                                            <Link to="post-default">How to Choose Outfits for Work for woman and men</Link>
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
                                <div className="post-box">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/8.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />art &amp; Design
                                        </Link>
                                        <h5>
                                            <Link to="post-default">Creativity is nothing but a mind set free</Link>
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
                                <div className="post-box">
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
                                <div className="post-box">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/24.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Fashion
                                        </Link>
                                        <h5>
                                            <Link to="post-default">10 best Casual hijab outfit trendy for new year</Link>
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
                                <div className="post-box">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/19.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post-default">How to Reuse Coffee Grounds for Your Plants</Link>
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
                                <div className="post-box">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/20.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Photography
                                        </Link>
                                        <h5>
                                            <Link to="post-default">The best way to predict the future is to create it</Link>
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
                    </div>
                </section>
                {/*ads*/}
                <div className="ads-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ads">
                                    <img src="https://res.cloudinary.com/diallo/image/upload/v1647154113/ads2_ucgjmg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Posts*/}
                <section className="mt-100 mb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                {/*1*/}
                                <div className="post-list ">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/27.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Plants
                                        </Link>
                                        <h5>
                                            <Link to="post-default">How to Bring Your Plants Indoors for the Fall and Winter</Link>
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
                                {/*2*/}
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/2.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Food
                                        </Link>
                                        <h5>
                                            <Link to="post-default">How to Cook Chicken Perfectly Every Time</Link>
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
                                {/*3*/}
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/23.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />art &amp; Design
                                        </Link>
                                        <h5>
                                            <Link to="post-default">Creativity is nothing but the way to solve new problems.</Link>
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
                                {/*4*/}
                                <div className="post-list">
                                    <div className="image">
                                        <Link to="post-default">
                                            <img src="../assets/img/blog/13.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <Link to="blogrid" className="categorie">
                                            <i className="icon_circle-slelected" />Livestyle
                                        </Link>
                                        <h5>
                                            <Link to="post-default">20+ Cute Girly Outfits to Buy for the First Day of Winter</Link>
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
                                {/*5*/}
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
                                            <Link to="post-default">Lighting tips for every room in the house</Link>
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
                            </div>
                            <div className="col-lg-4 sidebar">
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
                                                <Link to="blogrid">healty</Link>
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
                                {/*Ads*/}
                                <div className="ads">
                                    <img src="../assets/img/ads/ads.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default AllBlogPosts
