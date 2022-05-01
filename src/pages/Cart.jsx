import Crumb from "../little/Crumb";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCartItems, removeItemFromCart, updateCartItem} from "../redux/Actions/cartAction";

const Cart = ()=>
{
  const dispatch = useDispatch()
  const {cartItem} = useSelector((state) =>state.cartReducer)
  const {id} = useParams()
  useEffect(() =>
  {
    dispatch(getCartItems())
  }, [dispatch, id]);
  let ca = Array.from(cartItem)
  return(
        <div>
  {/* shop body section start */}
  <section className="cart-body mb-90 gray-border-top ">
    <div className="has-breadcrumb-content">
      <div className="container container-1430">
        <Crumb/>
        <h2 className="cart-title text-center text-uppercase">Cart</h2>

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
                      {ca?.map((items, index)=>
                          <tr key={index}>
                            <td>
                              <div className="table-data">
                                <button className="close-btn" onClick={()=> dispatch(removeItemFromCart(items.id))} >
                                  <i className="bi bi-x"/>
                                </button>
                              </div>
                            </td>
                            <td className="product-thumbnail">
                              <img src={items?.product?.image}  alt="" />
                            </td>
                            <td>
                              <div className="table-data">
                                <h6><Link to={`/single/${items.product.id}`} className="title">{items.product.name}</Link></h6>
                              </div>
                            </td>
                            <td>
                              <div className="table-data">
                                <span className="price">${items.product.price}</span>
                              </div>
                            </td>
                            <td>
                              <div className="table-data">
                                <input type="number" defaultValue={items.quantity} min={1} style={{marginRight: 20, width: 119}}
                                  onChange={(e)=>
                                  {
                                    dispatch(updateCartItem(items.id, e.target.value, items.product.id ))
                                  }}
                                />
                                {/*<p  style={{marginRight: 20, width: 119}} >{items.quantity}</p>*/}

                              </div>
                            </td>
                            <td>
                              <div className="table-data">
                                <span className="total">${items.total}</span>
                              </div>
                            </td>
                          </tr>

                      )}
                      </tbody>
                    </table>
                  </div>
                  <div className="cupon">
                    <input type="text" placeholder="Cupon code" className="text-left pl-3 w-50" style={{marginRight: 20, width: 119}} />
                    <button className="generic-btn border-0  red-hover-btn text-uppercase">Apply Cupon</button>
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
                <Link to="/checkout" className="mt-40 generic-btn red-hover-btn w-100 d-block" style={{height: 50}}>Procced to checkout</Link>
              </div>
              {/* /. cart widget */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
    )
}
export default Cart
