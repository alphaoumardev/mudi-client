import {Link} from "react-router-dom";

const Crumb =()=>
{
    return(
        <div>
            <nav className="breadcrumb-section bg-light ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ol className="breadcrumb bg-transparent m-0 p-0 justify-content-center align-items-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">63in. White Stucco Floor Lamp</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Crumb
