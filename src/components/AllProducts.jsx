import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import StarRating from "react-star-rate";
import axios from "axios";
import Modal from "../items/Modal";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {
  getColors,
  getImages, getNewProducts,
  getOneProduct,
  getOnsales, getProductByPageAction,
  getProductsBySubcatesAction,
  getProductsByVariant, getSizes, getTags
} from "../redux/Actions/productsActions";
import {
  getColorsReducer,
  getNewProductsReducer, getProductsByPagegReducer,
  getSizesReducer,
  getTagsReducer
} from "../redux/reducers/productsReducer";
const AllProducts = ()=>
{
  // const {id} = useParams()
  const [id, setId] = useState(5)
  const [page, setPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () =>{setIsOpen(!isOpen)}
  const close = ()=>{setIsOpen(false)}
  if(!isOpen)
  {
    setTimeout(close, 15000)
  }
  // let genre = location.pathname.split('/')[1]
  let {genre} = useParams()
  let {type} = useParams()

  const dispatch = useDispatch()
  const {article, num_pages} = useSelector(state => state.getProductsByPagegReducer)
  const {tags} = useSelector(state => state.getTagsReducer)
  const {sizes} = useSelector(state => state.getSizesReducer)
  const {colors} = useSelector(state => state.getColorsReducer)
  const {one} = useSelector(state => state.getOneProductReducer)
  const {images,} = useSelector(state => state.getImagesReducer)
  const {onsale} = useSelector(state => state.getOnsaleProductsReducer)
  const {variant} = useSelector(state => state.getproductByVariantReducer)

  useEffect(()=>
  {
    dispatch(getOneProduct(id))
    dispatch(getImages(id))
    dispatch(getProductsByVariant(id))
    dispatch(getOnsales())
    dispatch(getProductByPageAction(genre, type, page))
    dispatch(getColors())
    dispatch(getSizes())
    dispatch(getTags())
    dispatch(getNewProducts())
  },[dispatch, genre, type,page, id])



  const [value, setValue] = useState([100, 500]);
  const handleChange = (event, newValue) =>{setValue(newValue)}
    return(
    <div>
    <div className="shop-body mb-90">
    <div className="container-fluid">
      <div className="shop-wrapper">
        <div className="row">
          <div className="col-12">
            {/* /. filter heading */}
            <div className="filter-heading">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="filter-shown-item">
                    <p className="mb-0">Showing <span>1</span>–<span>24</span> of <span className="total_count">56</span> results</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="shop-filter-tab">
                    <ul className="nav nav-pills text-center d-flex justify-content-center">
                      <li><span>Views</span></li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-3" data-placement="top" title="4 grid" className="active "><i className="bi bi-grid-3x3-gap" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-4" data-placement="top" title="list view"><i className="bi bi-list-stars" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex justify-content-end position-static">
                  <div className="sorting d-inline-block">
                    <select name="sort" id="shop-sort">
                      <option value="default">Default sorting</option>
                      <option value="default">Short by popularity</option>
                      <option value="default">Sort by average rating</option>
                      <option value="default">Sort by latest</option>
                      <option value="default">Sort by price: low to high</option>
                      <option value="default">Sort by price: high to low</option>
                    </select>
                  </div>
                  {/* The filter start*/}
                  <div className="filter">
                    <h6 className="d-inline-block filter-widget-toggle" onClick={togglePopup}>Filter <i className="bi bi-chevron-down"/></h6>
                    {isOpen && <div className="filter-popup">
                      <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="filter-popup-item">
                            <div className="widget">
                              <h4 className="mb-30">Filter By Color</h4>
                              <ul className="color-list">
                                {colors?.map((item, index)=>
                                    <li key={index} style={{backgroundColor: item?.color_name}} />
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="widget">
                            <h4 className="mb-30">Filter By Size</h4>
                            <div className="size-link">
                              {sizes?.map((item, index)=>
                                  <Link key={index} to="shop">{item?.size_name}</Link>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="widget">
                            <h4 className="mb-30">Filter By Price</h4>
                            <form action="#">
                              <div className="price-filter">
                                <Box sx={{ width: 250 }}>
                                  <Slider
                                      getAriaLabel={() => 'Temperature range'}
                                      value={value}
                                      onChange={handleChange}
                                      valueLabelDisplay="auto"
                                      max={1000}
                                      min={12}
                                      defaultValue={100}
                                      name="price"
                                      tabIndex={2}
                                      // getAriaValueText={valuetext}
                                  />
                                </Box>
                                <div className="filter-form-submit mt-35">
                                  <button type="submit">Filter</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 position-static">
                          <div className="widget">
                            <h4 className="mb-30">Popular Tags</h4>
                            <div className="category-list">
                              <ul>
                                {tags?.map((item, index)=>
                                    <li key={index}><Link to="/shop">{item?.tag_name}</Link></li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  </div>
                  {/* The filter end*/}

                </div>
              </div>
            </div>

            <div className="filter-content">
              <div className="tab-content">
                {/*Tab one start*/}
                <div className="tab-pane fade  show active" id="shop-tab-3">
                  <div className="product-wrapper mt-55">
                    <div className="row">

                      {/********************/}
                      {article?.map((item, index)=>
                          <div key={index} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-box mb-40">
                              <div className="product-box-wrapper">
                                <div className="product-img">
                                  <img src={item?.image} className="article-img" alt="" />
                                  <Link to={`/single/${item?.id}`} className="d-block">
                                    <div className="second-img">
                                      <img src={item?.image_hover} alt="" className="article-img" />
                                    </div>
                                  </Link>
                                  <Link to="" onClick={()=>setId(item?.id)} className="product-img-link quick-view-1" data-bs-toggle="modal" data-bs-target="#allproduct-modal">Quick view</Link>
                                  <span className="sale bg-red text-white">{item?.onsale}</span>
                                </div>
                                <div className="product-desc pb-20">
                                  <div className="product-desc-top">
                                    <div className="categories">
                                      <Link to="/shop" className="product-category"><span>Shoes</span></Link>
                                      <Link to="/shop" className="product-category"><span>Sneaker</span></Link>
                                    </div>
                                    <ul className="color-list">
                                      {/*{variant?.map((item, index)=>(*/}
                                      {/*    <li key={index} style={{backgroundColor: variant?.color?.color_name}} />*/}
                                      {/*))}*/}
                                      <li style={{backgroundColor: 'white'}} />
                                      <li style={{backgroundColor: '#1E73BE'}} />
                                      <li style={{backgroundColor: '#FFD700'}} />
                                      <li style={{backgroundColor: '#DD3333'}} />
                                    </ul>
                                    <Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>
                                  </div>
                                  <Link to="single" className="product-title">{item?.name}</Link>
                                  <div className="price-switcher">
                                    <span className="price switcher-item text-danger">${item?.price}</span>
                                    <Link to="cart" className="add-cart text-capitalize switcher-item">+add to cart</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      )}
                      {/********************/}
                    </div>
                  </div>
                </div>
                {/*Tab one end*/}
                <div className="tab-pane fade" id="shop-tab-4">
                  <div className="container">
                    <div className="row ">
                      <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12 left-category mt-5">
                      {/********************/}
                      {article?.map((item, index)=>
                          <div key={index} className="product-wrapper   ">
                            <div className="product-box mb-40">
                              <div className="product-box-wrapper">
                                <div className="list-product mb-50">
                                  <div className="list-product-wrapper">
                                    <div className="row">
                                      <div className="col-xl-4 col-lg-4 col-md-4">
                                        <div className="list-product-img">
                                          <div className="product-img">
                                            <img src={item?.image} className="article-img" alt="" />
                                            <Link to={`single/${item?.id}`} className="d-block">
                                              <div className="second-img">
                                                <img src={item?.image_hover} alt="" className="article-img" />
                                              </div>
                                            </Link>
                                            <Link to="" onClick={()=>setId(item?.id)} className="product-img-link quick-view-1" data-bs-toggle="modal" data-bs-target="#allproduct-modal">Quick view</Link>
                                            <span className="sale bg-red text-white">{item?.onsale}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-8 col-lg-8 col-md-8">
                                        <div className="list-product-desc">
                                          <h3><Link to="single" className="title mb-15">{item?.name}</Link></h3>
                                          <StarRating count={5} symbol="★" color2={'#ffd700'} />
                                          <div className="price"><span>${item?.price}</span></div>
                                          <div className="desc">
                                            <p>{item?.description}</p>
                                            <ul>
                                              <li>– Light green crewneck sweatshirt.</li>
                                              <li>– Hand pockets.</li>
                                              <li>– Relaxed fit.</li>
                                            </ul>
                                            <Link to="cart" className="list-add-cart-btn mt-40">+Add To Cart</Link>
                                            <Link to="wishlist" data-toggle="tooltip" data-placement="top" title="wishlist"><span><i className="bi bi-heart" /></span></Link>
                                            <Link to="" data-toggle="tooltip" data-placement="top" title="compare"><span><i className="bi bi-back" /></span></Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* /. list product */}
                              </div>
                            </div>
                            {/* /. product box */}
                          </div>
                      )}
                      {/********************/}
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 f ">
                        <div className="widget mt-50">
                        <h4 className="mb-30">Featured</h4>
                        <div className="post-box">
                          <ul>
                            {onsale?.map((item, index)=>
                                <li key={index}>
                                  <div className="post-img">
                                    <img src={item?.image} className="w-100" alt="" />
                                  </div>
                                  <div className="post-img-desc">
                                    <Link to={`/single/${item?.id}`}>{item?.name}</Link>
                                    <div className="price">{item?.description.slice(0,30)}...</div>
                                    <div className="price">${item?.price}</div>
                                  </div>
                                </li>
                            )}
                          </ul>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* /. filter content end */}
            {/* pagination */}
            <div className="col-12 mb-5 mt-60 d-flex justify-content-center">
            <Stack spacing={2}>
              <Pagination color="primary" variant="text" count={num_pages} page={page}
                          onChange={(e,value)=>setPage(value)}/>
            </Stack>
            </div>
          </div>
          {/* /. shop products */}
        </div>
      </div>
    </div>
  </div>
      <div className="modal fade" id="allproduct-modal">
        <div className="modal-dialog modal-dialog-centered product-modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
            <div className="d-flex align-items-center justify-content-center" style={{ marginLeft:-100, marginTop:-50}}>
              <Modal images={images} variant={variant} one={one}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default AllProducts
