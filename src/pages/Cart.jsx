import Crumb from "../little/Crumb";
import {Link} from "react-router-dom";

const Cart = ()=>
{
    return(
        <div>
  {/* shop body section start */}
  <section className="cart-body mb-90 gray-border-top ">
    <div className="has-breadcrumb-content">
      <div className="container container-1430">
        <Crumb/>

        <div className="cart-body-content">
          <div className="row">
            <div className="col-xl-8">
              <div className="product-content">
                <form action="#">
                  <div className="table-responsive">
                    <table className="table table-2">
                      <thead>
                        <tr>
                          <th className="remove-porduct" />
                          <th className="product-image" />
                          <th className=""><b>Product</b></th>
                          <th>Price</th>
                          <th className="quantity">Quantity</th>
                          <th className="total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="table-data">
                              <button className="close-btn"><i className="bi bi-x" /></button>
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <img src="../assets/img/product/1.jpg" width={80} alt="" />
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <h6><Link to="single" className="title">Blandit vel eros condimentum ulla</Link></h6>
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <span className="price">$90.00</span>
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <input type="number" defaultValue={1} style={{marginRight: 20, width: 119}} />
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <span className="total">$90.00</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-data">
                              <button className="close-btn"><i className="bi bi-x" /></button>
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <img src="../assets/img/product/2.jpg" width={80} alt="" />
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <h6><Link to="single" className="title">Blossom Porcelain Side Plates</Link></h6>
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <span className="price">$90.00</span>
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <input type="number" defaultValue={1} style={{marginRight: 20, width: 119}} />
                            </div>
                          </td>
                          <td>
                            <div className="table-data">
                              <span className="total">$90.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cupon">
                    <input type="text" placeholder="Cupon code" className="text-left pl-3" style={{marginRight: 20, width: 119}} />
                    <button className="generic-btn border-0 red-hover-btn text-uppercase">Apply Cupon</button>
                    <button className="generic-btn border-0 red-hover-btn text-uppercase float-right">Update Cart</button>
                  </div></form>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="cart-widget">
                <h4 className="title">Cart Totals</h4>
                <table className="table table-2 no-border">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>$134.00</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>
                        <h6>Flat rate</h6>
                        <p>Shipping options will be updated during checkout.</p>
                        <Link to="javascript:void(0)" className="price-calculate">Calculate shipping</Link>
                        <div className="calculate-shipping-box">
                          <form action="#" method="POST">
                            <div className="form-group">
                              <div className="cart-select">
                                <select name="country" id="country">
                                  <option value="uk">United Kingdom</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <input type="text" placeholder="Country" />
                            </div>
                            <div className="form-group">
                              <input type="text" placeholder="Town / City" />
                            </div>
                            <div className="form-group">
                              <input type="number" placeholder="Post Code" />
                            </div>
                            <div className="form-group">
                              <button className="generic-btn border-0 red-hover-btn text-uppercase ">Update</button>
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td><strong>$134.00</strong></td>
                    </tr>
                  </tbody>
                </table>
                <Link to="checkout" className="mt-40 generic-btn red-hover-btn w-100 d-block" style={{height: 50}}>Procced to checkout</Link>
              </div>
              {/* /. cart widget */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* shop body section end */}
  {/* product popup start */}
  <section id="product-popup">
    <div className="product-popup-overlay" />
    <div className="product-popup-container">
      <div className="product-inner w-100">
        <div className="product-inner-content">
          <div className="quick-close-action"><i className="bi bi-x" /></div>
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="product-popup-1">
                  <div className="product-popup-img">
                    <img src="../assets/img/product/10.jpg" className="w-100" alt="" />
                  </div>
                </div>
                <div className="tab-pane fade" id="product-popup-2">
                  <div className="product-popup-img">
                    <img src="../assets/img/product/11.jpg" className="w-100" alt="" />
                  </div>
                </div>
                <div className="tab-pane fade" id="product-popup-3">
                  <div className="product-popup-img">
                    <img src="../assets/img/product/12.jpg" className="w-100" alt="" />
                  </div>
                </div>
              </div>
              <ul className="nav nav-pills justify-content-center mt-10" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <Link className="active" data-toggle="pill" to="#product-popup-1">
                    <img src="../assets/img/product/10.jpg" className="w-100" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className data-toggle="pill" to="#product-popup-2">
                    <img src="../assets/img/product/11.jpg" className="w-100" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className data-toggle="pill" to="#product-popup-3">
                    <img src="../assets/img/product/12.jpg" className="w-100" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-6">
              <div className="product-content">
                <div className="product-title">
                  <h2>Nari Narwhal Usb...</h2>
                </div>
                <div className="price">$<span>44.00</span>–<span>$250.00</span></div>
                <Link to="javascript:void(0)" className="all-feature">See all feature</Link>
                <div className="quick-quantity mt-30">
                  <form action="#" method="POST">
                    <input type="number" defaultValue={1} />
                    <button type="submit" className="generic-btn red-hover-btn text-capitalize">add to
                      cart
                    </button></form></div>
                <div className="product-desc pb-20 mt-25 gray-border-top">
                  <p className="mb-0">Typi non habent claritatem insitam, est usus legentis in iis qui
                    facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius
                    quod ii legunt saepius. Claritas est etiam processus A Capitalize on low hanging
                    fruit to identify a ballpark value added activity to beta test. Override the
                    digital...ditional clickthroughs from DevOps. Nanotechnology immersion along the
                    information highway will close the […]</p>
                </div>
                <div className="product-list mt-25">
                  <ul>
                    <li>– Light green crewnec...t.</li>
                    <li>– Hand pockets.</li>
                    <li>– Relaxed fit.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product popup end */}
  {/* startup popup start */}
  <section id="startup-popup">
    <div className="product-popup-overlay has-startup" style={{opacity: 1, visibility: 'visible'}} />
    <div className="startup-popup-body">
      <div className="startup-body-content h-100">
        <div className="row justify-content-end h-100">
          <div className="col-6 h-100">
            <div className="startup-popup-inner h-100">
              <div className="close-search-popup">
                <i className="bi bi-x" />
              </div>
              <div className="startup-popup-main-content">
                <h2>Get Our Email Letter</h2>
                <p className="mb-0">Subscribe to the Mazia store mailing list to receive updates on new
                  arrivals, special offers
                  and other discount information.</p>
                <div className="startup-subscribe-form">
                  <form action="#" method="POST">
                    <input type="text" placeholder="Subscribe to our newsletter" className="mb-30" />
                    <button className="generic-btn red-hover-btn text-uppercase">Subscribe now</button>
                  </form>
                </div>
              </div>
              <div className="startup-popup-sub-content">
                <div className="popup-warning">
                  <input type="checkbox" id="startup-popup-hidden" />
                  <label htmlFor="startup-popup-hidden">Do not show the popup again</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* startup popup end */}
    </div>
    )
}
export default Cart
