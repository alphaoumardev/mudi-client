import {Link} from "react-router-dom";

const ProductItem = ({article})=>
{
    return(
        <div className="product-card-list row mb-n5">
        <Link to="single" className="product-thumb-list col-md-4 mb-5">
            <span className="onsale bg-danger">{article.onsale}!</span>
            <img src={article.image} alt="image_not_found" />
        </Link>
        {/* thumb end */}
        <div className="product-content-list col-md-8 mb-5">
            <div className="product-category-links">
                <Link to="#">Bowls, Gadgets &amp; Utensils</Link>, <Link to="#">Drinkware</Link>, <Link to="#">Storage</Link>, <Link to="#">Table Linens</Link>
            </div>
            <h4><Link to={`single/${article.id}`} className="product-title">{article.name}</Link></h4>
            <h5 className="product-price-list"><del className="old-price"> </del> <span className="new-price">${article.price}</span>
            </h5>
            <p>{article.description}</p>
            {/* actions  */}
            <ul className="actions actions-horizontal">
                <li className="action whish-list">
                    <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal"><i className="bi bi-bag-plus" /></button>
                </li>
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
export default ProductItem
