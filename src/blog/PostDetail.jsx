import {Link} from "react-router-dom";
// import '../css/blogpost.css'

const PostDetail = ()=>
{
    return(
        <div>
            <div>
                {/*post-single-top*/}
                <section className="post-single-top d-flex align-items-center">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="post-single-header">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-7 b-order-2">
                                            <div className="desc">
                                                <Link to="blog-grid.html" className="categorie">
                                                    <i className="icon_circle-slelected" />Art &amp; Design
                                                </Link>
                                                <h4>Design is more important than technology in most consumer applications </h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam fugiat ullam numquam
                                                    dolorum quod obcaecati ratione quam, consequatur doloremque.
                                                </p>
                                                <div className="info">
                                                    <ul className="list-inline">
                                                        <li>
                                                            <Link to="author.html">
                                                                <img src="../assets/img/author/1.jpg" alt />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="author.html">Emma Dalia</Link>
                                                        </li>
                                                        <li className="dot" />
                                                        <li>2 Months Ago</li>
                                                        <li className="dot" />
                                                        <li>3 comments</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 b-order-1">
                                            <div className="image">
                                                <img src="../assets/img/blog/5.jpg" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*post-single-body*/}
                <section className="post-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4  b-order-2 sidebar">
                                {/*author*/}
                                <div className="author box bg-light">
                                    <div className="image">
                                        <Link to="author.html" className="image">
                                            <img src="../assets/img/author/1.jpg" alt />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h5>
                                            <span>Hi, I'm Emma Dalia</span>
                                        </h5>
                                        <Link to="author.html" className="link">View Articles</Link>
                                        <p className="max-width-500">
                                            Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit.
                                            Quis sem justo nisi varius.
                                        </p>
                                        <div className="social-icones">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-youtube" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-behance" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-dribbble" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*categories*/}
                                <div className="box bg-light ">
                                    <div className="section-title">
                                        <h5>Categories</h5>
                                    </div>
                                    <div className="row ">
                                        <div className=" col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/1.jpg" alt />
                                                </div>
                                                <p>pants</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/2.jpg" alt />
                                                </div>
                                                <p>livestyle</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/3.jpg" alt />
                                                </div>
                                                <p>Food</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/4.jpg" alt />
                                                </div>
                                                <p>Interior</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/5.jpg" alt />
                                                </div>
                                                <p>Fashion</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/6.jpg" alt />
                                                </div>
                                                <p>Peaple</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/7.jpg" alt />
                                                </div>
                                                <p>Travel</p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/8.jpg" alt />
                                                </div>
                                                <p>Design </p>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="categorie-item" to="#">
                                                <div className="image">
                                                    <img src="../assets/img/cat/1.jpg" alt />
                                                </div>
                                                <p>Forest</p>
                                            </Link>
                                        </div>
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
                                                <Link to="post-default.html">
                                                    <img src="../assets/img/top/1.jpg" alt />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default.html">It’s easier to ask forgiveness than it is to get permission.</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 1 months Ago</small>
                                            </div>
                                        </li>
                                        <li className="small-post">
                                            <div className="image">
                                                <Link to="post-default.html">
                                                    <img src="../assets/img/top/2.jpg" alt />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default.html">10 best Casual hijab outfit trendy for new year</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 2 months Ago</small>
                                            </div>
                                        </li>
                                        <li className="small-post">
                                            <div className="image">
                                                <Link to="post-default.html">
                                                    <img src="../assets/img/top/3.jpg" alt />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default.html">How to Cook Chicken Perfectly Every Time</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 3 months Ago</small>
                                            </div>
                                        </li>
                                        <li className="small-post">
                                            <div className="image">
                                                <Link to="post-default.html">
                                                    <img src="../assets/img/top/4.jpg" alt />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link to="post-default.html">20+ Cute Girly Outfits to Buy for the First Day of Winter</Link>
                                                </h6>
                                                <small>
                                                    <span className="dot" /> 4 months Ago</small>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/*tags*/}
                                <div className="box bg-light">
                                    <div className="section-title">
                                        <h5>Tags</h5>
                                    </div>
                                    <div className="tags">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to="blog-grid.html">Travel</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">Nature</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">tips</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">forest</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">beach</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">fashion</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">livestyle</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">healty</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">food</Link>
                                            </li>
                                            <li>
                                                <Link to="blog-grid.html">breakfast</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*ads*/}
                                <div className="ads">
                                    <img src="../assets/img/ads/ads2.jpg" alt />
                                </div>
                            </div>
                            <div className="col-lg-8 b-order-1">
                                <div className="post-single-body">
                                    <div className="content">
                                        <p>
                                            Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue
                                            juvenile had off Unknown may service
                                            subject her letters one bed. Child years noise ye in forty. Loud in this in both
                                            hold. My entrance me is disposal bachelor remember relation
                                        </p>
                                        <h5> Make it simple, but significant. </h5>
                                        <p>
                                            Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially
                                            so to. Me unpleasing  impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain
                                            my do stairs. Oh smiling amiable am so visited cordial in offices hearted.
                                        </p>
                                        <p className="text-center">
                                            <img src="../assets/img/blog/26.jpg" alt className="image-right" />
                                        </p>
                                        <p>
                                            Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially
                                            so to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain
                                            my do stairs. Oh smiling amiable am so visited cordial in offices hearted.
                                            Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially
                                            so to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my
                                            do stairs. Oh smiling amiable am so visited cordial in offices hearted.
                                            Waiting him new lasting towards. Continuing melancholy especially so to. Me unpleasing impossible in attachment announcing
                                            so astonished. What ask leaf may nor upon door. Tended remain my do stairs.
                                            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                            in culpa qui officia
                                            deserunt mollit anim id est laborum.
                                        </p>
                                        <h5>  Simplicity is the ultimate sophistication</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident.
                                        </p>
                                        <div className="row">
                                            <div className="col-sm-4 ">
                                                <div className="image">
                                                    <img src="../assets/img/blog/19.jpg" alt />
                                                </div>
                                            </div>
                                            <div className="col-sm-4 ">
                                                <div className="image">
                                                    <img src="../assets/img/blog/20.jpg" alt />
                                                </div>
                                            </div>
                                            <div className="col-sm-4 ">
                                                <div className="image">
                                                    <img src="../assets/img/blog/23.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor Unknown may service in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolor Unknown may service in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident.
                                        </p>
                                        <div className="quote">
                                            <div>
                                                <i className="icon_quotations" />
                                            </div>
                                            <div>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti voluptatum, tenetur tempore suscipit veniam molestiae
                                                    exercitationem, praesentium ea molestias doloremque alias voluptatibus fuga quibusdam placeat aspernatur, harum
                                                    blanditiis iure.
                                                </p>
                                                <small>Henry David Thoreau.</small>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident.
                                        </p>
                                        <h5> Leave it better than you found it </h5>
                                        <p>
                                            Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially
                                            so to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain
                                            my do stairs. Oh smiling amiable am so visited cordial in offices hearted.
                                        </p>
                                        <p className="text-center">
                                            <img src="../assets/img/blog/25.jpg" alt className="image-left" />
                                        </p>
                                        <p>
                                            Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially
                                            so to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door.
                                            Tended remain my do stairs. Oh smiling amiable am so visited cordial in offices hearted. Oh acceptance apartments
                                            up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially so
                                            to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended
                                            remain my do stairs. Oh smiling amiable am so visited cordial in offices hearted. Waiting him new lasting
                                            towards. Continuing melancholy especially so to. Me unpleasing impossible in attachment announcing so astonished.
                                            What ask leaf may nor upon door. Tended remain my do stairs.
                                            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                            in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <ul className="list">
                                            <li>Digital design is like painting, except the paint never dries. </li>
                                            <li>Creativity is only as obscure as your reference</li>
                                            <li>Whitespace is like air: it is necessary for design to breathe.</li>
                                            <li>You don’t have to be ‘a creative’ to be creative.</li>
                                            <li>The best way to predict the future is to create it</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                    <div className="info">
                                        <div className="tags">
                                            <ul className="list-inline">
                                                <li className="bg-light">
                                                    <Link to="blog-grid.html">Travel</Link>
                                                </li>
                                                <li className="bg-light">
                                                    <Link to="blog-grid.html">Nature</Link>
                                                </li>
                                                <li className="bg-light">
                                                    <Link to="blog-grid.html">tips</Link>
                                                </li>
                                                <li className="bg-light">
                                                    <Link to="blog-grid.html">forest</Link>
                                                </li>
                                                <li className="bg-light">
                                                    <Link to="blog-grid.html">beach</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="social-media">
                                            <ul className="list-inline">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-youtube" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-pinterest" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*Ads*/}
                                <div className="row mb-50">
                                    <div className="col-lg-12">
                                        <div className="ads">
                                            <img src="../assets/img/ads/ads.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                {/*related posts*/}
                                <div className="row mb-50">
                                    <div className="col-lg-6">
                                        <div className="related-posts box bg-light ">
                                            <div className="small-post ">
                                                <div className="image">
                                                    <Link to="post-default.html">
                                                        <img src="../assets/img/related/1.jpg" alt="..." />
                                                    </Link>
                                                    <Link to="post-default.html" className="nb">
                                                        <i className="arrow_left" />
                                                    </Link>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                        <Link to="post-default.html">The best way to predict the future is to create it</Link>
                                                    </p>
                                                    <small><span className="dot" /> 2 months Ago</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="related-posts box bg-light">
                                            <div className="small-post ">
                                                <div className="image">
                                                    <Link to="post-default.html">
                                                        <img src="../assets/img/related/2.jpg" alt="..." />
                                                    </Link>
                                                    <Link to="post-default.html" className="nb">
                                                        <i className="arrow_right" />
                                                    </Link>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                        <Link to="post-default.html">How to Reuse Coffee Grounds for Your Plants</Link>
                                                    </p>
                                                    <small>
                                                        <span className="dot" /> 2 months Ago</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Comments*/}
                                <div className="mb-100">
                                    <h5 className="mb-30">3 Comments</h5>
                                    <ul className="comments">
                                        <li className="comment-item">
                                            <img src="../assets/img/user/1.jpg" alt />
                                            <div className="content">
                                                <ul className="info list-inline">
                                                    <li>Sarah Smith</li>
                                                </ul>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod
                                                    non fugiat aliquid sit similique!
                                                </p>
                                                <Link to="#" className="link">
                                                    <i className="arrow_left" /> Reply</Link>
                                            </div>
                                        </li>
                                        <li className="comment-item">
                                            <img src="../assets/img/user/2.jpg" alt />
                                            <div className="content">
                                                <ul className="info list-inline">
                                                    <li>Umar Alexi</li>
                                                </ul>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod
                                                    non fugiat aliquid sit similique!
                                                </p>
                                                <Link to="#" className="link">
                                                    <i className="arrow_left" /> Reply</Link>
                                            </div>
                                        </li>
                                        <li className="comment-item">
                                            <img src="../assets/img/user/3.jpg" alt />
                                            <div className="content">
                                                <ul className="info list-inline">
                                                    <li>Meriam Elmiz</li>
                                                </ul>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod
                                                    non fugiat aliquid sit similique!
                                                </p>
                                                <Link to="#" className="link">
                                                    <i className="arrow_left" /> Reply</Link>
                                            </div>
                                        </li>
                                    </ul>
                                    {/*Leave-comments*/}
                                    <h5 className="mb-20">Leave a Reply</h5>
                                    <form className="form" action="#" method="POST" id="main_contact_form">
                                        <p>Your email adress will not be published ,Requied fileds are marked*.</p>
                                        <div className="alert alert-success contact_msg" style={{display: 'none'}} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Message*" required="required" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" placeholder="Name*" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email*" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="text" name="website" id="website" className="form-control" placeholder="website" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-20">
                                                    <input name="name" type="checkbox" defaultValue={1} required="required" />
                                                    <label htmlFor="name"><span>save my name , email and website in this browser for the next time I comment.</span></label>
                                                </div>
                                                <button type="submit" name="submit" className="btn-custom">
                                                    Send Comment
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
export default PostDetail
