import {useState, useEffect} from "react";
import {Avatar, Badge, IconButton, TextField, } from "@mui/material";
import {Link, useLocation, useParams} from "react-router-dom";
import {getUserProfile, load_user, logout} from '../redux/Actions/authActions'
import {useDispatch, useSelector} from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {getProductsBySubcatesAction} from "../redux/Actions/productsActions";
import {getCartItems, removeItemFromCart} from "../redux/Actions/cartAction";
import {getWishlistItems} from "../redux/Actions/wishlistAction";
import Menu from "./Menu";

const Navbar =({setQuery})=>
{
    const dispatch = useDispatch()
    const location = useLocation();
    const {user, profile} = useSelector((state) =>state.authReducer)
    const {cartItem, order_total, cart_count} = useSelector((state) =>state.cartReducer)
    const {wishlist_count} = useSelector(state => state.wishlistReducer)
    const {subcates} = useSelector(state => state.getProductBySubcategoriesReducer)

    const cart = Array.from(cartItem)
    let genre = location.pathname.split('/')[1]
    // let type = location.pathname.split('/')[2]
    // let {genre} = useParams()
    let {type} = useParams()

      useEffect(() =>
    {
        dispatch(getProductsBySubcatesAction(genre, type))
        if(user)
        {
            dispatch(load_user())
            dispatch(getWishlistItems())
            dispatch(getCartItems())
            dispatch(getUserProfile())
        }
        else
        {
            localStorage.clear()
        }
    }, [dispatch, genre, type]);

    const [isOpen, setIsOpen] = useState(false);
    const [isOp, setIsOp] = useState(false);
    const [searchButton, setSearchButton] = useState(false);
    const toggleSearchButton = () =>{setSearchButton(!searchButton)}

    const close = () =>
    {
        setIsOpen(false)
        setIsOp(false)
    }
    const closing = ()=>{setSearchButton(false)}
    if(!isOpen || !isOp || !searchButton){setTimeout(close, 5000)}
    if(!searchButton){setInterval(closing, 20000)}
    // console.log([].profile?.avatar)
    return(
        <div>
            <header className="header pt-10 pb-10  is-sticky header-static  " >
                <div className="container-fluid" >
                    <div className="header-nav position-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-3 ">
                                <div className="logo-img" >
                                    <Link to="/"><img src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 hidden-md position-static ">
                                <div className="header-nav">
                                    <nav className="d-flex justify-content-around">
                                        <ul>
                                            <Menu/>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-2 col-6 col-md-6 col-sm-6 col-9 d-flex justify-content-end">
                                <div className="header-right">
                                    {user ?
                                        <ul className="text-right ">
                                            <li className="menu-rights">
                                                <span>
                                                    <Link to={'/shop'}><i onClick={toggleSearchButton} className="bi bi-search" title="Looking for something?" /></Link>
                                                    {searchButton && <TextField onChange={(e)=>setQuery(e.target.value)} id="standard-size-small" defaultValue="" placeholder="Search" size="small" variant="standard" style={{paddingLeft:10}}/>}
                                                </span>
                                            </li>
                                            <li>
                                                <p className="text-danger"><b> <i></i>{user?.first_name}</b></p>
                                            </li>
                                            <li className="menu-rights">
                                                    <Link to="wishlist" data-toggle="tooltip" data-placement="bottom"
                                                          data-original-title="view wishlist">
                                                        <FavoriteIcon color="warning"/>
                                                        <Badge badgeContent={wishlist_count} color="secondary"/>
                                                    </Link>
                                            </li>
                                            <li className="menu-rights">
                                                <div className="minicart">
                                                    <div className="minicart-body">
                                                        <div className="minicart-content">
                                                                <ul className="text-left">
                                                                    {cart.slice(0, 4).map((item, index) =>
                                                                        <li key={index}>
                                                                            <div className="minicart-img">
                                                                                <Link to={`/single/${item.product.id}`}
                                                                                      className="p-0"><img
                                                                                    src={item?.product.image}
                                                                                    className="w-75 h-75" alt=""/></Link>
                                                                            </div>
                                                                            <div className="minicart-desc">
                                                                                <Link to={`/single/${item.product.id}`}
                                                                                      className="p-0">{item?.product.name}</Link>
                                                                                <strong
                                                                                    className="float-end">{item.quantity} ×
                                                                                    $ {item?.product.price}</strong>
                                                                            </div>
                                                                            <div className="remove">
                                                                                <button className="close-btn"
                                                                                        onClick={() => dispatch(removeItemFromCart(item.id))}>
                                                                                    <i className="bi bi-x"/>
                                                                                </button>
                                                                            </div>
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                            </div>
                                                    </div>
                                                    <div className="minicart-checkout">
                                                        <div className="minicart-checkout-heading mt-8 mb-25 overflow-hidden">
                                                            <strong className="float-left">Subtotal:</strong>
                                                            <span className="float-end text-danger fs-5 ">${order_total}</span>
                                                        </div>
                                                        <div className="minicart-checkout-links">
                                                            <Link to="cart" className="generic-btn black-hover-btn text-uppercase w-100 mb-20">View cart</Link>
                                                            <Link to="checkout" className="generic-btn black-hover-btn text-uppercase w-100 mb-20">Checkout</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to="cart">
                                                    <ShoppingBagOutlinedIcon color="action" />
                                                    <Badge badgeContent={cart_count} color="primary"/>
                                                </Link>
                                            </li>
                                            <li className="menu-rights">
                                            <IconButton sx={{p: 0}}>
                                                {profile?.map((item, index)=>
                                                <Avatar key={index} alt={user?.first_name?.slice(0, 1)}
                                                        src={item?.avatar}/>
                                                    )}
                                            </IconButton>
                                            <ul className="submenu bold-content text-right">
                                                <li><Link to="/myaccount">MyAccount</Link></li>
                                                <li><Link to="/checkout">Checkout</Link></li>
                                                <li><Link to="/shop">Shop</Link></li>
                                                <li><Link to="/wishlist">Wishlist</Link></li>
                                                <li><Link to="/questions">FAQs</Link></li>
                                                <li><Link to='/login' onClick={()=>dispatch(logout())}><b>Logout</b></Link></li>
                                            </ul>
                                        </li>
                                        </ul>:
                                        <ul>
                                            <li className="menu-rights">
                                                <span className="">
                                                    <Link to={'/shop'}><i onClick={toggleSearchButton} className="bi bi-search" title="Looking for something?" /></Link>
                                                    {searchButton && <TextField onChange={(e)=>setQuery(e.target.value)} id="standard-size-small" defaultValue="" placeholder="Search" size="small" variant="standard" style={{paddingLeft:10}}/>}
                                                </span>
                                            </li>
                                            <Link to="/login" ><b>Login </b><i className="bi bi-person-hearts"/></Link>
                                            <li className="menu-rights">
                                                <Link to="/login"><IconButton sx={{p: 0}}><Avatar alt="M"   src=''/></IconButton></Link>
                                            </li>
                                        </ul>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Navbar
