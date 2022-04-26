import Crumb from "../little/Crumb";

const Wishlist = ()=>
{
    return(
        <div>
            {/* shop body section start */}
            <section className="cart-body mb-90 gray-border-top ">
                <div className="has-breadcrumb-content">
                    <div className="col-xl-12">
                        <Crumb/>
                        <h2 className="cart-title text-center text-uppercase">Wishlist</h2>
                        <div className="container mt-3 ">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-xl-10 ">
                                    <div className="table-responsive">
                                        <table className="table table-style-2 wishlist-table text-center">
                                            <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                                <th>Product</th>
                                                <th>Stock Status</th>
                                                <th>Price</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="product-remove text-left"><a href=""><i
                                                    className="bi bi-x"> </i></a>
                                                </td>
                                                <td className="product-thumbnail text-left">
                                                    <img src="../assets/img/product/1.jpg"   alt="Product Thumnail"/>
                                                </td>
                                                <td className="product-name text-left wide-column">
                                                    <h3>
                                                        <a href="product-details.html">Pinstripe slim-fit suit blazer</a>
                                                    </h3>
                                                </td>
                                                <td className="product-stock">
                                                    In Stock
                                                </td>
                                                <td className="product-price">
                                                    <span className="product-price-wrapper">
                                                        <span className="money">$49.00</span>
                                                    </span>
                                                </td>
                                                <td className="product-action-btn">
                                                    <a href="cart.html" className="btn btn-dark">Add to cart</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove text-left"><a href="">
                                                    <i className="bi bi-x"> </i></a>
                                                </td>
                                                <td className="product-thumbnail text-left">
                                                    <img src="../assets/img/product/1.jpg"
                                                         alt="Product Thumnail"/>
                                                </td>
                                                <td className="product-name text-left wide-column">
                                                    <h3>
                                                        <a href="product-details.html">Warm Shaker Solid Wood  End Table</a>
                                                    </h3>
                                                </td>
                                                <td className="product-stock">
                                                    In Stock
                                                </td>
                                                <td className="product-price">
                                                    <span className="product-price-wrapper">
                                                        <span className="money">$49.00</span>
                                                    </span>
                                                </td>
                                                <td className="product-action-btn">
                                                    <a href="cart.html" className="btn btn-dark">Add to cart</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove text-left"><a href="">
                                                    <i className="bi bi-x"> </i></a>
                                                </td>
                                                <td className="product-thumbnail text-left">
                                                    <img src="../assets/img/product/1.jpg"   alt="Product Thumnail"/>
                                                </td>
                                                <td className="product-name text-left wide-column">
                                                    <h3>
                                                        <a href="product-details.html">Atlin Designs Mid Century</a>
                                                    </h3>
                                                </td>
                                                <td className="product-stock">
                                                    In Stock
                                                </td>
                                                <td className="product-price">
                                                    <span className="product-price-wrapper">
                                                        <span className="money">$49.00</span>
                                                    </span>
                                                </td>
                                                <td className="product-action-btn">
                                                    <a href="cart.html" className="btn btn-dark">Add to cart</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove text-left"><a href="">
                                                    <i className="bi bi-x"> </i></a></td>
                                                <td className="product-thumbnail text-left">
                                                    <img src="../assets/img/product/1.jpg"
                                                         alt="Product Thumnail"/>
                                                </td>
                                                <td className="product-name text-left wide-column">
                                                    <h3>
                                                        <a href="product-details.html">Contemporary 5-Light</a>
                                                    </h3>
                                                </td>
                                                <td className="product-stock">
                                                    In Stock
                                                </td>
                                                <td className="product-price">
                                        <span className="product-price-wrapper">
                                            <span className="money">$49.00</span>
                                        </span>
                                            </td>
                                                <td className="product-action-btn">
                                                    <a href="cart.html" className="btn btn-dark">Add to cart</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
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
export default Wishlist
