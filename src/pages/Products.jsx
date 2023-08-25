import Featured from "../components/Featured";
import Sliders from "../components/Sliders";
import AllProducts from "../components/AllProducts";
import NewArrivals from "../little/NewArrivals";
import RelatedProduct from "../little/RelatedProduct";
import Category from "../components/Category";
import BannerTab2 from "../little/BannerTab2";
import LargeBanner from "../components/LargeBanner";
import Banners from "../components/Banners";
import BannerDecore from "../little/BannerDecore";
import {useSelector} from "react-redux";

const Products = () =>
{
  //this is to create the product
  const {variant} = useSelector(state => state.getproductByVariantReducer)
  const {images,} = useSelector(state => state.getImagesReducer)
  const {tags} = useSelector(state => state.getTagsReducer)
  const {sizes} = useSelector(state => state.getSizesReducer)
  const {colors} = useSelector(state => state.getColorsReducer)
  const {one} = useSelector(state => state.getOneProductReducer)
  const {onsale} = useSelector(state => state.getOnsaleProductsReducer)
  const {article, num_pages} = useSelector(state => state.getProductsByPagegReducer)
  const {sliders} = useSelector(state => state.getSlidersReducer)

  return(
  <div>
      <Sliders sliders={sliders}/>
      <Category/>
      <br/>
      <RelatedProduct onsale={onsale} variant={variant} one={one} images={images}/>
      <BannerTab2/>
      <div className="col-12">
        <section className="section-title text-center pt-4">
          <h3 className="title">Featured Products</h3>
        </section>
      </div> {/*Title*/}
      <Featured one={one} images={images} onsale={onsale} variant={variant}/>
      <BannerDecore/>
      <Banners/>
      <NewArrivals one={one} images={images} onsale={onsale} variant={variant}/>
      <div className="col-12">
        <section className="section-title text-center pt-4">
          <h3 className="title">More Products</h3>
        </section>
      </div> {/*Title*/}
      <AllProducts article={article} num_pages={num_pages} tags={tags} sizes={sizes} colors={colors} one={one} images={images} onsale={onsale} variant={variant}/>
      <LargeBanner/>
      <RelatedProduct onsale={onsale} variant={variant} one={one} images={images}/>
  </div>
    )
}
export default Products
