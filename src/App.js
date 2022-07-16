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
import PrivateRoutes from "./utils/PrivateRoutes";
import {useState} from "react";

function App()
{
  const {isLoading} = useSelector((state) =>state.authReducer)
  const [query, setQuery] = useState('');

  return (
        <Top>
          {isLoading &&  <Fragment><Spinner/></Fragment> }
          <Navbar  setQuery={setQuery}/>
          <Routes>
            <Route exact path="/" element={<Products />}/>
            <Route path="/products" element={<Products/>}/>
            <Route exact path="/:genre" element={<Products/>}/>
            {/*<Route path="/na" element={<Na/>}/>*/}


            <Route path="*" element={<Page404/>} />
            <Route path="/shop" element={<Shop query={query}/>}/>
            {/*<Route path="/shop/:query" element={<Shop />}/>*/}
            <Route path="/:genre/:type" element={<Shop/>}/>
            <Route path="/single/:id" element={<SingleProduct/>}/>
            <Route path="/:genre/single/:id" element={<SingleProduct/>}/>
            <Route path="/:genre/:type/single/:id" element={<SingleProduct/>}/>
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
            <Route exact  path="/login" element={<Login/>} />
            <Route exact  path="/register" element={<Register/>} />
            {/*This is the private routes*/}
            <Route element={<PrivateRoutes/>}>
              <Route path="/activate/:uid/:token" element={<Activate/>}/>
              <Route path="/resetpassword"   element={<ResetPassword/>}/>
              <Route path="/resetpassword/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/cart/:id" element={<Cart />}/>
              <Route path="/checkout" element={<Checkout />}/>
              <Route path="/wishlist" element={<Wishlist />}/>
              <Route path="/myaccount" element={<MyAccount />}/>
              <Route path="/success" element={<Success/>}/>
            </Route>
          </Routes>
          <ScrollUp/>
          <Footer/>
        </Top>
  );
}

export default App;
