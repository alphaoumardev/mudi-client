import Crumb from "../little/Crumb";

const Checkout = ()=>
{
    return(
      <div>
  {/* shop body section start */}
        <Crumb/>
  <main style={{margin:20}}>
    <h2 className="cart-title text-center text-uppercase">Checkout</h2>
    {/* coupon-area start */}
    <section className="coupon-area pt-30 pb-30">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <div className="coupon-accordion">
              <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="coupon-accordion">
              <h3>Have a coupon? <span id="showcoupon_coupon">Click here to enter your code</span></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="checkout-area pb-70">
      <div className="container">
        <form action="#">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5">
              <div className="checkbox-form">
                <h3>Billing Details</h3>
                <div className="row">
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
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Email Address <span className="required">*</span></label>
                      <input type="email" placeholder="me@gmail.com" required/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Phone <span className="required">*</span></label>
                      <input type="text" placeholder="" required/>
                    </div>
                  </div>

                  <div className="col-md-6">
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
                      <label>State / County <span className="required">*</span></label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Town / City <span className="required">*</span></label>
                      <input type="text" placeholder="Town / City" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Postcode / Zip <span className="required">*</span></label>
                      <input type="text" maxLength={6} placeholder="Postcode / Zip" />
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
                    <button type="submit" className="btn btn-dark text-uppercase text-hide">Place Your order</button>
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
</div>

    )
}
export default Checkout
