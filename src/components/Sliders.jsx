import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Carousel} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch,} from "react-redux";
import {getSlides} from "../redux/Actions/productsActions";

const  Sliders = ({sliders})=>
{
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch()

    const handleSelect = (selectedIndex,) =>
    {
        setIndex(selectedIndex);
    };
    useEffect( ()=>
    {
        dispatch(getSlides())
    }, [dispatch])
    return (
    <div>
        <Carousel controls={true} fade={true} activeIndex={index}
                  nextIcon={ <i className="bi bi-chevron-right nexticon"> </i>}
                  prevIcon={ <i className="bi bi-chevron-left nexticon"> </i>}
                  onSelect={handleSelect}
                  indicatorLabels="1"
                  pause="hover"
                  keyboard={true}
                  touch={false}
        >
            {sliders?.map((item, index)=>
                <Carousel.Item key={index}>
                    <img
                        className="d-block sliders"
                        src={item?.slideItem?.image}

                        alt="First slide"
                    />
                    <Carousel.Caption bsPrefix='carousel-caption'>
                        <div className="hero-slide-content animated">
                            <p className="text text-white animated"> new collection</p>
                            <br/>
                            <h2 className="title text-dark delay1 animated">{item?.slideItem?.name}</h2>
                            <br/>
                            <Link to="/shop"  className="generic-btn mt-70 red-hover-btn text-uppercase roundedAnimation ">Discover Now</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
        </div>
    );
}
export default Sliders


