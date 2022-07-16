import {Link} from "react-router-dom";

const Menu = ()=>
{
    return(
        <>
            <li>
                <Link to={`/shop`}><span >All</span></Link>
            </li>
            <li className="viso"><Link to={''}><span>Men</span></Link>
                <div className="submenu" style={{backgroundColor: '#f7f3f3', marginLeft:-250}}>
                    <div className="container-1180">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 " >
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">CLOTHING</li>
                                                <li><Link to="login">Activewear</Link></li>
                                                <li><Link to="checkout">Blazer & Sport Coats</Link></li>
                                                <li><Link to="shop">Coats & Jackets</Link></li>
                                                <li><Link to="wishlist">Dress Shirts</Link></li>
                                                <li><Link to="question">Shirts</Link></li>
                                                <li><Link to="question">Sweaters</Link></li>
                                                <li><Link to="question">Socks</Link></li>
                                                <li><Link to="question">Suits</Link></li>
                                                <li><Link to="question">Jeans</Link></li>
                                                <li><Link to="question">Sweatpants</Link></li>
                                                <li><Link to="question">Lounge, Pajamas</Link></li>
                                                <li><Link to="question">Pants</Link></li>
                                                <li><Link to="question">T-shirts</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">SHOES</li>
                                                <li><Link to="/login">Boots</Link></li>
                                                <li><Link to="/checkout">Comfort</Link></li>
                                                <li><Link to="/shop">Loaferes & Slip-Ons</Link></li>
                                                <li><Link to="/wishlist">Dress Shoes</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                                <li><Link to="/question">Slippers</Link></li>
                                                <li><Link to="/question">Sneakers</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">ACCESSORIES</li>
                                                <li><Link to="shop">Special Offers</Link></li>
                                                <li><Link to="shop">Gift Cards</Link></li>
                                                <li><Link to="shop">Backpacks</Link></li>
                                                <li><Link to="about">Bags</Link></li>
                                                <li><Link to="about">Hats</Link></li>
                                                <li><Link to="portfolio">Headphones</Link></li>
                                                <li><Link to="portfolio">Sunglasses & Eyewear</Link></li>
                                                <li><Link to="portfolio">Ties & Pocket Squares</Link></li>
                                                <li><Link to="portfolio">Wallets & Cards</Link></li>
                                                <li><Link to="portfolio">Belts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">DESIGNER</li>
                                                <li><Link to="blog">Designer Clothing</Link></li>
                                                <li><Link to="about">Designer Shoes</Link></li>
                                                <li className="mb-3"><Link to="author">Designer Accessories</Link></li>
                                                <li className="submenu-title mt-5">BIG & TALL</li>
                                                <li><Link to="bloglist">Clothing</Link></li>
                                                <li><Link to="allblogposts">Jeans</Link></li>
                                                <li><Link to="post">Pants</Link></li>
                                                <li><Link to="blogcategory">Shirts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">QUICK LINKS</li>
                                                <li><Link to="shop">New Arrivals</Link></li>
                                                <li><Link to="shop">Gift Cards</Link></li>
                                                <li><Link to="shop">Bestsellers</Link></li>
                                                <li><Link to="about">Men's Wedding</Link></li>
                                                <li><Link to="about">Men's Looks</Link></li>
                                                <li><Link to="portfolio">Sustainable Style</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">TRAVEL</li>
                                                <li><Link to="blog">Luggage</Link></li>
                                                <li><Link to="about">Watches</Link></li>
                                                <li><Link to="author">Fine Jewelry</Link></li>
                                                <li><Link to="blogrid">Gifts & Sets</Link></li>
                                                <li><Link to="bloglist">Hair Products</Link></li>
                                                <li><Link to="allblogposts">Skin Care</Link></li>
                                                <li><Link to="post">Shaving</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-5"> © 2022 All rights reserved by Mudi.com</div>
                </div>
            </li>
            <li className="viso"><Link to={``}><span>Women</span> </Link>
                <div className="submenu" style={{backgroundColor: '#f7f3f3', marginLeft:-310}}>
                    <div className="container-1180">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 " >
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">CLOTHING</li>
                                                <li><Link to="login">Activewear</Link></li>
                                                <li><Link to="checkout">Blazer & Sport Coats</Link></li>
                                                <li><Link to="shop">Coats & Jackets</Link></li>
                                                <li><Link to="wishlist">Dress & Shirts</Link></li>
                                                <li><Link to="question">Shorts</Link></li>
                                                <li><Link to="question">Sweaters</Link></li>
                                                <li><Link to="question">Socks</Link></li>
                                                <li><Link to="question">Maternity</Link></li>
                                                <li><Link to="question">Jeans & Hoodies</Link></li>
                                                <li><Link to="question">Sweatpants</Link></li>
                                                <li><Link to="question">Lounge, Pajamas</Link></li>
                                                <li><Link to="question">Pants & Leggings</Link></li>
                                                <li><Link to="question">Separates</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">SHOES</li>
                                                <li><Link to="/login">Boots</Link></li>
                                                <li><Link to="/login">Booties</Link></li>
                                                <li><Link to="/login">Clogs</Link></li>
                                                <li><Link to="/login">Heels</Link></li>
                                                <li><Link to="/login">Mules & Slides</Link></li>
                                                <li><Link to="/login">Sandals</Link></li>
                                                <li><Link to="/checkout">Comfort</Link></li>
                                                <li><Link to="/shop">Loaferes & Slip-Ons</Link></li>
                                                <li><Link to="/wishlist">Dress Shoes</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                                <li><Link to="/question">Slippers</Link></li>
                                                <li><Link to="/question">Sneakers</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">HANDBAGS</li>
                                                <li><Link to="about">Bags</Link></li>
                                                <li><Link to="shop">Backpacks</Link></li>
                                                <li><Link to="shop">Bucket Bags</Link></li>
                                                <li><Link to="shop">Belt Bags</Link></li>
                                                <li><Link to="about">Puches & Clutches</Link></li>
                                                <li><Link to="portfolio">Satchels</Link></li>
                                                <li><Link to="portfolio">Shoulder Bag</Link></li>
                                                <li><Link to="portfolio">Straw Bags</Link></li>
                                                <li><Link to="portfolio">Wallets & Cards</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">JEWELRY</li>
                                                <li><Link to="blog">Bracelet</Link></li>
                                                <li><Link to="about">Earings</Link></li>
                                                <li><Link to="author">Neckless</Link></li>
                                                <li><Link to="author">Rings</Link></li>
                                                <li><Link to="author">Watches</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">TRAVEL</li>
                                                <li><Link to="blog">Luggage</Link></li>
                                                <li><Link to="about">Watches</Link></li>
                                                <li><Link to="author">Fine Jewelry</Link></li>
                                                <li><Link to="blogrid">Gifts & Sets</Link></li>
                                                <li><Link to="bloglist">Hair Products</Link></li>
                                                <li><Link to="allblogposts">Skin Care</Link></li>
                                                <li><Link to="post">Shaving</Link></li>
                                                <li><Link to="post">Hijabs & Headscarves</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">QUICK LINKS</li>
                                                <li><Link to="shop">New Arrivals</Link></li>
                                                <li><Link to="shop">Gift Cards</Link></li>
                                                <li><Link to="shop">Bestsellers</Link></li>
                                                <li><Link to="about">TopShop</Link></li>
                                                <li><Link to="about">Wedding Shop</Link></li>
                                                <li><Link to="about">Shop By Tend</Link></li>
                                                <li><Link to="portfolio">Sustainable Style</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center mb-5"> © 2022 All rights reserved by Mudi.com</div>
                </div>
            </li>
            <li className="viso"><Link to={``}><span>Kids</span> </Link>
                <div className="submenu" style={{backgroundColor: '#f7f3f3', marginLeft:-380}}>
                    <div className="container-1180">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 " >
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">KID'S CLOTHING</li>
                                                <li><Link to="login">Activewear</Link></li>
                                                <li><Link to="checkout">Blazer & Sport Coats</Link></li>
                                                <li><Link to="shop">Coats & Jackets</Link></li>
                                                <li><Link to="wishlist">Dress Shirts</Link></li>
                                                <li><Link to="question">Shirts</Link></li>
                                                <li><Link to="question">Sweaters</Link></li>
                                                <li><Link to="question">Socks</Link></li>
                                                <li><Link to="question">Suits</Link></li>
                                                <li><Link to="question">Jeans</Link></li>
                                                <li><Link to="question">Sweatpants</Link></li>
                                                <li><Link to="question">Lounge, Pajamas</Link></li>
                                                <li><Link to="question">Pants</Link></li>
                                                <li><Link to="question">T-shirts</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>


                                                <li className="submenu-title">FOOTWEAR</li>
                                                <li><Link to="/login">Casual Shoes</Link></li>
                                                <li><Link to="/checkout">Flipflops</Link></li>
                                                <li><Link to="/shop">Flats</Link></li>
                                                <li><Link to="/wishlist">Dress Shoes</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                                <li><Link to="/question">Heels</Link></li>
                                                <li><Link to="/question">Sneakers</Link></li>
                                                <li><Link to="/question">Shool Shoes</Link></li>
                                                <li><Link to="/question">Socks</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">GIRL'S CLOTHING</li>
                                                <li><Link to="login">Activewear</Link></li>
                                                <li><Link to="checkout">Blazer & Sport Coats</Link></li>
                                                <li><Link to="shop">Coats & Jackets</Link></li>
                                                <li><Link to="wishlist">Dress & Shirts</Link></li>
                                                <li><Link to="question">Shorts</Link></li>
                                                <li><Link to="question">Sweaters</Link></li>
                                                <li><Link to="question">Socks</Link></li>
                                                <li><Link to="question">Maternity</Link></li>
                                                <li><Link to="question">Jeans & Hoodies</Link></li>
                                                <li><Link to="question">Sweatpants</Link></li>
                                                <li><Link to="question">Lounge, Pajamas</Link></li>
                                                <li><Link to="question">Pants & Leggings</Link></li>
                                                <li><Link to="question">Separates</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">DESIGNER</li>
                                                <li><Link to="blog">Designer Clothing</Link></li>
                                                <li><Link to="about">Designer Shoes</Link></li>
                                                <li className="mb-3"><Link to="author">Designer Accessories</Link></li>
                                                <li className="submenu-title mt-5">BIG & TALL</li>
                                                <li><Link to="bloglist">Clothing</Link></li>
                                                <li><Link to="allblogposts">Jeans</Link></li>
                                                <li><Link to="post">Pants</Link></li>
                                                <li><Link to="blogcategory">Shirts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                {/*<li className="submenu-title">QUICK LINKS</li>*/}
                                                {/*<li><Link to="shop">New Arrivals</Link></li>*/}
                                                {/*<li><Link to="shop">Gift Cards</Link></li>*/}
                                                {/*<li><Link to="shop">Bestsellers</Link></li>*/}
                                                {/*<li><Link to="about">Men's Wedding</Link></li>*/}
                                                {/*<li><Link to="about">Men's Looks</Link></li>*/}
                                                {/*<li><Link to="portfolio">Sustainable Style</Link></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">ACCESSORIES</li>
                                                <li><Link to="blog">Bags</Link></li>
                                                <li><Link to="about">Watches</Link></li>
                                                <li><Link to="author">Fine Jewelry</Link></li>
                                                <li><Link to="blogrid">Sunglasses</Link></li>
                                                <li><Link to="bloglist">Protective Gears</Link></li>
                                                <li><Link to="allblogposts">Caps & Hats</Link></li>
                                                <li><Link to="post">Shaving</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-5"> © 2022 All rights reserved by Mudi.com</div>
                </div>
            </li>
            <li className="viso"><Link to={``}><span>Home Kits</span> </Link>
                <div className="submenu" style={{backgroundColor: '#f7f3f3', marginLeft:-450}}>
                    <div className="container-1180">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 " >
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">HOME DECOR</li>
                                                <li><Link to="login">Accent Furniture</Link></li>
                                                <li><Link to="checkout">Art & Wall Decor</Link></li>
                                                <li><Link to="shop">Books & Puzzles</Link></li>
                                                <li><Link to="wishlist">Candales & Diffusers</Link></li>
                                                <li><Link to="question">Decorative Accents</Link></li>
                                                <li><Link to="question">Pillows</Link></li>
                                                <li><Link to="question">Desk Accessories</Link></li>
                                                <li><Link to="question">Jewelry Boxes</Link></li>
                                                <li><Link to="question">Lighting & Lamps</Link></li>
                                                <li><Link to="question">Picture</Link></li>
                                                <li><Link to="question">Rugs</Link></li>
                                                <li><Link to="question">Storage</Link></li>
                                                <li><Link to="question">Blankets</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">SHOES</li>
                                                <li><Link to="/login">Boots</Link></li>
                                                <li><Link to="/checkout">Comfort</Link></li>
                                                <li><Link to="/shop">Loaferes & Slip-Ons</Link></li>
                                                <li><Link to="/wishlist">Dress Shoes</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                                <li><Link to="/question">Slippers</Link></li>
                                                <li><Link to="/question">Sneakers</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">ACCESSORIES</li>
                                                <li><Link to="shop">Special Offers</Link></li>
                                                <li><Link to="shop">Gift Cards</Link></li>
                                                <li><Link to="shop">Backpacks</Link></li>
                                                <li><Link to="about">Bags</Link></li>
                                                <li><Link to="about">Hats</Link></li>
                                                <li><Link to="portfolio">Headphones</Link></li>
                                                <li><Link to="portfolio">Sunglasses & Eyewear</Link></li>
                                                <li><Link to="portfolio">Ties & Pocket Squares</Link></li>
                                                <li><Link to="portfolio">Wallets & Cards</Link></li>
                                                <li><Link to="portfolio">Belts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">DESIGNER</li>
                                                <li><Link to="blog">Designer Clothing</Link></li>
                                                <li><Link to="about">Designer Shoes</Link></li>
                                                <li className="mb-3"><Link to="author">Designer Accessories</Link></li>
                                                <li className="submenu-title mt-5">BIG & TALL</li>
                                                <li><Link to="bloglist">Clothing</Link></li>
                                                <li><Link to="allblogposts">Jeans</Link></li>
                                                <li><Link to="post">Pants</Link></li>
                                                <li><Link to="blogcategory">Shirts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">QUICK LINKS</li>
                                                <li><Link to="shop">New Arrivals</Link></li>
                                                <li><Link to="shop">Gift Cards</Link></li>
                                                <li><Link to="shop">Bestsellers</Link></li>
                                                <li><Link to="about">Men's Wedding</Link></li>
                                                <li><Link to="about">Men's Looks</Link></li>
                                                <li><Link to="portfolio">Sustainable Style</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">TRAVEL</li>
                                                <li><Link to="blog">Luggage</Link></li>
                                                <li><Link to="about">Watches</Link></li>
                                                <li><Link to="author">Fine Jewelry</Link></li>
                                                <li><Link to="blogrid">Gifts & Sets</Link></li>
                                                <li><Link to="bloglist">Hair Products</Link></li>
                                                <li><Link to="allblogposts">Skin Care</Link></li>
                                                <li><Link to="post">Shaving</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-5"> © 2022 All rights reserved by Mudi.com</div>
                </div>
            </li>
            <li className="viso"><Link to={``}><span>Beauty</span> </Link>
                <div className="submenu" style={{backgroundColor: '#f7f3f3', marginLeft:-520}}>
                    <div className="container-1180">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 " >
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">CLOTHING</li>
                                                <li><Link to="login">Activewear</Link></li>
                                                <li><Link to="checkout">Blazer & Sport Coats</Link></li>
                                                <li><Link to="shop">Coats & Jackets</Link></li>
                                                <li><Link to="wishlist">Dress Shirts</Link></li>
                                                <li><Link to="question">Shirts</Link></li>
                                                <li><Link to="question">Sweaters</Link></li>
                                                <li><Link to="question">Socks</Link></li>
                                                <li><Link to="question">Suits</Link></li>
                                                <li><Link to="question">Jeans</Link></li>
                                                <li><Link to="question">Sweatpants</Link></li>
                                                <li><Link to="question">Lounge, Pajamas</Link></li>
                                                <li><Link to="question">Pants</Link></li>
                                                <li><Link to="question">T-shirts</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">SHOES</li>
                                                <li><Link to="/login">Boots</Link></li>
                                                <li><Link to="/checkout">Comfort</Link></li>
                                                <li><Link to="/shop">Loaferes & Slip-Ons</Link></li>
                                                <li><Link to="/wishlist">Dress Shoes</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                                <li><Link to="/question">Slippers</Link></li>
                                                <li><Link to="/question">Sneakers</Link></li>
                                                <li><Link to="/question">Running Shoes</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">ACCESSORIES</li>
                                                <li><Link to="shop">Special Offers</Link></li>
                                                <li><Link to="shop">Gift Cards</Link></li>
                                                <li><Link to="shop">Backpacks</Link></li>
                                                <li><Link to="about">Bags</Link></li>
                                                <li><Link to="about">Hats</Link></li>
                                                <li><Link to="portfolio">Headphones</Link></li>
                                                <li><Link to="portfolio">Sunglasses & Eyewear</Link></li>
                                                <li><Link to="portfolio">Ties & Pocket Squares</Link></li>
                                                <li><Link to="portfolio">Wallets & Cards</Link></li>
                                                <li><Link to="portfolio">Belts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">DESIGNER</li>
                                                <li><Link to="blog">Designer Clothing</Link></li>
                                                <li><Link to="about">Designer Shoes</Link></li>
                                                <li className="mb-3"><Link to="author">Designer Accessories</Link></li>
                                                <li className="submenu-title mt-5">BIG & TALL</li>
                                                <li><Link to="bloglist">Clothing</Link></li>
                                                <li><Link to="allblogposts">Jeans</Link></li>
                                                <li><Link to="post">Pants</Link></li>
                                                <li><Link to="blogcategory">Shirts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">QUICK LINKS</li>
                                                <li><Link to="shop">New Arrivals</Link></li>
                                                <li><Link to="shop">Gift Cards</Link></li>
                                                <li><Link to="shop">Bestsellers</Link></li>
                                                <li><Link to="about">Men's Wedding</Link></li>
                                                <li><Link to="about">Men's Looks</Link></li>
                                                <li><Link to="portfolio">Sustainable Style</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                                        <div className="submenu-menu">
                                            <ul>
                                                <li className="submenu-title">TRAVEL</li>
                                                <li><Link to="blog">Luggage</Link></li>
                                                <li><Link to="about">Watches</Link></li>
                                                <li><Link to="author">Fine Jewelry</Link></li>
                                                <li><Link to="blogrid">Gifts & Sets</Link></li>
                                                <li><Link to="bloglist">Hair Products</Link></li>
                                                <li><Link to="allblogposts">Skin Care</Link></li>
                                                <li><Link to="post">Shaving</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-5"> © 2022 All rights reserved by Mudi.com</div>
                </div>
            </li>
            <li><Link to="contact"><span>Contact-Us</span></Link></li>
        </>
    )
}
export default Menu
