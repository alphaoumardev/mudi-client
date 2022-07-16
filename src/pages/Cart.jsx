import Crumb from "../little/Crumb";
import {Link,} from "react-router-dom";
import {useDispatch, useSelector,} from "react-redux";
import {useEffect, useState,} from "react";
import {getCartItems, removeItemFromCart, updateCartItem} from "../redux/Actions/cartAction";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {getWishlistItems, } from "../redux/Actions/wishlistAction";
import Paypal from "../components/Paypal";
import {getAddressAction} from "../redux/Actions/orderAction";

const Cart = ()=>
{
  const dispatch = useDispatch()

  const {cartItem, order_total} = useSelector((state) =>state.cartReducer)
  const {address} = useSelector(state => state.getShippingAddressReducer)

  useEffect(() =>
  {
    dispatch(getCartItems())
    dispatch(getAddressAction())
  }, [dispatch,]);
  let ca = Array.from(cartItem)
  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [openPaypal, setOpenPaypal] = useState(false);
  return(

  <div>
      <div>
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Are you sure to remove this item?"}</DialogTitle>
              <DialogActions>
                <Button onClick={()=>setOpen(false)} className="text-success">Cancel</Button>
                <Button onClick={()=>
                        {
                          dispatch(removeItemFromCart(itemId))
                          setOpen(false)
                          dispatch(getWishlistItems())
                          window.location.reload()
                        }} className="text-danger">Remove</Button>
              </DialogActions>
            </Dialog>
      </div>
  {/* shop body section start */}
  <section className="cart-body mb-90 gray-border-top ">
    <div className="has-breadcrumb-content">
      <div className="container container-1430">
        <Crumb/>
        <div className="cart-body-content">
          <div className="row">
            <div className="col-xl-8">
              <h2 className="cart-title text-center text-uppercase">Cart</h2>

              {ca.length>0 ?
              <div className="product-content">

                <form >
                  <div className="table-responsive">
                    <table className="table table-2">
                      <thead>
                        <tr>
                          <th className="remove-porduct" />
                          <th className="product-image" />
                          <th className=""><b>Product</b></th>
                          <th>Color</th>
                          <th>Size</th>
                          <th>Price</th>
                          <th className="quantity">Quantity</th>
                          <th className="total">Total</th>
                        </tr>
                      </thead>
                      <tbody>

                      {ca?.map((items, index)=>
                          <tr key={index} onChange={()=>dispatch(getCartItems())}>
                            <td>
                              <div className="">
                                  <DeleteOutlineIcon className="text-danger removeItem" titleAccess="Remove"
                                      onClick={()=>{setOpen(true); setItemId(items.id) }} />
                              </div>
                            </td>
                            <td className="product-thumbnail">
                              <Link to={`/single/${items.product.id}`}><img src={items?.product?.image}  alt="" /></Link>
                            </td>
                            <td>
                              <div className="">
                                <h6><Link to={`/single/${items.product.id}`} className="title">{items.product.name}</Link></h6>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="cart-color" style={{backgroundColor: items?.color}}/>
                              </div>
                            </td>
                            <td>
                              <div className="">
                                <span className="">{items.size}</span>
                              </div>
                            </td>
                            <td>
                              <div className="">
                                <span className="price">${items.product.price}</span>
                              </div>
                            </td>
                            <td>
                              <div className="">
                                <input type="number" defaultValue={items.quantity} min={1} style={{marginRight: 20, width: 119}}
                                  onChange={(e)=>
                                  {
                                    dispatch(updateCartItem(items.id, e.target.value, items.product.id ))
                                  }}
                                />

                              </div>
                            </td>
                            <td>
                              <div className="">
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
                  </div>
                </form>
              </div>:
                <Link to="/shop">
              <div className="d-flex text-center justify-content-center align-items-center mt-3">
                <img src="https://res.cloudinary.com/diallo/image/upload/v1651554703/konguo_itlqhu.png" alt="" className="empty "/>
              </div>
                </Link>
                }
            </div>
            <div className="col-lg-4 cart-widget">
              <div className="your-order">
                <h3 className="text-center">Your order</h3>
                <div className="your-order-table table-responsive">
                  <div>
                    <h4>Shipping Address:</h4>
                    <div><b>{address?.user?.first_name} {address?.user?.last_name}</b> {address?.user?.email}</div>
                    <i>{address?.country} {address?.state} {address?.city} {address?.street}
                      {address?.details} {address?.zip} {address?.order_note}
                    </i>
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
                    {ca.length>0 && address?.country && <button aria-errormessage="your" onClick={()=>{setOpenPaypal(true)}} className="btn btn-dark text-uppercase text-hide mb-3">Place Your order</button>}
                    {openPaypal && <Paypal className="rounded-3"/>}
                  </div>
                </div>
              </div>
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
