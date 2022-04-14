import Featured from "../components/Featured";
import Sliders from "../components/Sliders";
import AllProducts from "../components/AllProducts";
import NewArrivals from "../little/NewArrivals";
import RelatedProduct from "../little/RelatedProduct";
import Category from "../components/Category";
import BannerTab2 from "../little/BannerTab2";
import BannerDecore from "../little/BannerDecore";
import LargeBanner from "../components/LargeBanner";

const Products = () =>
{
    return(
    <div>
  <Sliders/>
  <Category/>
  <br/>
  <RelatedProduct/>
  <BannerTab2/>
  <div className="col-12">
    <section className="section-title text-center pt-4">
      <h3 className="title">Featured Products</h3>
    </section>
  </div> {/*Title*/}
  <Featured/>
  <BannerDecore/>
  <NewArrivals/>
  <div className="col-12">
    <section className="section-title text-center pt-4">
      <h3 className="title">More Products</h3>
    </section>
  </div> {/*Title*/}
  <AllProducts/>
  <LargeBanner/>
  <RelatedProduct/>
        </div>
    )
}
export default Products
