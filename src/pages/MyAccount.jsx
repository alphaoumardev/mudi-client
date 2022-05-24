import Crumb from "../little/Crumb";
import {useDispatch, useSelector,} from "react-redux";
import {useEffect,} from "react";
import {getAddressAction, getMyOrderAction} from "../redux/Actions/orderAction";
import {getWishlistItems, } from "../redux/Actions/wishlistAction";
import {Link} from "react-router-dom";
import {logout} from "../redux/Actions/authActions";
const MyAccount = ()=>
{
    const dispatch = useDispatch()

    const {wishlistItem} = useSelector(state => state.wishlistReducer)
    const {address} = useSelector(state => state.getShippingAddressReducer)
    const {orderItem} = useSelector(state => state.getMyorderReducer)

    useEffect(() =>
    {
        dispatch(getMyOrderAction())
        dispatch(getAddressAction())
        dispatch(getWishlistItems())
    }, [dispatch]);

    return(
        <div className="">
            <Crumb/>
            <div className=" ">
                <div className="container ">
                    <div className="row ">
                        <div className=" d-flex justify-content-center ">
                            <div className="col-xl-10 d-flex  user-dashboard-tab flex-column flex-md-row">
                                <div className="col-xl-3 user-dashboard-tab__head nav flex-md-column" role="tablist"
                                     aria-orientation="vertical">
                                    <a className="nav-link active" data-toggle="pill" role="tab" href="#dashboard"
                                       aria-controls="dashboard" aria-selected="true">Dashboard</a>
                                    <a className="nav-link" data-toggle="pill" role="tab" href="#orders"
                                       aria-controls="orders" aria-selected="true">Orders</a>
                                    <a className="nav-link" data-toggle="pill" role="tab" href="#wishlist"
                                    aria-controls="orders" aria-selected="true">Wishlist</a>
                                    <a className="nav-link" data-toggle="pill" role="tab" href="#downloads"
                                       aria-controls="downloads" aria-selected="true">Downloads</a>
                                    <a className="nav-link" data-toggle="pill" role="tab" href="#addresses"
                                       aria-controls="addresses" aria-selected="true">Addresses</a>
                                    <a className="nav-link" data-toggle="pill" role="tab" href="#accountdetails"
                                       aria-controls="accountdetails" aria-selected="true">Account Details</a>
                                    <a className="nav-link" href="/login" onClick={()=>dispatch(logout())}>Logout</a>
                                </div>
                                <div className="col-xl-7 user-dashboard-tab__content tab-content">
                                    <div className="tab-pane fade show active" id="dashboard">
                                        <p>Hello <strong>{address?.user?.first_name}</strong></p>
                                        <p>From your account dashboard. you can easily check &amp; view your
                                            <a href="#orders"> recent orders</a>, manage your
                                            <a href="#addresses">shipping and billing addresses</a> and
                                            <a href="">edit your password and account details</a>.
                                        </p>
                                    </div>
                                        <div className="tab-pane fade" id="orders">
                                        {orderItem?.length > 0 ?
                                            <div className="table-content table-responsive">
                                                <table className="table text-center">
                                                    <thead>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <th>Order</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {orderItem?.map((item, index) =>
                                                        <tr key={index}>
                                                            <td>
                                                                {item?.paid_at.substring(0, 10)}<br/>
                                                                {item?.order_reference?.substring(0, 20)?.toUpperCase()?.split('-')}
                                                            </td>
                                                            <td>
                                                                <table>
                                                                    <tbody>
                                                                    {item?.cart?.map((p, i) =>
                                                                        <tr key={i}>
                                                                            <td className="order-cover"><img
                                                                                className="order-image"
                                                                                src={p?.product?.image} alt=""/></td>
                                                                            <td className="">{p?.product?.name}</td>
                                                                            <td className="">${p?.product?.price}</td>
                                                                            <td className="">{p?.quantity}</td>
                                                                            <td>Proccessing</td>
                                                                            <td><a href={`/single/${p?.product?.id}`}
                                                                                   className="btn btn-outline-secondary">View</a>
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td>{item?.status}</td>
                                                            <td className="">${item?.amount}</td>
                                                        </tr>
                                                    )}
                                                    </tbody>
                                                </table>
                                            </div>:
                                            <div  id="orders" className="d-flex text-center justify-content-center align-items-center mt-3">
                                                <img src="https://res.cloudinary.com/diallo/image/upload/v1651554703/konguo_itlqhu.png" alt="" className="empty "/>
                                            </div>
                                        }
                                        </div>
                                        <div className="tab-pane fade" id="wishlist">
                                        {wishlistItem?.length > 0 ?
                                            <div className="table-content table-responsive">
                                                <table className="table table-style-2 wishlist-table text-center">
                                                    <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>&nbsp;</th>
                                                        <th>Product</th>
                                                        <th>Stock Status</th>
                                                        <th>Price</th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {wishlistItem?.map((item, index) =>
                                                        <tr key={index} className="wish-item">
                                                            <td className=""> {index + 1}</td>
                                                            <td className="product-thumbnail text-left">
                                                                <img src={item?.product?.image} alt="Product Thumnail"/>
                                                            </td>
                                                            <td className="product-name">
                                                                <div>
                                                                    <h6><Link to={`/single/${item?.product?.id}`}
                                                                              className="product-title text-left">{item.product.name}</Link>
                                                                    </h6>
                                                                </div>
                                                            </td>
                                                            <td className="">
                                                                <span className="in-stock">
                                                                    {item?.product?.category?.genre?.genre_name} {item?.product?.category?.type?.type_name}
                                                                </span>

                                                            </td>
                                                            <td className="product-stock">
                                                                {item?.product?.stock > 0 && <span>In Stock</span>}
                                                            </td>
                                                            <td className="product-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money">${item?.product?.price}</span>
                                                            </span>
                                                            </td>
                                                            <td className="product-action-btn">

                                                                <Link to="/wishlist"
                                                                      className="btn btn-outline-dark">View</Link>
                                                            </td>
                                                        </tr>
                                                    )}
                                                    </tbody>
                                                </table>
                                            </div>:
                                            <div className="d-flex text-center justify-content-center align-items-center mt-3">
                                                <span><Link to="/shop" className="product-title">It's empty check the new articles </Link></span>
                                                <img src="https://res.cloudinary.com/diallo/image/upload/v1651565552/empty-wishlist_lskog2.jpg" alt="" className="empty "/>
                                            </div>
                                        }
                                        </div>
                                    <div className="tab-pane fade" id="downloads">
                                        <div className="table-content table-responsive">
                                            <table className="table text-center">
                                                <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Downloads</th>
                                                    <th>Expires</th>
                                                    <th>Download</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="wide-column">Furtrate</td>
                                                    <td>August 10, 2022</td>
                                                    <td className="wide-column">Never</td>
                                                    <td><a href=" " className="btn">Download File</a></td>
                                                </tr>
                                                <tr>
                                                    <td className="wide-column">Furtrate</td>
                                                    <td>August 10, 2022</td>
                                                    <td className="wide-column">Never</td>
                                                    <td><a href=" " className="btn">Download File</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="addresses">
                                        <p className="mb--20">The following addresses will be used on the checkout page
                                            by default.</p>
                                        <div className="row">
                                            <div className="col-md-6 mb-sm--20">
                                                <div className="text-block">
                                                    <h4 className="mb--20">Shopping address</h4>
                                                    <a href="/checkout" className="btn btn-outline-dark">Edit</a>
                                                    <div>{address?.user?.first_name} {address?.user?.last_name}  {address?.user?.email}</div>
                                                    <p>{address?.country} {address?.state} {address?.city} {address?.street}
                                                        {address?.details} {address?.zip} {address?.order_note}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text-block"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="accountdetails">
                                        <form action="#" className="col-xl-12 d-flex">
                                            <div className="col-xl-6">
                                                <legend className="form__legend">Basic infos</legend>
                                                <div className="col-md-10 mb-sm-3">
                                                    <div className="checkout-form-list">
                                                        <label className="form__label" htmlFor="f_name">First name <span
                                                            className="required">*</span></label>
                                                        <input type="text" name="f_name" id="f_name"
                                                               className="form__input"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 mb-sm-3">
                                                        <div className="checkout-form-list">
                                                            <label className="form__label" htmlFor="l_name">Last name <span
                                                                className="required">*</span></label>
                                                            <input type="text" name="l_name" id="l_name"
                                                                   className="form__input"/>
                                                        </div>
                                                    </div>
                                                <div className="col-xl-10">
                                                    <div className="checkout-form-list">
                                                        <label className="form__label" htmlFor="d_name">Display
                                                            name <span className="required">*</span></label>
                                                        <input type="text" name="d_name" id="d_name"
                                                               className="form__input"/>
                                                        <span className="form__notes"><em>This will be how your name will be displayed in the account section and in reviews</em></span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-10">
                                                <div className="checkout-form-list">
                                                    <label className="form__label" htmlFor="email">Email
                                                        Address <span className="required">*</span></label>
                                                    <input type="email" name="email" id="email"
                                                           className="form__input"/>
                                                </div>
                                            </div>
                                            </div>

                                            <div className="col-xl-6">
                                                <legend className="form__legend">Password change</legend>
                                                <div className="col-xl-10">
                                                    <div className="checkout-form-list">
                                                        <label className="form__label" htmlFor="cur_pass">Current
                                                            password (leave blank to leave unchanged)</label>
                                                        <input type="password" name="cur_pass" id="cur_pass"
                                                               className="form__input"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-10">
                                                    <div className="checkout-form-list">
                                                        <label className="form__label" htmlFor="new_pass">New
                                                            password (leave blank to leave unchanged)</label>
                                                        <input type="password" name="new_pass" id="new_pass"
                                                               className="form__input"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-10">
                                                    <div className="checkout-form-list">
                                                        <label className="form__label" htmlFor="conf_new_pass">Confirm
                                                            new password</label>
                                                        <input type="password" name="conf_new_pass"
                                                               id="conf_new_pass" className="form__input"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-10 float-right mb-5">
                                                <div className="form__group">
                                                    <input type="submit" value="Save Changes" className="btn btn-outline-primary"/>
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
    )
}
export default MyAccount
