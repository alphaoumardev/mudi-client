import Crumb from "../little/Crumb";
import {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import StarRating from "react-star-rate";
import Modal from "../items/Modal";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useDispatch,} from "react-redux";
import {
  getAllProductAction,
  getColors,
  getImages, getNewProducts,
  getOneProduct,
  getOnsales,
  getProductsByVariant, getSizes, getTags
} from "../redux/Actions/productsActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {addToWishlist, removeItemFromWishlist} from "../redux/Actions/wishlistAction";

const Shop = ({user, products, tags, sizes, colors, one, images, onsale, variant,})=>
{
  const [id, setId] = useState(1)
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [loadmore, setLoadmore] = useState(12)
  const [more, setMore] = useState(5);

  const togglePopup = () =>{setIsOpen(!isOpen)}
  const close = ()=>{setIsOpen(false)}
  if(!isOpen)
  {
    setTimeout(close, 15000)
  }
  let genre = location.pathname.split('/')[1]
  // let {genre} = useParams()
  let {type} = useParams()

  const dispatch = useDispatch()
  useEffect(()=>
  {
    dispatch(getOneProduct(id))
    dispatch(getImages(id))
    dispatch(getProductsByVariant(id))
    dispatch(getOnsales())
    dispatch(getAllProductAction(genre, type,))
    dispatch(getColors())
    dispatch(getSizes())
    dispatch(getTags())
    dispatch(getNewProducts())
  },[dispatch, genre, type, id])

  const [value, setValue] = useState([100, 500]);
  const handleChange = (event, newValue) =>
  {
    setValue(newValue);
  };
  const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('wish')));
  return(
  <div>
  <Crumb/>
  <div className="shop-body mb-90 ml-3">
    <div className="container-fluid">
      <div className="shop-wrapper">
        <div className="row">
          <div className="col-xl-3 hidden-xl">
            {/* widget */}
            <div className="widget">
              <h4 className="mb-30">Product Categories</h4>
              <Link to="/shop">All <span>(0)</span></Link>
              <div className="accordion" id="accordionExample">
                <div className="list">
                  <Link to=" ">Accessories <span>(0)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-1">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-1" className="collapse show">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="/shop">New</Link></li>
                        <li><Link to="/shop">Discount</Link></li>
                        <li><Link to="/men/accessories">Watch</Link></li>
                        <li><Link to="/men/accessories">Belt</Link></li>
                        <li><Link to="/men/accessories">Digit</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <Link to=" ">Home &amp; kits <span>(10)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-2">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-2" className="collapse">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="/home kits/living room">Chair <span>(30)</span></Link></li>
                        <li><Link to="/home kits/bedroom">Bedroom <span>(45)</span></Link></li>
                        <li><Link to="/home kits/bathroom">Bathroom <span>(45)</span></Link></li>
                        <li><Link to="/home kits/decore">Decore <span>(20)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <Link to=" ">Handbag <span>(10)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-3">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-3" className="collapse">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="/men/hand%bags">Men bags <span>(1)</span></Link></li>
                        <li><Link to="/women/hand%bags">Women bags <span>(5)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <Link to=" ">Kids <span>(15)</span></Link>
                  <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-4">
                    <span className="float-right"><i className="bi bi-chevron-right" /></span>
                  </button>
                  <div id="collapse-4" className="collapse">
                    <div className="sidebar-list">
                      <ul>
                        <li><Link to="/kids/clothing">Clothing <span>(1)</span></Link></li>
                        <li><Link to="/kids/gift">Gift <span>(5)</span></Link></li>
                        <li><Link to="/kids/travel">Travel <span>(32)</span></Link></li>
                        <li><Link to="/kids/shoes">Shoes <span>(32)</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Filter By Price</h4>
              <form action="#">
                <div className="price-filter">
                  <Box sx={{ width: 250 }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="on"
                        color="secondary"
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
            <div className="widget mt-50">
              <h4 className="mb-30">Filter By Color</h4>
              <ul className="color-list">
                {colors?.map((item, index)=>
                  <li key={index} style={{backgroundColor: item?.color_name}} />
                )}
              </ul>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Filter By Size</h4>
              <div className="size-link">
                {sizes?.map((item, index)=>
                  <Link key={index} to="shop">{item?.size_name}</Link>
                )}
              </div>
            </div>
            <div className="widget mt-50">
              <h4 className="mb-30">Featured</h4>
              <div className="post-box">
                <ul>
                  {onsale?.slice(0, more)?.map((item, index)=>
                      <li key={index}>
                        <div className="post-img">
                          <img src={item?.image} className="w-100" alt="" />
                        </div>
                        <div className="post-img-desc">
                          <Link to={`/single/${item?.id}`}>{item?.name}</Link>
                          <div className="price">{item?.description.slice(0,15)}...</div>
                          <div className="price">${item?.price}</div>
                        </div>
                      </li>
                  )}
                  <Link to="" className="load-more text-center ml-5" onClick={()=>setMore(more => more+2)}>MORE...</Link>

                </ul>
              </div>
            </div>
            <div className="widget mt-50">
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
          {/* /. widget */}
          <div className="col-xl-9">
            <div className="filter-heading">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="filter-shown-item">
                    <p className="mb-0">Showing <span>1</span>–<span>24</span> of <span className="total_count">56</span> results</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="shop-filter-tab">
                    <ul className="nav nav-pills" role="tablist">
                      <li><span>Views</span></li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-2" data-placement="top" title="3 grid"><i className="bi bi-grid" /></a>
                      </li>
                      <li className="nav-item">
                        <a data-toggle="pill" href="#shop-tab-3" data-placement="top" title="4 grid"><i className="bi bi-grid-3x3-gap" /></a>
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
                </div>
              </div>
            </div>
            {/* /. filter heading */}
            <div className="filter-content">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="shop-tab-2">
                  <div className="product-wrapper mt-55">
                    <div className="row">
                      {products?.slice(0, loadmore)?.map((item, index)=>
                          <div key={index} className="col-xl-4 col-md-4 col-6">
                            <div className="product-box mb-40">
                              <div className="product-box-wrapper">
                                <div className="product-img">
                                  <img src={item?.image}  alt="" style={{maxWidth:345, maxHeight:410, width:345, height:410, objectFit:"cover"}} />
                                  <Link to={`/single/${item.id}`} className="d-block">
                                    <div className="second-img">
                                      <img src={item?.image_hover} alt="" style={{width:345, height:410, objectFit:"cover"}} />
                                    </div>
                                  </Link>
                                  <Link to={item?.id} id="product-popup-1" className="product-img-link quick-view-1">
                                    <p data-bs-toggle="modal" datatype={item?.id} onClick={()=>setId(item?.id)} data-bs-target="#product-modal">Quick  View</p>
                                  </Link>
                                </div>
                                <div className="product-desc pb-20">
                                  <div className="product-desc-top">
                                    <div className="categories">
                                      <Link to="/shop" className="product-category text-capitalize"><span>{item?.category?.type?.type_name}</span></Link>
                                    </div>
                                    <span  className="wishlist float-right">
                                      {item.id === liked && <span>
                                        <FavoriteIcon sx={{color:"red"}} onClick={()=>setLiked(0)}/>       </span>}
                                      {item.id !== liked && <span>
                                        <FavoriteBorderIcon color="inherit"
                                                             onClick={()=>
                                                             {
                                                               setLiked(item.id);
                                                               dispatch(addToWishlist(item?.id, user))}}/></span>}
                                    </span>
                                  </div>
                                  <Link to={`/single/${item?.id}`} className="product-title">{item?.name}</Link>
                                  <div className="price-switcher">
                                    <span className="price switcher-item">${item?.price}</span>
                                    <Link to={`/single/${item?.id}`} onClick={()=>setId(item?.id)} className="add-cart text-capitalize switcher-item">+add to cart</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="shop-tab-3">
                  <div className="product-wrapper mt-55">
                    <div className="row">
                      {products?.slice(0, loadmore)?.map((item, index)=>
                          <div key={index} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="product-box mb-40">
                              <div className="product-box-wrapper">
                                <div className="product-img">
                                  <img src={item?.image}  alt=""  style={{width:250, height:300, objectFit:"contain"}}/>
                                  <Link to={`/single/${item.id}`} className="d-block">
                                    <div className="second-img">
                                      <img src={item?.image_hover} alt="" style={{width:250, height:300, objectFit:"contain"}} />
                                    </div>
                                  </Link>
                                  <Link to=" " id="product-popup-1" className="product-img-link quick-view-1">
                                    <p data-bs-toggle="modal" data-bs-target="#product-modal" onClick={()=>setId(item?.id)}>Quick  View</p>
                                  </Link>
                                </div>
                                <div className="product-desc pb-20">
                                  <div className="product-desc-top">
                                    <div className="categories">
                                      <Link to="/shop" className="product-category text-capitalize "><span>{item?.category?.type?.type_name}</span></Link>
                                    </div>
                                    <span  className="wishlist float-right">
                                      {item.id === liked && <span>
                                      <FavoriteIcon sx={{color:"red"}} onClick={()=>setLiked(0)}/> </span>}

                                      {item.id !== liked &&<span>
                                        <FavoriteBorderIcon color="inherit"
                                                            onClick={()=>
                                                            {
                                                              setLiked(item.id);
                                                              dispatch(addToWishlist(item?.id, user))}}/></span>}
                                    </span>

                                    {/*<Link to="wishlist" className="wishlist float-right"><span><i className="bi bi-heart" /></span></Link>*/}
                                  </div>
                                  <Link to="/shop" className="product-title">{item?.name}</Link>
                                  <div className="price-switcher">
                                    <span className="price switcher-item">${item?.price}</span>
                                    <Link to={`/single/${item.id}`} className="add-cart text-capitalize switcher-item">+add to cart</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="shop-tab-4">
                  <div className="product-wrapper mt-55">
                    {products?.slice(0, loadmore)?.map((item, index)=>
                        <div key={index} className="product-box mb-40">
                          <div className="product-box-wrapper">
                            <div className="list-product mb-50">
                              <div className="list-product-wrapper">
                                <div className="row">
                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="list-product-img">
                                      <div className="product-img">
                                        <img src={item?.image} alt="" style={{width:345, height:410, objectFit:"contain"}}/>
                                        <Link to={`/single/${item?.id}`} className="d-block">
                                          <div className="second-img">
                                            <img src={item?.image_hover} alt="" style={{width:345, height:410, objectFit:"contain"}}/>
                                          </div>
                                        </Link>
                                        <Link to=" " id="product-popup-1" className="product-img-link quick-view-1">
                                          <p data-bs-toggle="modal" data-bs-target="#product-modal" onClick={()=>setId(item?.id)}>Quick  View</p>
                                        </Link>
                                        <span className="sale bg-red text-white">{item?.onsale}!</span>
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
                                        <Link to={`/single/${item.id}`} className="list-add-cart-btn text-capitalize mt-40">+add  to cart</Link>

                                        <Link to="" >
                                          {item.id === liked &&
                                              <FavoriteIcon sx={{color:"red"}} onClick={()=>setLiked(0)}/>}
                                          {item.id !== liked &&
                                          <span><FavoriteBorderIcon color="inherit" onClick={()=>{setLiked(item.id);
                                                          dispatch(addToWishlist(item?.id, user))}}/></span>}
                                        </Link>
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
                    )}
                  </div>
                </div>
                <div className="text-center mt-20">
                  <button type="button" className="btn btn-outline-dark " onClick={()=>setLoadmore(loadmore => loadmore+3)}>SEE MORE...</button>
                </div>
              </div>
            </div>
            {/* /. filter content */}
          </div>
          {/* /. shop products */}
        </div>
      </div>
    </div>
  </div>

  {/* product popup start */}
    <div className="modal fade" id="product-modal">
      <div className="modal-dialog modal-dialog-centered product-modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
          <div className="d-flex align-items-center justify-content-center" style={{ marginLeft:-100, marginTop:-50}}>
            <Modal images={images} variant={variant} one={one} />
          </div>
        </div>
      </div>
    </div>
</div>

    )
}
export  default Shop
