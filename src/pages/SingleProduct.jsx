import Featured from "../components/Featured";
import {Link, useNavigate, useParams} from "react-router-dom";
import StarRating from "react-star-rate";
import Rating from '@mui/material/Rating';
import {useEffect, useState,} from "react";
import Singles from "../items/Singles";
import RelatedProduct from "../little/RelatedProduct";
import BannerTab2 from "../little/BannerTab2";
import {useDispatch, useSelector} from "react-redux";
import {getImages, getOneProduct, getProductsByVariant} from "../redux/Actions/productsActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {styled} from "@mui/material/styles";
import {addReview} from "../redux/Actions/orderAction";

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {color: '#f44d57',},
  '& .MuiRating-iconHover': {color: '#bf020c',}});

const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Not Bad',
  4: 'Good',
  5: 'Excellent',
};
const txt ={
  1: 'text-danger',
  2: 'text-warning',
  3: 'text-primary',
  4: 'text-info',
  5: 'text-success',
};

const SingleProduct = () =>
{
  let {id} = useParams()
  const dispatch = useDispatch()
  const [rating, setRating] = useState(2);
  const [hoverRating, setHoverRating] = useState(-1);
  const [comment, setComment] = useState('');

  const navigate = useNavigate()
  const {variant} = useSelector(state => state.getproductByVariantReducer)
  const {images,} = useSelector(state => state.getImagesReducer)
  const {one, reviews, count} = useSelector(state => state.getOneProductReducer)
  const {user} = useSelector(state => state.authReducer)

  const submitReview = (e)=>
  {
    e.preventDefault()
    dispatch(addReview(user, rating, id, comment))
    setRating(2)
    setComment(null)
  }
  useEffect(()=>
  {
    dispatch(getOneProduct(id))
    dispatch(getImages(id))
    dispatch(getProductsByVariant(id))
  },[dispatch, id])

    return(
   <div>
    <section className="single-product mb-90">
      <div className="container-fluid">
        {/*<Crumb/>*/}
        <div className="shop-wrapper">
          <div className="single-product-top">
            <div className="row">
              <Singles images={images} variant={variant} one={one} count={count}/>
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
                <a  data-toggle="pill" href="#desc-tab-2">Reviews ({count})</a>
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
                          {reviews?.map((item, index) =>
                          <div className="single-review" key={index}>
                            <div className="review-img">
                              <img src={one?.image_hover} className="rounded-3" alt=" " />
                            </div>
                            <div className="review-content">
                              <div className="review-top-wrap">
                                <div className="review-left">
                                  <div className="review-name">
                                    <h5>{user?.first_name}</h5>
                                    <Rating className="review-name" size="small" value={item?.rate} readOnly />
                                    <span>{item?.create_at.slice(0,10)}</span>
                                  </div>
                                </div>
                                {/*<div className="review-left">*/}
                                {/*  <Link to="#">Reply</Link>*/}
                                {/*</div>*/}
                              </div>
                              <div className="review-bottom">
                                <p>{item?.comment}  </p>
                              </div>
                            </div>
                          </div>
                            )}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="ratting-form-wrapper">
                          <h3>Add a Review</h3>
                          <div className="ratting-form">
                            <form onSubmit={submitReview}>
                              <div className="star-box">
                                <span>Your rating:</span>
                                <StyledRating
                                    name="customized-color"
                                    value={rating}
                                    size={'large'}
                                    sx={{fontSize:16, paddingRight:2, }}
                                    onChange={(event, newRating) => {setRating(newRating);}}
                                    onChangeActive={(event, newRating) => {setHoverRating(newRating);}}
                                    precision={1}
                                    icon={<FavoriteIcon fontSize="small" />}
                                    emptyIcon={<FavoriteBorderIcon fontSize="small" />}
                                />
                                {rating && (
                                    <span className={txt[hoverRating!== -1 ? hoverRating : rating]}>{labels[hoverRating !== -1 ? hoverRating : rating]}</span>
                                )}
                              </div>
                              <div className="row">
                                <div className="col-md-12 rounded-3">
                                  <div className="rating-form-style form-submit">
                                    <textarea name="Your Review" placeholder="Message" defaultValue={""} onChange={(e)=>setComment(e.target.value)} />
                                    {user?<button className="generic-btn red-hover-btn" type="submit"
                                            style={{fontSize: '14px !important'}}>Submit</button>:
                                        <button className="generic-btn red-hover-btn"  type="submit"
                                                onClick={()=>navigate("/login")}
                                                style={{fontSize: '14px !important'}}>Submit</button>}
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
