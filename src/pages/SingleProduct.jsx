import Featured from "../components/Featured";
import {Link, useParams} from "react-router-dom";
import StarRating from "react-star-rate";

import {useEffect,} from "react";
import Singles from "../items/Singles";
import RelatedProduct from "../little/RelatedProduct";
import BannerTab2 from "../little/BannerTab2";
import {useDispatch, useSelector} from "react-redux";
import {getImages, getOneProduct, getProductsByVariant} from "../redux/Actions/productsActions";
const SingleProduct = () =>
{
  let {id} = useParams()
  const dispatch = useDispatch()
  const {one} = useSelector(state => state.getOneProductReducer)
  const {images,} = useSelector(state => state.getImagesReducer)
  const {variant} = useSelector(state => state.getproductByVariantReducer)
  useEffect(()=>
  {
    dispatch(getOneProduct(id))
    dispatch(getImages(id))
    dispatch(getProductsByVariant(id))
  },[dispatch,  id])
    return(
   <div>
    <section className="single-product mb-90">
      <div className="container-fluid">
        {/*<Crumb/>*/}
        <div className="shop-wrapper">
          <div className="single-product-top">
            <div className="row">
              <Singles images={images} variant={variant} one={one}/>
            </div>
          </div>
          <div className="single-product-bottom mt-80 gray-border-top">
            <ul className="nav nav-pills justify-content-center mt-100">
              <li className="nav-item">
                <a className="active" data-toggle="pill" href="#desc-tab-1">Description</a>
              </li>
              <li className="nav-item">
                <a data-toggle="pill" href="#desc-tab-3">Additional information</a>
              </li>
              <li className="nav-item">
                <a  data-toggle="pill" href="#desc-tab-2">Reviews (0)</a>
              </li>
            </ul>
            <div className="container container-1200">
              <div className="tab-content mt-60">
                <div className="tab-pane fade show active" id="desc-tab-1">
                  <div className="single-product-tab-content">
                    <h3 className="title mb-30">Description</h3>
                    <p>{one?.description}</p>
                  </div>
                </div>
                <div className="tab-pane fade" id="desc-tab-3">
                  <div className="single-product-tab-content">
                    <h3 className="title mb-30">Additional information</h3>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>size</th>
                          <td>
                            <ul>
                              {variant?.map((item, index)=>
                                  <div key={index} className="d-inline-block m-2">
                                    <label   htmlFor="l">{item?.size?.size_name}</label>
                                    <input type="radio" className="d-none" id="l" />
                                  </div>
                              )}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th>color</th>
                          <td>
                            <ul>
                              {images?.map((item, index)=>(
                                  <div key={index} className="color-input">
                                    <label htmlFor="yellow" style={{backgroundColor: item?.color_name?.color_name}} />
                                    <input type="radio" className="d-none" id="yellow" />
                                    <span>{item?.color_name?.color_name}</span>
                                  </div>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="desc-tab-2" role="tabpanel">
                  <div className="single-product-desc">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="review-wrapper">
                          <div className="single-review">
                            <div className="review-img rounded-3">
                              <img src={one?.image_hover} alt=" " />
                            </div>
                            <div className="review-content">
                              <div className="review-top-wrap">
                                <div className="review-left">
                                  <div className="review-name">
                                    <h4>Diallo</h4>
                                  </div>
                                  <StarRating count={5} symbol="★" color2={'#ffd700'} />
                                </div>
                                <div className="review-left">
                                  <Link to="#">Reply</Link>
                                </div>
                              </div>
                              <div className="review-bottom">
                                <p>{one?.description}  </p>
                              </div>
                            </div>
                          </div>
                          <div className="single-review child-review">
                            <div className="review-img">
                              <img src={one?.image} alt=" " />
                            </div>
                            <div className="review-content">
                              <div className="review-top-wrap">
                                <div className="review-left">
                                  <div className="review-name">
                                    <h4>Oumou</h4>
                                  </div>  <StarRating count={5} symbol="★" color2={'#ffd700'} />

                                </div>
                                <div className="review-left">
                                  <Link to="#">Reply</Link>
                                </div>
                              </div>
                              <div className="review-bottom">
                                <p>
                                  {one?.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="ratting-form-wrapper">
                          <h3>Add a Review</h3>
                          <div className="ratting-form">
                            <form action="#">
                              <div className="star-box">
                                <span>Your rating:</span>
                                <StarRating count={5} symbol="★" color2={'#ffd700'} />
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="rating-form-style mb-10">
                                    <input placeholder="Name" type="text" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="rating-form-style mb-10">
                                    <input placeholder="Email" type="email" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="rating-form-style form-submit">
                                    <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                                    <button type="submit" className="generic-btn red-hover-btn" style={{fontSize: '14px !important'}}>Submit</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
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
    <section className="sugession-product mt-120">
      <h2 className="mb-20 text-center">You May Also Like</h2>
      <Featured/>
    </section>
      <BannerTab2/>
      <RelatedProduct/>
  </div>

    )
}
export default SingleProduct
