import Banners from "../components/Banners";
import LargeBanner from "../components/LargeBanner";
import Category from "../components/Category";
import AllProducts from "../components/AllProducts";
import Sliders from "../components/Sliders";
import Featured from "../components/Featured";
const Home = ()=>
{
    return(
    <div>
        <Sliders/>
        <Category/>
        <Featured/>
        <Banners/>
        <AllProducts/>
        <LargeBanner/>
        <Featured/>
    </div>

)
}
export default Home
