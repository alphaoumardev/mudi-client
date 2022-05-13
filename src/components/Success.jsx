import Crumb from "../little/Crumb";
import {Link} from "react-router-dom";

const Success = () =>
{
  return (
      <div>
          <Crumb/>
          <div className="container-fluid d-flex  text-center justify-content-center">
              <div className="row justify-content-center p-5" >
                  <div className="col-xl-12 col-lg-6 col-md-7 col-sm-9 shadow "
                       style={{backgroundColor: "whitesmoke", padding:"40px 20px", minHeight: 200, borderRadius: 10}}>
                      <i className="fa fa-check-circle-o fa-5x" style={{color:"limegreen"}}></i><br/>
               <span
                   style={{fontSize: "23px", fontWeight: "bold", color: "limegreen", letterSpacing: "1px", display: "inline-block", marginBottom: "15px"}}>
                  Sucess!
               </span><br/>
               <span style={{fontSize: 15, fontWeight: 600, color: "dodgerblue",  display: "inline-block", marginBottom: 15}}>
                  You have successfully purchased your cart
               </span>
                   <Link to="/myaccount#orders" type="button" className="btn text-center btn-outline-dark m-3"> See your order</Link>
              </div>
              </div>
          </div>

      </div>
  )
}
export default Success
