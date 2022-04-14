import {Link} from 'react-router-dom'
import BlogSliders from "./BlogSliders";
// import '../css/blogpost.css'

const BlogIndex =()=>
{
    return (
        <div>
          <BlogSliders/>
          <div >
            {/* Navigation*/}
               {/*categories*/}
            <div className="categorie-section bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="cat-list">
                      <li>
                        <Link className="item" to="">
                          <div className="image">
                            <img src="../assets/img/cat/1.jpg" alt="" />
                          </div>
                          <p>Plants</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="item" to="blog-grid">
                          <div className="image">
                            <img src="../assets/img/cat/2.jpg" alt="" />
                          </div>
                          <p> Livestyle</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="item" to="">
                          <div className="image">
                            <img src="../assets/img/cat/3.jpg" alt="" />
                          </div>
                          <p>Food</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="item" to="/">
                          <div className="image">
                            <img src="../assets/img/cat/4.jpg" alt="" />
                          </div>
                          <p>Interior</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="item" to="blog-grid">
                          <div className="image">
                            <img src="../assets/img/cat/5.jpg" alt="" />
                          </div>
                          <p>Fashion</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="item" to="blog-grid-2">
                          <div className="image">
                            <img src="../assets/img/cat/6.jpg" alt="" />
                          </div>
                          <p>Peaple</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="item" to="/">
                          <div className="image">
                            <img src="../assets/img/cat/7.jpg" alt="" />
                          </div>
                          <p>Travel</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="item" to="blog-grid-2">
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
            <section className="mt-100 mb-70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    {/*Post-1*/}
                    <div className="post-round">
                      <div className="image">
                        <Link to="post-default">
                          <img src="../assets/img/blog/5.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Art &amp; Design
                        </Link>
                        <h5>
                          <Link to="post-default">It’s easier to ask forgiveness than it is to get permission. </Link>
                        </h5>
                        <div className="meta">
                          <ul className="list-inline">
                            <li><Link to="author">Emma Dalia</Link></li>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/3.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Interior
                        </Link>
                        <h5>
                          <Link to="post-default"> Lighting tips for every room in the house</Link>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/30.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Plants
                        </Link>
                        <h5>
                          <Link to="post-default">45 Summer Flowers for a Stunning Home Garden</Link>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/25.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Interior
                        </Link>
                        <h5>
                          <Link to="post-default">12 rules an interior decorator never forgets</Link>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/20.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Art &amp; Design
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/29.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Plants
                        </Link>
                        <h5>
                          <Link to="post-default">30 Perfect Flowers for a Fall Garden</Link>
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
            {/*post-full*/}
            <section className="post-full bg-light">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-7">
                    <div className="content">
                      <Link to="blog-grid" className="categorie">
                        <i className="icon_circle-slelected" />Art &amp; Design
                      </Link>
                      <h3>
                        <Link to="post-default">Great design is a multi-layered relationship between human life and its environment</Link>
                      </h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus unde officia dolor, sapiente ipsa molestiae voluptatem
                        deserunt nisi. Facilis consequuntur suscipit maiores magni repudiandae .
                      </p>
                      <div className="info">
                        <ul className="list-inline">
                          <li>
                            <Link to="author">
                              <img src="../assets/img/author/1.jpg" alt="" />
                            </Link>
                          </li>
                          <li>
                            <Link to="author">Emma Dalia</Link>
                          </li>
                          <li className="dot" />
                          <li>2 Months Ago</li>
                          <li className="dot" />
                          <li>5 min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="image">
                      <img src="../assets/img/blog/26.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*Posts*/}
            <section className="mb-70 mt-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="post-list">
                      <div className="image">
                        <Link to="post-default">
                          <img src="../assets/img/blog/9.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Interior
                        </Link>
                        <h5>
                          <Link to="post-default">12 rules an interior decorator never forgets</Link>
                        </h5>
                        <div className="meta">
                          <ul className="list-inline">
                            <li><Link to="author">Emma Dalia</Link></li>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/10.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Art &amp; design
                        </Link>
                        <h5>
                          <Link to="post-default">You don’t have to be ‘a creative’ to be creative.</Link>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/31.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Interior
                        </Link>
                        <h5>
                          <Link to="post-default">How to Design Modern Spaces That Don't Feel Cold</Link>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/19.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Pants
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
                    <div className="post-list">
                      <div className="image">
                        <Link to="post-default">
                          <img src="../assets/img/blog/17.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Fashion
                        </Link>
                        <h5>
                          <Link to="post-default">Outfit ideas: what to wear on Christmas Day</Link>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/16.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Livestyle
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
                    <div className="post-list">
                      <div className="image">
                        <Link to="post-default">
                          <img src="../assets/img/blog/12.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Plants
                        </Link>
                        <h5>
                          <Link to="post-default">How to Grow and Care for Aloe Vera Plants</Link>
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
                        <Link to="post-default">
                          <img src="../assets/img/blog/2.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to="blog-grid" className="categorie">
                          <i className="icon_circle-slelected" />Food
                        </Link>
                        <h5>
                          <Link to="post-default">How to Cook Chicken Perfectly Every Time</Link>
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
          </div>
        </div>
    );
}
export default BlogIndex
