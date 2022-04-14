import '../css/login.css'
import {useState, useEffect} from "react";

const ScrollUp = ()=>
{
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>
        {
            if (window.scrollY > 400)
            {
                setShowTopBtn(true);
            } else
            {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () =>
    {
        window.scrollTo(
            {
            top: 0,
            behavior: "smooth",
        });
    };
    return(
        <div className="top-to-btm">
            {showTopBtn && <i  onClick={goToTop} className="bi bi-arrow-bar-up icon-position icon-style"> </i>}
        </div>
    )
}
export default ScrollUp
