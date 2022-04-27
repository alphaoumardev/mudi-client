import {useState} from "react";

const Topbar =()=>
{
    const [isOpen, setIsOpen] = useState(false);
    const [isOp, setIsOp] = useState(false);

    const togglePopupCur = () =>{setIsOpen(!isOpen)}
    const togglePopupLan = () =>{setIsOp(!isOp)}
    const close = () =>
    {
        setIsOpen(false)
        setIsOp(false)
    }
    if(!isOpen||!isOp){setTimeout(close, 5000)}
    return(
        <div>
            <div className="header-topbar topbar-default topbar-border-bottom d-none d-lg-block">
                <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <ul className="topbar-nav-info nav">
                                        <li className="topbar-nav-info-item"><span className="ion-ios-location-outline" /> Store Location</li>
                                        <li className="topbar-nav-info-item"><span className="ion-ios-email-outline" /><a href="mailto:alphaoumardev@outlook.com">alphaoumardev@outlook.com</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <nav className="simple-menu">
                                        <ul className="topbar-nav nav justify-content-end">
                                            <li className="topbar-nav-item">
                                                <a className="topbar-nav-link" href="#" onClick={togglePopupLan}>Lang</a>
                                                {/* dropdown menu start */}
                                                {isOp && <ul className="topbar-dropdown-menu menu-position-right">
                                                    <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">ENG</a></li>
                                                    <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">FR</a></li>
                                                </ul>}
                                                {/* dropdown menu end */}
                                            </li>
                                            <li className="topbar-nav-item">
                                                <a className="topbar-nav-link" href="#" onClick={togglePopupCur}>Currency</a>
                                                {/* dropdown menu start */}
                                                {isOpen && <ul className="topbar-dropdown-menu menu-position-right">
                                                    <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">USD</a>
                                                    </li>
                                                    <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">EUR</a></li>
                                                </ul>}
                                                {/* dropdown menu end */}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="header-topbar   topbar-default topbar-border-bottom d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <ul className="topbar-nav-info nav">
                                <li className="topbar-nav-info-item"><span className="ion-ios-location-outline" /> Store Location</li>
                                <li className="topbar-nav-info-item"><i className="bi bi-phone"> </i>13222702111</li>

                                <li className="topbar-nav-info-item"><span className="ion-ios-email-outline" /><a href="mailto:alphaoumardev@outlook.com" style={{textTransform:"lowercase", fontSize:15}}>alphaoumardev@outlook.com</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <nav className="simple-menu">
                                <ul className="topbar-nav nav justify-content-end">
                                    <li className="topbar-nav-item">
                                        <a className="topbar-nav-link" href="#" onClick={togglePopupLan}>Lang</a>
                                        {/* dropdown menu start */}
                                        {isOp && <ul className="topbar-dropdown-menu menu-position-right">
                                            <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">ENG</a></li>
                                            <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">FR</a></li>
                                        </ul>}
                                        {/* dropdown menu end */}
                                    </li>
                                    <li className="topbar-nav-item">
                                        <a className="topbar-nav-link" href="#" onClick={togglePopupCur}>Currency</a>
                                        {/* dropdown menu start */}
                                        {isOpen && <ul className="topbar-dropdown-menu menu-position-right">
                                            <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">USD</a>
                                            </li>
                                            <li className="topbar-dropdown-item"><a className="topbar-dropdown-nav-link" href="#">EUR</a></li>
                                        </ul>}
                                        {/* dropdown menu end */}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar
