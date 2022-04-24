import Crumb from "../little/Crumb";

const MyAccount = ()=>
{
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
                                    <a className="nav-link" href="/login">Logout</a>
                                </div>
                                <div className="col-xl-7 user-dashboard-tab__content tab-content">
                                    <div className="tab-pane fade show active" id="dashboard">
                                        <p>Hello <strong>John</strong> (not <strong>John</strong>? <a
                                            href="login-register.html">Log out</a>)</p>
                                        <p>From your account dashboard. you can easily check &amp; view your <a href="">recent
                                            orders</a>, manage your <a href="">shipping and billing addresses</a> and <a
                                            href="">edit your password and account details</a>.</p>
                                    </div>
                                    <div className="tab-pane fade" id="orders">
                                        <div className="message-box mb--30 d-none">
                                            <p><i className="fa fa-check-circle"> </i>No order has been made yet.</p>
                                            <a href="shop.html">Go Shop</a>
                                        </div>
                                        <div className="table-content table-responsive">
                                            <table className="table text-center">
                                                <thead>
                                                <tr>
                                                    <th>Order</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td className="wide-column">September 19, 2018</td>
                                                    <td>Processing</td>
                                                    <td className="wide-column">$49.00 for 1 item</td>
                                                    <td><a href="product-details.html" className="btn btn-outline-primary">View</a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="wide-column">September 19, 2018</td>
                                                    <td>Processing</td>
                                                    <td className="wide-column">$49.00 for 1 item</td>
                                                    <td><a href="product-details.html" className="btn btn-outline-primary">View</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="wishlist">
                                        <div className="message-box mb--30 d-none">
                                            <p><i className="fa fa-check-circle"> </i>No order has been made yet.</p>
                                            <a href="shop.html">Go Shop</a>
                                        </div>
                                        <div className="table-content table-responsive">
                                            <table className="table text-center">
                                                <thead>
                                                <tr>
                                                    <th>Order</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td className="wide-column">September 19, 2018</td>
                                                    <td>Processing</td>
                                                    <td className="wide-column">$49.00 for 1 item</td>
                                                    <td><a href="product-details.html" className="btn btn-outline-primary">Add To Cart</a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="wide-column">September 19, 2018</td>
                                                    <td>Processing</td>
                                                    <td className="wide-column">$49.00 for 1 item</td>
                                                    <td><a href="product-details.html" className="btn btn-outline-primary">Add To Cart</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="downloads">
                                        <div className="message-box mb--30 d-none">
                                            <p><i className="fa fa-exclamation-circle"></i>No downloads available yet.
                                            </p>
                                            <a href="shop.html">Go Shop</a>
                                        </div>
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
                                                    <td>August 10, 2018</td>
                                                    <td className="wide-column">Never</td>
                                                    <td><a href="#" className="btn">Download File</a></td>
                                                </tr>
                                                <tr>
                                                    <td className="wide-column">Furtrate</td>
                                                    <td>August 10, 2018</td>
                                                    <td className="wide-column">Never</td>
                                                    <td><a href="#" className="btn">Download File</a></td>
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
                                                    <h4 className="mb--20">Billing address</h4>
                                                    <a href="">Edit</a>
                                                    <p>You have not set up this type of address yet.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text-block">
                                                    <h4 className="mb--20">Shopping address</h4>
                                                    <a href="">Edit</a>
                                                    <p>You have not set up this type of address yet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="accountdetails">
                                        <form action="#" className="form">
                                            <div className="col-md-6 mb-sm-3">
                                                <div className="checkout-form-list">
                                                    <label className="form__label" htmlFor="f_name">First name <span
                                                        className="required">*</span></label>
                                                    <input type="text" name="f_name" id="f_name"
                                                           className="form__input"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-sm-3">
                                                    <div className="checkout-form-list">
                                                        <label className="form__label" htmlFor="l_name">Last name <span
                                                            className="required">*</span></label>
                                                        <input type="text" name="l_name" id="l_name"
                                                               className="form__input"/>
                                                    </div>
                                                </div>
                                            <div className="col-xl-6">
                                                <div className="checkout-form-list">
                                                    <label className="form__label" htmlFor="d_name">Display
                                                        name <span className="required">*</span></label>
                                                    <input type="text" name="d_name" id="d_name"
                                                           className="form__input"/>
                                                    <span className="form__notes"><em>This will be how your name will be displayed in the account section and in reviews</em></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="checkout-form-list">
                                                    <label className="form__label" htmlFor="email">Email
                                                        Address <span className="required">*</span></label>
                                                    <input type="email" name="email" id="email"
                                                           className="form__input"/>
                                                </div>
                                            </div>
                                            <legend className="form__legend">Password change</legend>
                                            <div className="col-xl-6">
                                                <div className="checkout-form-list">
                                                    <label className="form__label" htmlFor="cur_pass">Current
                                                        password (leave blank to leave unchanged)</label>
                                                    <input type="password" name="cur_pass" id="cur_pass"
                                                           className="form__input"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="checkout-form-list">
                                                    <label className="form__label" htmlFor="new_pass">New
                                                        password (leave blank to leave unchanged)</label>
                                                    <input type="password" name="new_pass" id="new_pass"
                                                           className="form__input"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="checkout-form-list">
                                                    <label className="form__label" htmlFor="conf_new_pass">Confirm
                                                        new password</label>
                                                    <input type="password" name="conf_new_pass"
                                                           id="conf_new_pass" className="form__input"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 float-right mb-5">
                                                <div className="form__group">
                                                    <input type="submit" value="Save Changes" className="btn btn-outline-primary"/>
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
