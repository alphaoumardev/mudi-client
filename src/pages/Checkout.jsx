import Crumb from "../little/Crumb";
import { Country, State, City }  from 'country-state-city';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAddress, getAddressAction} from "../redux/Actions/orderAction";
import {Link, useNavigate} from "react-router-dom";
import Paypal from "../components/Paypal";
import {getShippingAddressReducer} from "../redux/reducers/orderReducer";

const Checkout = ({order_total, address, cartItem})=>
{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCountryCode, setSelectedCountryCode] = useState('')
  const [selectedStateCode, setSelectedStateCode] = useState('')
  const [selectedCityCode, setSelectedCityCode] = useState('')


  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [details, setDetails] = useState('');
  const [order_note, setOrder_note] = useState('');
  const {user} = useSelector(state=>state.authReducer);
  // console.log(country, state, zip, city, street, details, order_note, )

  //This is the list of countries
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setCountries(Country.getAllCountries())
    setStates(State.getStatesOfCountry(`${selectedCountryCode}`))
    setCities(City.getCitiesOfState(`${selectedCountryCode}`,`${selectedStateCode}`))
    dispatch(getAddressAction())

  }, [dispatch, selectedCountryCode, selectedStateCode, selectedCityCode])

  // console.log(selectedCountryCode, selectedStateCode, selectedCityCode)
  const onSubmit = (e) =>
  {
    e.preventDefault();
    dispatch(addAddress(user, country, state, zip, city, street, details, order_note))
    return navigate('/cart')
  }
  return(
      <div>
        <Crumb/>
  <main style={{margin:20}}>
    <h2 className="cart-title text-center text-uppercase">Checkout</h2>
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
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5">
              <form  onSubmit={onSubmit}>
                <h3>Billing Details</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="country-select">
                      <label>Country <span className="required">*</span></label>
                      <select required={true}  onChange={(e)=>{setSelectedCountryCode(e.target.value.split(',')[1]); setCountry(e.target.value.split(',')[0]) }} >
                        {countries?.map((pays, index)=>
                            <option key={index}   value={[pays.name, pays.isoCode]}>{pays.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="country-select">
                      <label>State / Province / Region <span className="required">*</span></label>
                      <select required={true} onChange={(e)=>{setSelectedStateCode(e.target.value.split(',')[1]); setState(e.target.value.split(',')[0])}}>
                        {states?.map((province, index)=>
                            <option key={index}  value={[province.name, province.isoCode]} >{province.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="country-select">
                      <label>Town / City <span className="required">*</span></label>
                      <select required={true} onChange={(e)=>{setSelectedCityCode(e.target.value.split(',')[0]); setCity(e.target.value.split(',')[1])}} >
                        <option value="">Select City</option>
                        {cities?.map((ville, index)=>
                            <option key={index}  value={[ville.isoCode, ville.name]}>{ville.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>Postcode / Zip <span className="required">*</span></label>
                      <input required={true} type="text" maxLength={6} placeholder="Postcode / Zip" onChange={(e)=>setZip(e.target.value)}/>
                    </div>
                  </div>
                  <div className="d-flex"><b className="mr-2">Notice: </b><p> If the city does not exist on option form, fill it in the address</p></div>

                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>Address <span className="required">*</span></label>
                      <input required={true} type="text" placeholder="Street address" onChange={(e)=>setStreet(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <input required={true} type="text" placeholder="Apartment, suite, unit etc." onChange={(e)=>setDetails(e.target.value)}/>
                    </div>
                  </div>
                  <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea id="checkout-mess" cols={30} rows={10} placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} onChange={(e)=>setOrder_note(e.target.value)} />
                      </div>
                    </div>

                  <div className="">

                    {/*<input type="submit" className="btn btn-primary float-end " value="Change Your Address" />*/}
                    {/*onClick={(e)=>handleSubmit(e)}>Change Your Address</input>*/}
                  </div>
                    <input type="submit" className="btn btn-primary w-50 float-right" value="Change Your Address"/>
                </div>
              </form>
            </div>

            <div className="col-lg-5 cart-widget">
                <div className="your-order">
                  <h3 className="text-center">Your order</h3>
                  <div className="your-order-table table-responsive">
                    <div>
                      <b>Shipping Address</b>
                      <div>{address?.user?.first_name} {address?.user?.last_name}, {address?.user?.email}</div>
                      <p>{address?.country} {address?.state} {address?.city} {address?.street}
                        {address?.details} {address?.zip} {address?.order_note}
                      </p>
                      <Link to={"/checkout"} className="btn btn-outline-dark float-end">Change Address</Link>

                    </div>
                    <table>
                      <thead>
                      <tr>
                        <th className="product-name">Order Dividends</th>
                        <th className="float-end ">Total</th>
                      </tr>
                      </thead>
                      <tbody>
                      </tbody>
                      <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td><span className="amount">${order_total}</span></td>
                      </tr>
                      <tr className="cart-subtotal">
                        <th>Shipping Fee</th>
                        <td><span className="amount">${12}</span></td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td><strong><span className="amount">${order_total +12}</span></strong>
                        </td>
                      </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="accordion" id="accordionExample">
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
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button className="btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Direct Bank Transfer
                            </button>
                          </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            Make your payment directly into our bank account. Please use your Order ID
                            as the payment
                            reference. Your order won’t be
                            shipped until the funds have cleared in our account.
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="order-button-payment mt-20">
                      {/*<button type="submit" className="btn btn-dark text-uppercase text-hide mb-3">Place Your order</button>*/}
                      {Array.from(cartItem).length>0 && address && <Paypal className="rounded-3"/>}
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </section>
  </main>
</div>

    )
}
export default Checkout
