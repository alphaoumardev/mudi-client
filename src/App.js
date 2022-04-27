import Home from "./pages/Home";
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
import AllProCrumb from "./pages/AllProCrumb";
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

function App()
{
  let {user, error, isLoading} = useSelector((state) =>state.authReducer)
  return (
        <Top>
          {isLoading &&  <Fragment><Spinner/></Fragment> }

          <Navbar />
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route exact path="/home"   element={<Home/>}/>
            <Route exact path="/:genre"   element={<Products/>}/>
            {/*<Route exact path="/:genre/:type"   element={<Home/>}/>*/}

            {user &&
                <>
              <Route path="/activate/:uid/:token" element={<Activate/>}/>
              <Route path="/resetpassword"   element={<ResetPassword/>}/>
              <Route path="/resetpassword/confirm/:uid/:token"   element={<ResetPasswordConfirm/>}/>
              <Route path="/cart" element={<Cart/>}/>
                <Route path="/cart/:id" element={<Cart/>}/>

              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>
              <Route path="/myaccount" element={<MyAccount/>}/>
                </>
              }


            <Route path="*" element={<Page404/>} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/shop"    element={<Shop/>}/>
            <Route path="/single/:id" element={<SingleProduct/>}/>
            <Route path="/:genre/single/:id" element={<SingleProduct/>}/>
            <Route path="/:genre/:type/single/:id" element={<SingleProduct/>}/>
            <Route path="/allproducts" element={<AllProCrumb/>}/>
            <Route path="/:genre/:type" element={<Shop/>}/>

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
            <Route exact  path="/login" element={<Login/>} />
            <Route exact  path="/register" element={<Register/>} />
          </Routes>

          <ScrollUp/>
          <Footer/>
        </Top>
  );
}

export default App;
