import Crumb from "../little/Crumb";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getWishlistItems, removeItemFromWishlist} from "../redux/Actions/wishlistAction";
import {getImages, getProductsByVariant} from "../redux/Actions/productsActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {addToCart,} from "../redux/Actions/cartAction";
import {Link} from "react-router-dom";

const Wishlist = ()=>
{
    const [id, setId] = useState(1);
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [open, setOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    const dispatch = useDispatch()

    const {user} = useSelector((state) =>state.authReducer)
    const {variant} = useSelector(state => state.getproductByVariantReducer)
    const {images,} = useSelector(state => state.getImagesReducer)
    const {wishlistItem} = useSelector(state => state.wishlistReducer)

    const wish = Array.from(wishlistItem)
    useEffect(() =>
    {
        dispatch(getWishlistItems())
        dispatch(getProductsByVariant(id))
        dispatch(getImages(id))
    }, [dispatch, id]);
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
                            setOpen(false)
                            dispatch(removeItemFromWishlist(deleteItemId));
                            dispatch(getWishlistItems())
                        }} className="text-danger">Remove</Button>
                    </DialogActions>
                </Dialog>
            </div>
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
                                    <form onSubmit={()=>{}}>
                                    {wish.length>0 ?
                                        <table className="table table-style-2 wishlist-table text-center">
                                            <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                                <th>Product</th>
                                                <th>Stock Status</th>
                                                <th>Price</th>
                                                <th>color</th>
                                                <th>size</th>
                                                <th>quantity</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {wish?.map((item, index)=>
                                                <tr key={index} onChange={()=>{setId(item.product.id); setDeleteItemId(item?.id)}} className="wish-item">
                                                    <td className="">
                                                        <DeleteOutlineIcon className="text-danger wishlist-delete" titleAccess="Remove"
                                                                           onClick={()=>{setOpen(true); setDeleteItemId(item.id) }} />
                                                    </td>
                                                    <td className="product-thumbnail text-left">
                                                        <img src={item.product.image}   alt="Product Thumnail"/>
                                                    </td>
                                                    <td className="product-name">
                                                        <div>
                                                            <h6><Link to={`/single/${item.product.id}`} className="product-title text-left">{item.product.name}</Link></h6>
                                                        </div>
                                                    </td>
                                                    <td className="product-stock">
                                                        {item.product.stock>0 && <span>In Stock</span>}
                                                    </td>
                                                    <td className="product-price">
                                                    <span className="product-price-wrapper">
                                                        <span className="money">${item.product.price}</span>
                                                    </span>
                                                    </td>
                                                    <td className="product-price">
                                                    <span className="product-price-wrapper" >
                                                        <select onChange={(e=>setColor(e.target.value))} required={true}  data-testid="size" className="size   text-uppercase " >
                                                            <option  value="default">Color</option>
                                                            {images?.map((itemColor, index) =>
                                                                <option   className='' key={index} value={itemColor?.color_name?.color_name}>
                                                                    {itemColor?.color_name?.color_name}
                                                                </option>
                                                            )}
                                                        </select>
                                                    </span>
                                                    </td>
                                                    <td className="product-price">
                                                    <span className="product-price-wrapper">
                                                        <select onChange={(e=>setSize(e.target.value))} required={true}  data-testid="size" className="size   text-uppercase " >
                                                            <option  value="default">Size</option>
                                                            {variant?.map((itemSize, index) =>
                                                                <option   className='' key={index} value={itemSize?.size?.size_name}>
                                                                    {itemSize?.size?.size_name}
                                                                </option>
                                                            )}
                                                        </select>
                                                    </span>
                                                    </td>
                                                    <td className="product-price">
                                                    <span className="product-price-wrapper">
                                                        <input className="rounded-3 d-flex justify-content-center size" required={true} type="number" defaultValue={1} min={1} max={item?.product?.stock} style={{marginLeft: 45, width: 50}} onChange={(e)=>setQuantity(e.target.value)}/>
                                                    </span>
                                                    </td>
                                                    <td className="product-action-btn">

                                                        <Button href="/cart"  className="bg-black rounded-3 text-light"
                                                                disabled={id !== item.product.id || size==='' || color === '' || quantity>item.product.stock || user === null }
                                                                onClick={()=>{
                                                                  dispatch(addToCart(id, color, size, quantity, user))
                                                                  dispatch(removeItemFromWishlist(deleteItemId))
                                                                  window.location.reload()
                                                                }}>Add to cart</Button>
                                                    </td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>:
                                        <div className="d-flex text-center justify-content-center align-items-center mt-3">
                                        <span><Link to="/shop" className="product-title">It's empty check the new articles </Link></span>
                                        <img src="https://res.cloudinary.com/diallo/image/upload/v1651565552/empty-wishlist_lskog2.jpg" alt="" className="empty "/>
                                    </div>
                                     }
                                    </form>
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
