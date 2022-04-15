import '../css/login.css'
import { Link, useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useRef, useState } from "react";
import { login } from '../redux/Actions/auth'
import { connect, } from "react-redux";

const Login = ({ login, isAuthenticated, }) =>
{

    const navigate = useNavigate()
    const [isFetching, setIsFetching] = useState(false);
    // const {dispatch, isFetching} = useContext(Context)
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value })
    const onSubmit = (e) =>
    {
        e.preventDefault()
        login(email, password)
    };
    useEffect(() =>
    {
        console.log(isAuthenticated)
        if (isAuthenticated)
        {
            return navigate('/')
        }
    }, );
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`/auth/o/google-oauth2/?redirect_uri=/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`/auth/o/facebook/?redirect_uri=/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };


 return(
        <div className="container">
            <div className="row w-100 login-form">
                <div className="col-xl-4 lea ">
                    <img src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png" alt="akn do" className=""/>
                </div>
                <div className="col-xl-4 login-wrap ">
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <h2  className="d-flex  mb-3 text-center">Sign In</h2>
                        <form onSubmit={onSubmit}>
                            <div className="group">
                                <label htmlFor="user" className="label" >Email</label>
                                <input
                                    onChange={e => onChange(e)}
                                    value={email}
                                    required={true}
                                    name="email"
                                    id="user" type="email"
                                    className="input"
                                    placeholder="Email"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label" >Password</label>
                                <input
                                    onChange={e => onChange(e)}
                                    value={password}
                                    minLength={6}
                                    required={true}
                                    id="pass" type="password"
                                    className="input"
                                    name="password"
                                    placeholder="password"/>
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox />}
                                    label="Keep me Signed in?"
                                    labelPlacement="end"
                                />

                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In"/>
                            </div>
                        </form>
                            <div className="group">
                                <button className='btn btn-danger mt-3 w-50' onClick={continueWithGoogle}>Google</button>
                                <button className='btn btn-primary mt-3 w-50' onClick={continueWithFacebook}>Facebook</button>
                            </div>
                            <div className="hr"> </div>
                            <div className="foot-lnk">
                                <Link to="#" className="already">Forgot Password?  </Link>or Not a<br/>
                                <Link to="/register" >Member yet? <b className="already" style={{marginLeft:8}} > Register Here </b></Link>
                            </div>
                        </div>
                        {/*Sign up*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated})
export default connect(mapStateToProps, {login}) (Login)


