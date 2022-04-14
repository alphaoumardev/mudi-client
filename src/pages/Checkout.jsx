import Crumb from "../little/Crumb";
import {Link} from "react-router-dom";

const Checkout = ()=>
{
    return(
      <div>
  {/* shop body section start */}
        <Crumb/>
  <main style={{margin:20}}>
    {/* breadcrumb-area-start */}
    {/* breadcrumb-area-end */}
    <h2 className="cart-title text-center">Cart</h2>

    {/* coupon-area start */}
    <section className="coupon-area pt-30 pb-30">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <div className="coupon-accordion">
              {/* ACCORDION START */}
              <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
              <div id="checkout-login" className="coupon-content">
                <div className="coupon-info">
                  <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                    sit amet ipsum luctus.</p>
                  <form action="">
                    <p className="form-row-first">
                      <label>Username or email <span className="required">*</span></label>
                      <input type="text" />
                    </p>
                    <p className="form-row-last">
                      <label>Password <span className="required">*</span></label>
                      <input type="text" />
                    </p>
                    <p className="form-row">
                      <button className="btn theme-btn" type="submit">Login</button>
                      <label>
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </p>
                    <p className="lost-password">
                      <Link to="javascript:void(0)">Lost your password?</Link>
                    </p>
                  </form>
                </div>
              </div>
              {/* ACCORDION END */}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="coupon-accordion">
              {/* ACCORDION START */}
              <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
              <div id="checkout_coupon" className="coupon-checkout-content">
                <div className="coupon-info">
                  <form action=" ">
                    <p className="checkout-coupon">
                      <input type="text" placeholder="Coupon Code" />
                      <button className="btn theme-btn" type="submit">Apply Coupon</button>
                    </p>
                  </form>
                </div>
              </div>
              {/* ACCORDION END */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* coupon-area end */}
    {/* checkout-area start */}
    <section className="checkout-area pb-70">
      <div className="container">
        <form action="#">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5">
              <div className="checkbox-form">
                <h3>Billing Details</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="country-select">
                      <label>Country <span className="required">*</span></label>
                      <select>
                        <option value="volvo">bangladesh</option>
                        <option value="saab">Algeria</option>
                        <option value="mercedes">Afghanistan</option>
                        <option value="audi">Ghana</option>
                        <option value="audi2">Albania</option>
                        <option value="audi3">Bahrain</option>
                        <option value="audi4">Colombia</option>
                        <option value="audi5">Dominican Republic</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>First Name <span className="required">*</span></label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Last Name <span className="required">*</span></label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>Company Name</label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>Address <span className="required">*</span></label>
                      <input type="text" placeholder="Street address" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>Town / City <span className="required">*</span></label>
                      <input type="text" placeholder="Town / City" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>State / County <span className="required">*</span></label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Postcode / Zip <span className="required">*</span></label>
                      <input type="text" placeholder="Postcode / Zip" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Email Address <span className="required">*</span></label>
                      <input type="email" placeholder="" required/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Phone <span className="required">*</span></label>
                      <input type="text" placeholder="Postcode / Zip" required/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list create-acc">
                      <input id="cbox" type="checkbox" />
                      <label>Create an account?</label>
                    </div>
                    <div id="cbox_info" className="checkout-form-list create-account">
                      <p>Create an account by entering the information below. If you are a returning
                        customer please login at the top of the page.</p>
                      <label>Account password <span className="required">*</span></label>
                      <input type="password" placeholder="password" required={true}/>
                    </div>
                  </div>
                </div>
                <div className="different-address">
                  <div className="ship-different-title">
                    <h3>
                      <label>Ship to a different address?</label>
                      <input id="ship-box" type="checkbox" />
                    </h3>
                  </div>
                  <div id="ship-box-info">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select">
                          <label>Country <span className="required">*</span></label>
                          <select>
                            <option value="volvo">bangladesh</option>
                            <option value="saab">Algeria</option>
                            <option value="mercedes">Afghanistan</option>
                            <option value="audi">Ghana</option>
                            <option value="audi2">Albania</option>
                            <option value="audi3">Bahrain</option>
                            <option value="audi4">Colombia</option>
                            <option value="audi5">Dominican Republic</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>First Name <span className="required">*</span></label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Last Name <span className="required">*</span></label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Company Name</label>
                          <input type="text" placeholder="Company Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Address <span className="required">*</span></label>
                          <input type="text" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Town / City <span className="required">*</span></label>
                          <input type="text" placeholder="Town / City" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>State / County <span className="required">*</span></label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Postcode / Zip <span className="required">*</span></label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Email Address <span className="required">*</span></label>
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Phone <span className="required">*</span></label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-notes">
                    <div className="checkout-form-list">
                      <label>Order Notes</label>
                      <textarea id="checkout-mess" cols={30} rows={10} placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="your-order mb-30 ">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-name">Product</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-name">
                          Vestibulum suscipit <strong className="product-quantity"> × 1</strong>
                        </td>
                        <td className="product-total">
                          <span className="amount">$165.00</span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          Vestibulum dictum magna <strong className="product-quantity"> × 1</strong>
                        </td>
                        <td className="product-total">
                          <span className="amount">$50.00</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td><span className="amount">$215.00</span></td>
                      </tr>
                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                          <ul>
                            <li>
                              <input type="radio" />
                              <label>
                                Flat Rate: <span className="amount">$7.00</span>
                              </label>
                            </li>
                            <li>
                              <input type="radio" />
                              <label>Free Shipping:</label>
                            </li>
                            <li />
                          </ul>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td><strong><span className="amount">$215.00</span></strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment-method">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Direct Bank Transfer
                          </button>
                        </h5>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                          Make your payment directly into our bank account. Please use your Order ID
                          as the payment
                          reference. Your order won’t be
                          shipped until the funds have cleared in our account.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Cheque Payment
                          </button>
                        </h5>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                          Please send your cheque to Store Name, Store Street, Store Town, Store
                          State / County, Store
                          Postcode.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            PayPal
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                          Pay via PayPal; you can pay with your credit card if you don’t have a
                          PayPal account.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-button-payment mt-20">
                    <button type="submit" className="btn btn-outline-dark text-uppercase text-hide">Place order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    {/* checkout-area end */}
  </main>
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
                    <img src="img/product/10.jpg" className="w-100" alt="" />
                  </div>
                </div>
                <div className="tab-pane fade" id="product-popup-2">
                  <div className="product-popup-img">
                    <img src="img/product/11.jpg" className="w-100" alt="" />
                  </div>
                </div>
                <div className="tab-pane fade" id="product-popup-3">
                  <div className="product-popup-img">
                    <img src="img/product/12.jpg" className="w-100" alt="" />
                  </div>
                </div>
              </div>
              <ul className="nav nav-pills justify-content-center mt-10" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <Link className="active" data-toggle="pill" to="#product-popup-1">
                    <img src="img/product/10.jpg" className="w-100" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="" data-toggle="pill" to="#product-popup-2">
                    <img src="img/product/11.jpg" className="w-100" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="" data-toggle="pill" to="#product-popup-3">
                    <img src="img/product/12.jpg" className="w-100" alt="" />
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
                <Link to="single" className="all-feature">See all feature</Link>
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
export default Checkout
