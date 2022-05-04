import Crumb from "../little/Crumb";
import {Link,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState,} from "react";
import {getCartItems, removeItemFromCart, updateCartItem} from "../redux/Actions/cartAction";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {getWishlistItems, removeItemFromWishlist} from "../redux/Actions/wishlistAction";

const Cart = ()=>
{
  const dispatch = useDispatch()
  const {cartItem, order_total} = useSelector((state) =>state.cartReducer)
  useEffect(() =>
  {
    dispatch(getCartItems())
  }, [dispatch,]);
  let ca = Array.from(cartItem)

  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
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
              <div className="d-flex text-center justify-content-center align-items-center mt-3">
                <img src="https://res.cloudinary.com/diallo/image/upload/v1651554703/konguo_itlqhu.png" alt="" className="empty "/>
              </div>
                }
            </div>
            <div className="col-xl-4">
              <div className="cart-widget">
                <h4 className="title">Cart Totals</h4>
                <table className="table table-2 no-border">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <th className="text-danger text-end ">${order_total}</th>
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
                      <th className="text-end"><strong >${order_total}</strong></th>
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
