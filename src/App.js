import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Products from "./pages/Products";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import {Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollUp from "./little/ScrollUp";
import BlogIndex from "./blog/BlogIndex";
import BlogAbout from "./blog/BlogAbout";
import Author from "./blog/Author";
import BlogGrid from "./blog/BlogGrid";
import BlogList from "./blog/BlogList";
import BlogCategory from "./blog/BlogCategory";
import AllBlogPosts from "./blog/AllBlogPosts";
import PostDetail from "./blog/PostDetail";
import Contact from "./blog/Contact";
import AllProCrumb from "./little/AllProCrumb";
import Page404 from "./pages/Page404";
import ResetPassword from "./pages/account/ResetPassword";
import ResetPasswordConfirm from "./pages/account/ResetPasswordConfirm";
import Activate from "./pages/account/Activate";
import Top from "./little/Top";
import Wishlist from "./pages/Wishlist";
import MyAccount from "./pages/MyAccount";
import Spinner from "./little/Spinner";
import {useSelector} from "react-redux";
import {Fragment} from "react";
import Success from "./components/Success";

function App()
{
  const {user, error,isAuthenticated, isLoading} = useSelector((state) =>state.authReducer)
  const {wishlistItem} = useSelector(state => state.wishlistReducer)
  const {variant} = useSelector(state => state.getproductByVariantReducer)
  const {images,} = useSelector(state => state.getImagesReducer)
  const {products, wishlisted} = useSelector(state => state.getAllProductsReducer)
  const {tags} = useSelector(state => state.getTagsReducer)
  const {sizes} = useSelector(state => state.getSizesReducer)
  const {colors} = useSelector(state => state.getColorsReducer)
  const {one} = useSelector(state => state.getOneProductReducer)
  const {onsale} = useSelector(state => state.getOnsaleProductsReducer)
  const {cartItem, order_total, cart_count} = useSelector((state) =>state.cartReducer)
  const {subcates} = useSelector(state => state.getProductBySubcategoriesReducer)
  const {wishlist_count} = useSelector(state => state.wishlistReducer)
  const {article, num_pages} = useSelector(state => state.getProductsByPagegReducer)
  const {sliders} = useSelector(state => state.getSlidersReducer)
  const {address} = useSelector(state => state.getShippingAddressReducer)
  const {orderItem} = useSelector(state => state.getMyorderReducer)

  return (
        <Top>
          {isLoading &&  <Fragment><Spinner/></Fragment> }

          <Navbar user={user} subcates={subcates} cart_count={cart_count} cartItem={cartItem} order_total={order_total} wishlist_count={wishlist_count} isAuthenticated={isAuthenticated}/>
          <Routes>
            <Route path="/" element={<Products article={article} num_pages={num_pages} tags={tags} sizes={sizes} colors={colors} one={one} images={images} onsale={onsale} variant={variant} sliders={sliders}/>}/>
            <Route exact path="/:genre"  element={<Products article={article} num_pages={num_pages} tags={tags} sizes={sizes} colors={colors} one={one} images={images} onsale={onsale} variant={variant} sliders={sliders}/>}/>


            <Route path="*" element={<Page404/>} />
            <Route path="/products" element={<Products article={article} num_pages={num_pages} tags={tags} sizes={sizes} colors={colors} one={one} images={images} onsale={onsale} variant={variant}/>}/>
            <Route path="/shop" element={<Shop one={one} images={images} variant={variant} user={user} onsale={onsale} colors={colors} tags={tags} sizes={sizes} products={products} wishlisted={wishlisted}/>}/>
            <Route path="/:genre/:type" element={<Shop one={one} images={images} variant={variant} user={user} onsale={onsale} colors={colors} tags={tags} sizes={sizes} products={products} wishlisted={wishlisted}/>}/>
            <Route path="/single/:id" element={<SingleProduct one={one} images={images} variant={variant}/>}/>
            <Route path="/:genre/single/:id" element={<SingleProduct one={one} images={images} variant={variant}/>}/>
            <Route path="/:genre/:type/single/:id" element={<SingleProduct one={one} images={images} variant={variant}/>}/>
            <Route path="/allproducts" element={<AllProCrumb/>}/>

            {/*    The blog post */}
            <Route path="blog" exact element={<BlogIndex/>}/>
            <Route path="/about" element={<BlogAbout/>}/>
            <Route path="/author" element={<Author/>}/>
            <Route path="/blogrid" element={<BlogGrid/>}/>
            <Route path="/bloglist" element={<BlogList/>}/>
            <Route path="/blogcategory" element={<BlogCategory/>}/>
            <Route path="/allblogposts" element={<AllBlogPosts/>}/>
            <Route path="/post" element={<PostDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/*<Route exact  path="/login" element={<Login error={error} isLoading={isLoading} user={user}/>} />*/}
            <Route exact  path="/register" element={<Register isLoading={isLoading} error={error} isAuthenticated={isAuthenticated}/>} />

            {isAuthenticated?
                <>
                  <Route path="/activate/:uid/:token" element={<Activate/>}/>
                  <Route path="/resetpassword"   element={<ResetPassword/>}/>
                  <Route path="/resetpassword/confirm/:uid/:token"   element={<ResetPasswordConfirm/>}/>
                  <Route path="/cart" element={<Cart cartItem={cartItem} order_total={order_total} address={address} user={user}/>}/>
                  <Route path="/cart/:id" element={<Cart cartItem={cartItem} order_total={order_total} address={address} user={user}/>}/>

                  <Route path="/checkout" element={<Checkout order_total={order_total} address={address} cartItem={cartItem} user={user}/>}/>
                  <Route path="/wishlist" element={<Wishlist user={user} images={images} variant={variant} wishlistItem={wishlistItem}/>}/>
                  <Route path="/myaccount" element={<MyAccount orderItem={orderItem}/>}/>
                  <Route path="/success" element={<Success/>}/>
                </>:
                <>
                  <Route path="/login" element={<Login error={error} isLoading={isLoading} user={user} />}/>
                </>
            }

              </Routes>

          <ScrollUp/>
          <Footer/>
        </Top>
  );
}

export default App;
