import {Link} from "react-router-dom";

const ProductGrid = ({article})=>
{
    return(
        <div className="col-sm-6 col-md-3 mb-3">
            <div className="product-card w-75 w-75">
                <Link to={`/single/${article.id}`} className="product-thumb">
                    <span className="onsale bg-danger">{article.onsale}!</span>
                    <img src={article.image} alt="image_not_found" />
                </Link>
                {/* thumb end */}
                <div className="product-content">
                    <h4><Link to={`/single/${article.id}`} className="product-title">{article.name}</Link></h4>
                    <div className="product-group">
                        <h5 className="product-price"><del className="old-price">${article.discount_id}</del> <span className="new-price text-black-50">${article.price}</span></h5>
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="product-btn">Add to cart</button>
                    </div>
                </div>
                {/* actions  */}
                <ul className="actions actions-verticale">
                    <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="bi bi-heart" /></button>
                    </li>
                    <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="bi bi-eye" /></button>
                    </li>
                    <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="bi bi-arrow-repeat" /></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ProductGrid
